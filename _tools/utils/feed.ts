import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { ensureDir, exists } from "https://deno.land/std/fs/mod.ts";
import { extname, join } from "https://deno.land/x/std/path/mod.ts";
import { pad, slugify } from './index.ts';

export async function downloadPodcastEpisodes(feedUrl: string, target = '.', dryRun = true, index = 0): Promise<void> {
    try {
      // Fetch RSS feed
      const response = await fetch(feedUrl);
      const xmlText = await response.text();
  
      // Parse the feed
      const doc = new DOMParser().parseFromString(xmlText, "text/html"); // "text/xml" is not supported yet
      if(!doc) {
        throw new Error("Failed to parse XML");
      }
      const items = Array.from(doc.querySelectorAll("item"));
      let i = 1;
  
      if(items.length === 0) throw new Error("No items found");
  
      const title = doc.querySelector("title")?.textContent;
    
      if(title) target = join(target, slugify(title));
      if(index > 0) target = `${pad(index, 2)}-${target}`;

      console.log(`\nDownloading episodes from ${feedUrl} to ${target}`);
  
      if(!dryRun) await ensureDir(target);
  
      // Loop through all episodes
      for (const item of items.reverse()) {
        const el = item as Element;
        const titleElement = el.querySelector("title");
        const title = titleElement ? titleElement.textContent : "Unknown Title";
        const enclosure = el.querySelector("enclosure");
        const audioUrl = enclosure ? enclosure.getAttribute("url") : null;
  
        if (audioUrl) {
          const ext = extname(audioUrl) || '.mp3';
          const filename = `${pad(i, 3)}-${slugify(title)}${ext}`;

          const path = join(target, filename);

          if(await exists(path)) {
            console.log(`Already exists: ${path}`);
            i++;
            continue;
          }
  
          if(!dryRun) {
            // Download audio files
            const audioResponse = await fetch(audioUrl);
            
            // const audioBlob = await audioResponse.blob();
            // Save audio files
            if(audioResponse.body) {
              await Deno.writeFile(path, audioResponse.body);
            } else {
              console.error("No body found for audio response")
            }
          }
  
          console.log(`Downloaded to ${path}`);
        }
        i++;
      }
    } catch (error) {
      console.error("Error downloading podcast episodes:", error);
    }
  }