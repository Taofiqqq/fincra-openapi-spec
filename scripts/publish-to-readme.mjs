#!/usr/bin/env node
/**
 * Publish the authored spec to a ReadMe version branch.
 *
 * `rebuild` is where openapi.yaml is authored. ReadMe owns the version
 * branches (v4.0 and friends) and writes to them itself, so this script
 * yields to ReadMe rather than competing with it: it stages only the files
 * under reference/, rebases onto whatever ReadMe has published, and never
 * force-pushes.
 *
 * Page generation is not done here. `@readme/cli oas:sync` is the same
 * operation the "resync" button performs in the ReadMe UI, run locally
 * against the worktree, so the pages match what ReadMe would have written.
 *
 *   node scripts/publish-to-readme.mjs [--dry-run] [--branch v4.0]
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";

const CLI_VERSION = "0.0.30"; // pinned: generation behaviour must not drift under us
const PUSH_ATTEMPTS = 5;

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}
const dryRun = process.argv.includes("--dry-run");
const branch = arg("branch", "v4.0");
const specFile = arg("spec", "openapi.yaml");

const run = (cmd, args, opts = {}) =>
  execFileSync(cmd, args, { encoding: "utf8", stdio: "pipe", ...opts }).trim();
const git = (args, cwd) => run("git", args, { cwd });

const repoRoot = git(["rev-parse", "--show-toplevel"]);
const worktree = path.join(repoRoot, ".git", "readme-publish", branch);

const say = (m) => console.log(m);
const step = (m) => console.log(`\n\x1b[1m${m}\x1b[0m`);

// ---------------------------------------------------------------- spec

step(`Reading ${specFile}`);
const specPath = path.join(repoRoot, specFile);
if (!fs.existsSync(specPath)) {
  console.error(`No spec at ${specPath}`);
  process.exit(1);
}
const spec = parseYaml(fs.readFileSync(specPath, "utf8"));
const opCount = Object.values(spec.paths ?? {}).reduce(
  (n, item) => n + Object.keys(item).filter((k) => k !== "parameters").length,
  0,
);
say(`  ${Object.keys(spec.paths ?? {}).length} paths, ${opCount} operations`);

// ------------------------------------------------------------ worktree

step(`Preparing a clean worktree for ${branch}`);
git(["fetch", "origin", branch]);
if (fs.existsSync(worktree)) {
  try {
    git(["worktree", "remove", "--force", worktree]);
  } catch {
    fs.rmSync(worktree, { recursive: true, force: true });
    git(["worktree", "prune"]);
  }
}
fs.mkdirSync(path.dirname(worktree), { recursive: true });
git(["worktree", "add", "--detach", worktree, `origin/${branch}`]);
say(`  ${worktree}`);
say(`  at ${git(["rev-parse", "--short", "HEAD"], worktree)}`);

const refDir = path.join(worktree, "reference");
if (!fs.existsSync(refDir)) {
  console.error(`No reference/ on ${branch} — is this a ReadMe version branch?`);
  process.exit(1);
}

// ------------------------------------------------------------ the spec

step("Writing reference/openapi.json");
// 2-space indent and no trailing newline, matching what ReadMe itself writes,
// so the diff carries only real changes.
fs.writeFileSync(path.join(refDir, "openapi.json"), JSON.stringify(spec, null, 2));

// ------------------------------------------------------------ the pages

step("Generating reference pages (@readme/cli oas:sync)");
try {
  say(run("npx", ["--yes", `@readme/cli@${CLI_VERSION}`, "oas:sync"], { cwd: worktree }));
} catch (err) {
  console.error(err.stdout || err.message);
  console.error("\noas:sync failed — nothing committed.");
  process.exit(1);
}

// ---------------------------------------------------------- slug fixup

/**
 * Reconcile category folder names onto ReadMe's own spelling.
 *
 * @readme/cli 0.0.30 derives a category folder by lowercasing the tag and
 * nothing else (`operationGroup` -> `safeSegment(tag).toLowerCase()`), so
 * "Wallets and Balances" becomes "wallets and balances". ReadMe's UI writes
 * the hyphenated "wallets-and-balances", and that is what the published URLs
 * and the existing pages already use. Left alone the two spellings coexist
 * and the section forks in two.
 *
 * Scoped deliberately to the immediate children of reference/<info.title>:
 * those are the generated categories. Sibling folders such as
 * "Getting Started", and the spec folder itself, are hand-authored and keep
 * their spaces.
 */
