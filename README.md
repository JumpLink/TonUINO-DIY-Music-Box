# TonUINO DIY Music Box Project

This project is a collection of scripts created to build your own custom [TonUINO](https://github.com/tonuino/TonUINO-TNG) music box. TonUINO is a project inspired by the [Toniebox](https://tonies.com/) which is a DIY project that allows you to create a personalized music box for children (and adults 😉). The project utilizes an Arduino, an MP3 module, an RFID reader, a micro-SD card, and other components to play music selected by scanning RFID cards.

## Scripts

### `_tools/copy-to-sd-card.ts`

This script is used to copy all sound files to the SD card. It ensures that the files on the FAT filesystem of the SD card are stored in alphabetical order, which is essential to ensure that the files can be read from the SD card without errors and with efficiency. Additionally, it removes all characters from folder and file names that are not numbers, allowing folder and file names to contain descriptions that can be removed during the transfer process.

### ` _tools/download-podcast-episodes.ts`

This script facilitates the automatic downloading of episodes from one or more podcast feeds. The downloaded files are saved with a index in the filename that can be handled by the `_tools/copy-to-sd-card.ts` script.

## Audio content

This is the content of the box as I have created it, which can of course be customised to your own requirements. Only content with a free licence is included in this repository.

| Index | Name                                                                                         | Type               | Modus |
|-------|----------------------------------------------------------------------------------------------|--------------------|-------|
| 01    | [MausMix](https://www.wdrmaus.de/hoeren/podcast_musik.php5)                                  | Podcast            |       |
| 02    | [Gute Nacht mit der Maus](https://www.wdrmaus.de/hoeren/gute_nacht_mit_der_maus.php5)        | Podcast            |       |
| 03    | [Die Maus zum Hören](https://www.wdrmaus.de/hoeren/podcasts.php5)                            | Podcast            |       |
| 04    | [MausHoerspiel](https://www.wdrmaus.de/hoeren/hoerspiel.php5)                                | Podcast/Audio play |       |
| 05    | [Unser Sandmännchen](https://www.ardaudiothek.de/sendung/unser-sandmaennchen/23667030/)      | Podcast/Audio play |       |
| 06    | [Bippo, der Elefant](https://www.hoerspielprojekt.de/music/bippo-der-elefant/)               | Audio play         |       |
| 07    | Ducks sounds                                                                                 | Sound clips        |       |
| 08    | Rooster sounds                                                                               | Sound clips        |       |
| 09    | Hen sounds                                                                                   | Sound clips        |       |
| 10    | Dog sounds                                                                                   | Sound clips        |       |
| 11    | Cat sounds                                                                                   | Sound clips        |       |
| 12    | Cow sounds                                                                                   | Sound clips        |       |
| 13    | Sheep sounds                                                                                 | Sound clips        |       |