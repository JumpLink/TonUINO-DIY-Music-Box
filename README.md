# TonUINO DIY Music Box Project

Welcome to the TonUINO DIY Music Box Project! This project provides you with a set of scripts and instructions to create your very own customized [TonUINO](https://github.com/tonuino/TonUINO-TNG) music box. The TonUINO project draws inspiration from the [Toniebox](https://tonies.com/), offering a fun and engaging DIY experience to build a personalized music box for both children and adults. This project utilizes an Arduino, an MP3 module, an RFID reader, a micro-SD card, and other components to play music by scanning RFID cards.

## Scripts

### `_tools/copy-to-sd-card.ts`

This script is designed to copy all sound files to the SD card efficiently. It ensures that files on the FAT filesystem of the SD card are organized in alphabetical order, which is crucial for error-free playback. Additionally, it removes any characters from folder and file names that are not numbers, allowing for clear descriptions that can be easily managed during the transfer process.

### `_tools/download-podcast-episodes.ts`

This script simplifies the process of automatically downloading episodes from one or more podcast feeds. The downloaded files are named with an index, making them compatible with the `_tools/copy-to-sd-card.ts` script.

## Audio Content

Here is a list of the included audio content in this project, which you can customize to your liking. All included content is licensed under a free license.

| Index | Name                                                                                        | Type               | Mode  |
|-------|---------------------------------------------------------------------------------------------|--------------------|-------|
| 01    | [MausMix](https://www.wdrmaus.de/hoeren/podcast_musik.php5)                                 | Podcast            |       |
| 02    | [Gute Nacht mit der Maus](https://www.wdrmaus.de/hoeren/gute_nacht_mit_der_maus.php5)       | Podcast            |       |
| 03    | [Die Maus zum Hören](https://www.wdrmaus.de/hoeren/podcasts.php5)                           | Podcast            |       |
| 04    | [MausHoerspiel](https://www.wdrmaus.de/hoeren/hoerspiel.php5)                               | Podcast/Audio play |       |
| 05    | [Unser Sandmännchen](https://www.ardaudiothek.de/sendung/unser-sandmaennchen/23667030/)     | Podcast/Audio play |       |
| 06    | [Bippo, der Elefant](https://www.hoerspielprojekt.de/music/bippo-der-elefant/)              | Audio play         |       |
| 07    | Duck sounds                                                                                 | Sound clips        |       |
| 08    | Rooster sounds                                                                             | Sound clips        |       |
| 09    | Hen sounds                                                                                 | Sound clips        |       |
| 10    | Dog sounds                                                                                 | Sound clips        |       |
| 11    | Cat sounds                                                                                 | Sound clips        |       |
| 12    | Cow sounds                                                                                 | Sound clips        |       |
| 13    | Sheep sounds                                                                               | Sound clips        |       |

## Operation

See also [original source of the user manual](https://discourse.voss.earth/t/uebersicht-der-bedienung-tonuino/2072) (German)

### Creating a New Card

1. Place an empty card on the RFID reader. The card must remain on the reader until the configuration is complete.

2. Choose a folder using the volume buttons (even if you're creating an admin card) and press Play.

3. Set the playback mode using the volume buttons and press Play.
   - Audiobook mode (plays a random file from the folder with forward and backward buttons disabled): Play -> OK.
   - Album mode (plays all files in the folder): Play -> OK.
   - Party mode (plays files from the folder in random order): Play -> OK.
   - Single mode (plays a specific file from the folder): Play -> Select file -> Play -> OK.
   - Audiobook mode (plays a folder and saves progress): Play -> OK.
   - Admin functions (press Play to create an admin card): Play -> OK.
   - Special mode (play between start and end files): Play, Select start file -> Play, Select end file -> Play -> OK.
   - Special album mode (play all files between start and end): Play, Select start file -> Play, Select end file -> Play -> OK.
   - Special party mode (play all files between start and end randomly): Play, Select start file -> Play, Select end file -> Play -> OK.

### Admin Functions

To access the admin menu, activate it by pressing all three buttons or placing an admin card on the reader (you must restart the admin menu for each function).

1. Select a function using the volume buttons and press Play.
2. To cancel, press and hold Play, then press OK.

#### Reconfiguring a Card

- Press Play -> Place the card on the reader!
   The card must remain on the reader until the configuration is complete.
- Choose a folder using the volume buttons (even if you're creating an admin card) -> Play.
- Set the playback mode using the volume buttons -> Play.
   - Audiobook mode (plays a random file from the folder with forward and backward buttons disabled): Play -> OK.
   - Album mode (plays all files in the folder): Play -> OK.
   - Party mode (plays files from the folder in random order): Play -> OK.
   - Single mode (plays a specific file from the folder): Play -> Select file -> Play -> OK.
   - Audiobook mode (plays a folder and saves progress): Play -> OK.
   - Admin functions (press Play to create an admin card): Play -> OK.
   - Special mode (play between start and end files): Play, Select start file -> Play, Select end file -> Play -> OK.
   - Special album mode (play all files between start and end): Play, Select start file -> Play, Select end file -> Play -> OK.
   - Special party mode (play all files between start and end randomly): Play, Select start file -> Play, Select end file -> Play -> OK.

#### Setting Maximum Volume

- Adjust the desired volume level using the volume buttons -> Play -> OK.

#### Setting Minimum Volume

- Adjust the desired volume level using the volume buttons -> Play -> OK.

#### Setting Startup Volume

- Adjust the desired volume level using the volume buttons -> Play -> OK.

#### Configure Equalizer (EQ)

- Select the desired EQ mode (Normal, Pop, Rock, Jazz, Classical, Bass) using the volume buttons -> Play -> OK.

#### Create a Modification Card

- Select the desired modification (Sleep mode, Stop dance, TonUINO lock, Crawler mode, KITA mode, Repeat title) using the volume buttons -> Play.
   * Sleep mode (turns off after a set time) -> Play.
   - Adjust the desired time using the volume buttons (5min, 15min, 30min, 60min) -> Play -> OK.
   * Stop dance (TonUINO randomly stops playback and resumes after a short pause) -> Play -> OK.
   * TonUINO lock (TonUINO is locked, only admin card, lock card, or new card work) -> Play -> OK.
   * Crawler mode (TonUINO buttons are locked, cards still work) -> Play -> OK.
   * KITA mode (Each song plays to the end before a new card is played. Forward and backward buttons are disabled.) -> Play -> OK.
   * Repeat title (current title repeats endlessly) -> Play -> OK.
   - Place a card on the reader -> Card will be configured -> OK.

#### Configure Buttons with a Shortcut

- A long button press activates the shortcut. This function works only when nothing is currently playing.

1. Select the shortcut (Use volume buttons to choose the desired shortcut, Play/Pause, Volume Up, Volume Down, Shortcut on Startup) -> Play.
2. Choose a folder (Volume Up, Volume Down buttons) -> Play.
3. Set the playback mode using the volume buttons:
   - Audiobook mode (plays a random file from the folder) -> Play -> OK.
   - Album mode (plays all files in the folder) -> Play -> OK.
   - Party mode (plays files from the folder in random order) -> Play -> OK.
   - Single mode (plays a specific file from the folder) -> Play -> Select file -> Play -> OK.
   - Audiobook mode (plays a folder and saves progress) -> Play -> OK.
   - Admin functions (press Play to create an admin card) -> Play -> OK.
   - Special mode (play between start and end files) -> Play, Select start file -> Play, Select end file -> Play -> OK.
   - Special album mode (play all files between start and end) -> Play, Select start file -> Play, Select end file -> Play -> OK.
   - Special party mode (play all files between start and end randomly) -> Play, Select start file -> Play, Select end file -> Play -> OK.

#### Configure Timer

Note: Configure a timer for automatic shutdown. Shutdown can be done via a power bank, MOSFET switch, or Pololu.

- Set the shutdown time using the volume buttons (5min, 15min, 30min, 60min, no automatic shutdown) -> Play -> OK.

#### Create Individual Cards for a Folder

- Choose a folder using the volume buttons -> Play.
- Select the start file using the volume buttons -> Play.
- Select the end file using the volume buttons -> Play.
- Place cards one by one. The cards will be announced and configured sequentially -> OK.

#### Reverse Volume Button Functions

- No: Functions remain unchanged (Next, Previous track with short button press, Volume Up, Volume Down with long button press, volume changes gradually) -> Play -> OK.
- Yes: Functions are swapped (Next, Previous track with long button press, Volume Up, Volume Down with short button press, volume changes stepwise with each button press) -> Play -> OK.

#### Reset All Settings

- All settings will be cleared, and default values will be restored -> Play -> OK.

#### Secure the Admin Menu

- No Protection (Admin menu can be accessed anytime by pressing all three buttons: Play, Volume Up, Volume Down) -> Play -> OK.
- Admin Card Only (Admin menu can only be accessed with the admin card) -> Play -> OK. Admin card always works.
- Code Entry (Admin menu can only be accessed by entering a 4-digit PIN) -> Play.
   - Enter PIN (Press 4 buttons in your desired order, multiple button presses are allowed) -> No feedback, OK.
- Math Task (Admin menu can be accessed by solving a math problem) -> Play -> OK. To access the admin menu, press all three buttons. A math problem will be presented. Enter the result using the volume buttons and confirm with Play.
