# TonUINO DIY Music Box Project

This project is a collection of scripts created to build your own custom TonUINO music box. TonUINO is a DIY project that allows you to create a personalized music box for children. The project utilizes an Arduino, an MP3 module, an RFID reader, a micro-SD card, and other components to play music selected by scanning RFID cards.

## Scripts

### `_tools/copy-to-sd-card.ts`

This script is used to copy all sound files to the SD card. It ensures that the files are placed on the SD card in alphabetical order, which is essential to ensure that the files can be read from the SD card without errors and with efficiency. Additionally, it removes all characters from folder and file names that are not numbers, allowing folder and file names to contain descriptions that can be removed during the transfer process.

### ` _tools/download-podcast-episodes.ts`

This script facilitates the automatic downloading of episodes from one or more podcast feeds. The downloaded files are saved with a index in the filename that can be handled by the `_tools/copy-to-sd-card.ts` script.

## Audio content

| Index | Name                    | Type               | Modus |
|-------|-------------------------|--------------------|-------|
| 01    | MausMix                 | Podcast            |       |
| 02    | Gute Nacht mit der Maus | Podcast            |       |
| 03    | Die Maus zum Hören      | Podcast            |       |
| 04    | MausHoerspiel           | Podcast/Audio play |       |
| 05    | Unser Sandmännchen      | Podcast/Audio play |       |
| 06    | Bippo, der Elefant      | Audio play         |       |
| 07    | Ducks sounds            | Sound clips        |       |
| 08    | Rooster sounds          | Sound clips        |       |
| 09    | Hen sounds              | Sound clips        |       |
| 10    | Dog sounds              | Sound clips        |       |
| 11    | Cat sounds              | Sound clips        |       |
| 12    | Cow sounds              | Sound clips        |       |
| 13    | Sheep sounds            | Sound clips        |       |