---
slug: naming-vo
title: Naming WoW's VO audio
authors: marlamin
tags: [wow, world-of-warcraft, datamining, wow-tools]
enableComments: true
image: https://marlam.in/u/chrome_uRyfiCdSDq.png
---
This is the first post in a series of posts I plan to make around datamining and what goes into various parts of it. Off we go!

Back in patch 8.2, Blizzard removed the primary way for us to verify guessed filenames for World of Warcraft's files. These days, only interface files ship with official filenames and everything else has to be guessed by the community, with no way to verify. Said guesses are then stored in a [listfile](https://github.com/wowdev/wow-listfile). 

One of the harder categories of files to automatically generate names for are the tens of thousands of WoW's voice-over audio files. This post goes into some of the work we've had to do in the community to be able to name these files so people can actually find them (for whatever reason).

<!--truncate-->

### From NPC to VO file
One thing that is important to understand is how these files are linked between an NPC saying them in e.g. chat and the game being able to find and open the correct audio file to play to go with that.

Here's a rough outline of what happens with some creative liberties taken to keep it short-ish:

1. The server tells the client that an NPC said something (usually in chat), data sent back and forth during this exchange includes various things like the NPC's name, but more importantly a `BroadcastText` 'hotfix' if its not already available in the client-included `BroadcastText.db2` file, said record is also then cached in `Cache/ADB/enUS/DBCache.bin` on disk.
2. The `BroadcastText` record sent down by the server contains what text was said (in the users language), what `SoundKitID` to use and a bunch of other related information. It can also contain an optional encryption key to decrypt the VO file with (almost all voice-over files are encrypted by default in recent expansions to prevent spoiler datamining).
3. With the given `SoundKitID`, the client can look up which `FileDataIDs` (files) are connected to that ID by looking in the `SoundKitEntry.db2` table. For VO this is usually just one file.
4. The client looks up the file by its ID in local storage and attempts to open it, and if needed, uses the earlier sent over encryption key to decrypt the file.

So nothing _too_ crazy, right? 

### Problems
...right. For automatically naming files, we can generally only use what is in the client to name files. `BroadcastText.db2` in the client only has a very small amount of records stored in it (~8k out of ~200k) which means most dialog won't be in there. 

The lack of locally available records (and encryption of files) is an anti-datamining/spoiler technique that works pretty well for Blizzard to keep the lid on things before things are supposed to be playable/accessible. Great for that, not so great for this usecase (which, well, is datamining).

But there's an ever bigger problem. There is nothing saved in/by the client that directly connects an NPC _(also referred to as creature)_ to a BroadcastText record and (as we now know) by extension also nothing to tie it to the file containing the dialog. 

_Oh dear._

### Solutions
#### Missing BroadcastText entries
As mentioned earlier, the client caches the BroadcastText 'hotfix' it gets from the server on disk in `Cache/ADB/enUS/DBCache.bin`, so if you encounter NPC dialog in-game it'll be saved in there together with the optional encryption key. The most obvious solution is crowdsourcing the collection of these cache files and slowly building up a complete as possible dataset of BroadcastText. 

It is also possible to 'scan' certain information on the client by requesting it from the server in batches and depending on what kind of information this can either be done through addons or less-savoury tools that interface with the WoW client. In the case of BroadcastText it is only the latter, so not something the community has easy access to, nor should it, but caches that come out of these scans are still regularly shared and very helpful to the cause.

#### The missing Creature -> BroadcastText link
The only solution to this so far has been addons that collect data from WoW sessions and save it in a file that can be parsed later. Thottbot initially pioneered this method of data gathering to calculate things like drops chances etc. WoWDB and later Wowhead improved upon this in their respective addons.

For NPC dialog specifically I know of 4 addons that track this, the Wowhead Looter, WoWDB Profiler, [Adventure Archives](https://www.curseforge.com/wow/addons/adventure-archives) and [Datamine](https://www.curseforge.com/wow/addons/datamine).

One notable challenge here is that it's not always possible for these addons to reliably tie dialog text to a `CreatureID`, but only to a creature name as some of the different types of dialog don't always expose the ID to addons, so in a worst case scenario the only data one has is that an NPC named "Gamon" said the line _"Farewell."_. 

### From VO file to NPC
So how do we tie all of that together in a way where we can give a certain file ID a name that contains the name of the NPC?

Once again, a rough outline of the automated file naming as it works right now:

1. Using collected addon data (preferably from [Datamine](https://www.curseforge.com/wow/addons/datamine)), make a map of creature name => dialog text.
2. Using collected cached BroadcastText records, make a map of text => `SoundKitID`.
3. Using `SoundKitEntry.db2` from the client, make a map of `SoundKitID` => `FileDataID`.
4. Walk through collected addon data, find the `SoundKitID` for that dialog in the `BroadcastText` map.
5. Find the `FileDataID` belonging to that `SoundKitID` in the `SoundKitEntry` map.
6. Name the file based on the creature name from the collected addon data (and the patch it was added in).

![https://marlam.in/u/WindowsTerminal_UiMAGFUKa5.png](https://marlam.in/u/WindowsTerminal_UiMAGFUKa5.png)
_The wow.tools.local automatic VO naming doing its thing as outlined above._

The astute amongst you might see a flaw given with this current system and the notable challenge I mentioned in the previous section. If not, read back and see if you can figure it out.

### Fixing mistakes/exceptions
Figured it out? Either way, it turns out that, for example, a lot of NPCs in the game have the voice line _"Farewell."_ so now the automatic mapping thinks that each BroadcastText of _"Farewell."_ belongs to Gamon. Obviously not great and this can happen for many short non-specific voice lines. The video at the end of the post shows how many "Farewell."'s it thinks were said by Gamon.

Another issue that can happen is that during some quests players get companion NPCs that follow you around, some of which have dialog during e.g. the Maw intro Darion Mograine joins you for a bit and says some things. But, because he has the same `CreatureID` as the Darion Mograine that join other players, the addons can get confused based on the first name they see for that `CreatureID`. The only difference is that the Darion following around other players has a generic name like "Human Death Knight" or something so now the addon thinks the name of that NPC from now on is "Human Death Knight" instead of "Darion Mograine".

A far more rare issue is that sometimes the server takes too long to tell the client what name a specific creature has and it'll show up as "Unknown", which the addons can also take as gospel if they aren't specifically built to ignore it.

All of these cases require a human to look over generated filenames and fix any mistakes. 

For that reason I've made a page for an upcoming [wow.tools.local](https://github.com/Marlamin/wow.tools.local) update that allows me (or anyone running it, really) to fix any bad mappings/filenames and then submit the fixed names to the [community listfile](https://github.com/wowdev/wow-listfile). See below video for a demo of the biggest issue and a single mapping/filename fix at the end.

_***Audio warning***: Farewells are a bit loud..._
<div>
  <video width="100%" height="100%"  controls>
    <source src="https://marlam.in/u/chrome_kq5fzUBEZZ.mp4" type="video/mp4"/>
  </video>
</div>

That's it for this post. All that remains to be said is.. _farewell._