function reconcileCategorySlugs(apiDir) {
  if (!fs.existsSync(apiDir)) return [];
  const renamed = [];

  for (const entry of fs.readdirSync(apiDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || !entry.name.includes(" ")) continue;

    const canonical = entry.name.replace(/\s+/g, "-");
    const from = path.join(apiDir, entry.name);
    const to = path.join(apiDir, canonical);

    if (fs.existsSync(to)) {
      // The canonical folder is already there and owns its pages. Move across
      // only what it is missing, so nothing ReadMe wrote gets overwritten.
      for (const file of fs.readdirSync(from)) {
        if (!fs.existsSync(path.join(to, file))) {
          fs.renameSync(path.join(from, file), path.join(to, file));
        }
      }
      fs.rmSync(from, { recursive: true, force: true });
    } else {
      fs.renameSync(from, to);
    }
    renamed.push([entry.name, canonical]);
  }

  if (renamed.length) rewriteOrder(path.join(apiDir, "_order.yaml"));
  return renamed;
}

/** Hyphenate spaced entries and drop duplicates, preserving curated order. */
function rewriteOrder(orderPath) {
  if (!fs.existsSync(orderPath)) return;
  const seen = new Set();
  const entries = [];

  for (const line of fs.readFileSync(orderPath, "utf8").split("\n")) {
    const match = line.match(/^-\s+(.*)$/);
    if (!match) continue;
    const slug = match[1].trim().replace(/\s+/g, "-");
    if (slug && !seen.has(slug)) {
      seen.add(slug);
      entries.push(slug);
    }
  }
  fs.writeFileSync(orderPath, entries.map((e) => `- ${e}`).join("\n") + "\n");
}

// ------------------------------------------------------------- staging

step("Reconciling category folder names");
const renamed = reconcileCategorySlugs(
  path.join(refDir, String(spec.info?.title ?? "").replace(/[/\\]/g, "-").trim()),
);
if (renamed.length) {
  for (const [from, to] of renamed) say(`  ${from} -> ${to}`);
} else {
  say("  Nothing to reconcile.");
}

step("Staging");
// Only reference/. Everything else on this branch belongs to ReadMe.
git(["add", "--", "reference"], worktree);
const staged = git(["diff", "--cached", "--name-only"], worktree);

if (!staged) {
  say(`  Nothing to publish — ${branch} already matches ${specFile}.`);
  git(["worktree", "remove", "--force", worktree]);
  process.exit(0);
}
say(git(["diff", "--cached", "--stat"], worktree));

if (dryRun) {
  step("Dry run — nothing committed or pushed");
  say(`Inspect the full diff with:\n  git -C "${worktree}" diff --cached`);
  say(`Discard it with:\n  git -C "${repoRoot}" worktree remove --force "${worktree}"`);
  process.exit(0);
}

// ------------------------------------------------------------ publish

step("Committing");
const summary = staged.split("\n").length;
git([
  "commit",
  "-m",
  `Publish API definition to ${branch} (${summary} file${summary === 1 ? "" : "s"})`,
  "-m",
  `Generated from ${specFile} at ${git(["rev-parse", "--short", "HEAD"])} on rebuild.`,
], worktree);

step(`Pushing to ${branch}`);
let pushed = false;
for (let attempt = 1; attempt <= PUSH_ATTEMPTS && !pushed; attempt++) {
  try {
    git(["fetch", "origin", branch], worktree);
    try {
      git(["rebase", `origin/${branch}`], worktree);
    } catch (err) {
      // A conflict means ReadMe changed the same files. Stop and let a human
      // look: force-pushing here would discard work authored in the editor.
      git(["rebase", "--abort"], worktree);
      console.error(err.stdout || err.message);
      console.error(
        `\nRebase onto origin/${branch} conflicted. Nothing pushed, nothing lost.\n` +
        `ReadMe changed the same files. Resolve in:\n  ${worktree}`,
      );
      process.exit(1);
    }
    git(["push", "origin", `HEAD:${branch}`], worktree);
    pushed = true;
  } catch (err) {
    if (attempt === PUSH_ATTEMPTS) {
      console.error(err.stdout || err.message);
      console.error(`\nPush failed after ${PUSH_ATTEMPTS} attempts.`);
      process.exit(1);
    }
    say(`  Race with ReadMe on attempt ${attempt}; rebasing and retrying.`);
  }
}

say(`  Pushed ${git(["rev-parse", "--short", "HEAD"], worktree)} to ${branch}.`);
git(["worktree", "remove", "--force", worktree]);

step("Done");
say(`ReadMe will pull ${branch} and publish the updated reference.`);
