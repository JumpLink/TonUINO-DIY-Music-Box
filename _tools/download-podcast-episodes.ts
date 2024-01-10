// Usage: deno run --allow-net --allow-read --allow-write ./_tools/download-podcast-episodes.ts --feed https://kinder.wdr.de/radio/diemaus/audio/diemaus-musik/diemaus-musik-106.podcast --feed https://kinder.wdr.de/radio/diemaus/audio/gute-nacht-mit-der-maus/diemaus-gute-nacht-104.podcast --feed https://kinder.wdr.de/radio/diemaus/audio/diemaus-60/diemaus-60-106.podcast --feed https://kinder.wdr.de/radio/diemaus/audio/maushoerspiel/maushoerspiel-100.podcast --feed https://www.antennebrandenburg.de/programm/hoeren/podcasts/Zappelduster_Podcast/podcast.xml/feed\=podcast.xml --target . start-index 1 --dry-run

import { downloadPodcastEpisodes, parseArguments } from './utils/index.ts';

const args = parseArguments(Deno.args);

// Parse arguments
const rssFeedUrls = args.feed;
const target = args.target?.[0] || '.';
const startIndex = Number(args["start-index"]?.[0]) || 1
const dryRun = !!args["dry-run"];

// Check if a feed URL was passed as an argument
if (!rssFeedUrls?.length) {
  console.error("Usage: deno run --allow-net --allow-write download-podcast-episodes.ts --feed RSS_FEED_URL --target TARGET --dry-run");
  Deno.exit(1);
}

let i = startIndex;

for (const rssFeedUrl of rssFeedUrls) {
  await downloadPodcastEpisodes(rssFeedUrl, target, dryRun, i);
  i++;
}


