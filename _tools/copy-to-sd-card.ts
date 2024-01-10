// Usage: deno run --allow-read --allow-write --allow-run _tools/copy-to-sd-card.ts (--source path) (--target path) (--dry-run)

import { getSDCardDirectory, range, pad, copyMp3Files, parseArguments, getDirectoryNames } from './utils/index.ts';

const args = parseArguments(Deno.args);

const sourceDir = args.source?.[0] || Deno.cwd();
const targetDir = args.target?.[0] || await getSDCardDirectory();
const dryRun = !!args["dry-run"];

if(!targetDir) {
  console.error("sd card not found!");
  Deno.exit(1);
}

const systemFolders = ["advert", "mp3"];
const directories = await getDirectoryNames(sourceDir);
const foldersToSearch = [...systemFolders, ...range().map(n => pad(n, 2)), "advert", "mp3"]


for (const sourceFolder of foldersToSearch) {
  const foundDir = directories.find(d => d.startsWith(sourceFolder));
  if(!foundDir) {
    console.log(`No directory found for ${sourceFolder}`);
    continue;
  }

  await copyMp3Files(sourceDir, foundDir, targetDir, dryRun, systemFolders);
}

console.log("Done!");