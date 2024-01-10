import { copy, ensureDir, walk, exists } from "https://deno.land/std/fs/mod.ts";
import { dirname } from "https://deno.land/std/path/mod.ts";
import { renameToNumbersOnly,  sortAsyncIterable } from './index.ts';

export async function getSDCardDirectory(): Promise<string | null> {
    try {
      const command = new Deno.Command("sh", {
        args: [
            "-c", "lsblk -o MOUNTPOINT,NAME -l | grep /media | awk '{print $1}'"
        ],
      });
  
      const { code, stdout, stderr } = await command.output();
  
      if (code === 0) {
        const sdCardPath = new TextDecoder().decode(stdout).trim();
        return sdCardPath;
      } else {
        console.error(`Error on get SD-Card directory: ${new TextDecoder().decode(stderr)}`);
        return null;
      }
    } catch (error) {
      console.error(`Error on execute command: ${error.message}`);
      return null;
    }
}

export async function copyMp3Files(source: string, folder: string, target: string, dryRun = true, excludeRenameFolders: string[] = ["advert", "mp3"]) {
  const sourceFolder = `${source}/${folder}`;
  const excludeRename = excludeRenameFolders.includes(folder);

  if(!excludeRename) {
    folder = renameToNumbersOnly(folder, 2);
  }

  if(!await exists(sourceFolder, { isDirectory: true })) {
    return;
  }
  const walker = await sortAsyncIterable(walk(sourceFolder), (a, b) => a.name.localeCompare(b.name));

  for await (const entry of walker) {
    if (entry.isFile && entry.name.endsWith(".mp3")) {
      const filename = excludeRename ? entry.name : renameToNumbersOnly(entry.name, 3);
      const destinationPath = `${target}/${folder}/${filename}`;

      if(!dryRun) await ensureDir(dirname(destinationPath));
      if(await exists(destinationPath)) {
        console.log(`Already exists: ${destinationPath}`);
        continue;
      }
      if(!dryRun) await copy(entry.path, destinationPath);

      console.log(`Copied: ${entry.path} -> ${destinationPath}`);
    }
  }
}

export async function getDirectoryNames(path: string): Promise<string[]> {
  const entries = Deno.readDir(path);
  const directoryNames: string[] = [];
  for await (const entry of entries) {
      if (entry.isDirectory) {
          directoryNames.push(entry.name);
      }
  }
  return directoryNames;
}