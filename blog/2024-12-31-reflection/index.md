---
slug: reflection-2024
title: Reflection (the 2nd sequel nobody asked for)
authors: marlamin
tags: [life-updates]
enableComments: true
image: https://marlam.in/u/chrome_Mx8nShJieX.png
---

I've been writing one of these posts every year, so why not keep the tradition going? Even if only for myself, reflecting is a good thing to do every now and then. A lot happened this year, but at the same time also not much. Time to look back, review and look forward to 2025.

<!--truncate-->

### Updates on the various projects
I started off with this last year, so it only feels fitting to follow the same kind of structure this year. [wow.tools.local](https://github.com/Marlamin/wow.tools.local) (WTL) is still going strong. A lot of new features were added this year and I expect 2025 to be no different. My reasoning behind the project still hasn't changed and I'll likely keep it updated while alternatives to wow.tools are still missing (and at this point probably will never get to the same feature set). It now powers most of the work that goes into the [wow-listfile](https://github.com/wowdev/wow-listfile) and I'm still refining the automated/assisted naming going forward with some updates to the naming page coming in the new year as well.

<a href='https://marlam.in/u/chrome_YovHwZtElP.png' target='_BLANK'><img src='https://marlam.in/u/chrome_YovHwZtElP.png'></img></a>
_wow.tools.local model naming page (small update coming in 2025)_

[wow.tools](https://wow.tools) was moved to old.wow.tools earlier this year since some people were still ignoring all the various notices on the website and asking me for updates. 

While I initially expected to really have no use for the wow.tools domain in 2025, I've recently spun off the wow.tools minimap viewer into its own mini-site on [map.wow.tools](https://map.wow.tools/). The frontend may look largely the same (because it is), but the backend on how minimaps are extracted, compiled, cut up and all that was completely remade. The new site has been fed with data from _all_ public WoW builds between 0.x and 4.0.0 and all builds between 6.0 and today. Most of Cataclysm and all of MoP are still missing as I still need to painstakingly reconstruct and archive those builds of WoW, but I expect to have that done sometime in the new year.

<a href='https://map.wow.tools/?map=development&v=2825&z=2&lat=-125.796&lng=141.500' target='_BLANK'><img src='https://marlam.in/u/chrome_pxuR7H14Bd.png'></img></a>
_map.wow.tools_

As for [wow.export](https://github.com/Kruithne/wow.export), after announcing it going into maintenance mode last year I'm happy to report we've done exactly that and more as we've also added character model exports, glTF exports (for M2s) and refined exports for raw files. We just pushed out a new update today that adds support for 11.1 changes as well as atlas texture viewing/exporting. No new features are currently in the works, but who knows what'll happen next time we get a burst of energy. With a little luck, character exports will be far less important sooner rather than later, but that is for Wowhead to announce.

[DBCD](https://github.com/wowdev/DBCD) got a major update this year that allow for the writing of DB2 files. Most of this work was done by Barncastle and BinarySpace, but I finally took the time to sit down and merge it all in, write up some tests and ship that out. Modders have been using it to write their own DB2s and I've been using it to make silly fakes like this actually working DB2 that contains all of the cards from Hearthstone for the new built-in Hearthstone feature that's definitely coming in Midnight for sure, yep. 

<a href='https://marlam.in/u/chrome_2XJjk4m4m4.png' target='_BLANK'><img src='https://marlam.in/u/chrome_2XJjk4m4m4.png'></img></a>
_Hearthstone in WoW? It's less likely than you think_

[WoWDBDefs](https://github.com/wowdev/WoWDBDefs) has had no big updates in the past year, bloerwald is doing some heavy lifting to get a lot of missing versions largely from Legion merged in at some point, but that's still a work in progress.

Lastly, there's also the modding tools for modern WoW clients that I spent a bunch of time on this year. In case you missed it I refer you to [this part](/modding-wow-part2#creating-your-own-world-of-warcraft-with-noggit) of the modding (part 2) post on this blog. We did add support for modern point lights since that blog post which is neat. There's some other stuff related to that still in the works as well as the other stuff that's still [on the roadmap](https://marlamin.github.io/modern-map-making/roadmap).

### Personal update
Not much news compared to last year. My physical health is still improving overall, but still has its regular periods of being not-great. Almost no situations where it got _actually bad_ this year, so that's good. Mental health has had no to little change, much of the news this year has been shit, but we're all powering through.
As for gender identity and all that, while not having spent much time on figuring that out this year, I do feel like there's still something there that's worth exploring. Whether or not I'll do anything about that in 2025 remains to be seen (probably not).

Creativity wise I said "the jury is still out on creative outlets" last year and that is unchanged. I've enjoyed writing blog posts, working on the modding tools and doing a bit of modding to test that all myself, but nothing concrete has come out of it. My test town is still exactly that, but just larger with more testing areas.

<a href='https://marlam.in/u/noggit_3LPWHluq3K.jpg' target='_BLANK'><img src='https://marlam.in/u/noggit_3LPWHluq3K.jpg'></img></a>
_My little testing map_

I also had a bit of stuff about money in last year's reflection and that situation is also unchanged. Not exactly cutting into savings but not saving up either. If I can't keep that balance (and its getting increasingly difficult) I'll probably have to find some additional ways to make some money in the 2-4 days a week I don't work. Something like Patreon is still on the table, but I don't know. I still don't like all that.

### Looking forward, once again
I'm not going to repeat the forward looking stuff I already mentioned in the previous paragraphs. I still want to do the Hearthstone Tavern machinima project that I started messing with last year. A lot of the tooling I mentioned that was missing last year exists now, but there's still some things I need especially on the machinima side of things as I want to do this project entirely in-game with minimal to no editing done outside of it.

Streaming hasn't really been on my mind due to my very random work schedule intertwined with multi-tasking on various WoW things, some of which I can stream, some of which I can definitely not. Maybe there will still be a stream every now and then, but with Blizzard's increasingly packed content release schedule I've had very little time to consecutively work on something without tabbing to something work related every now and then which I obviously can't do on stream.

Deep dives into WoW things I still want to do and I released what I see as my first attempt at the concept [earlier this week](/modding-wow-part3), check it out if you haven't yet, I'm pretty happy with it. The sandbox project I mentioned last year is closer to reality than it was back then, but still far away from anything tangible. Having easier access to archived clients will help with that and there's a bit of tooling missing there that I still need to work on.

### Wrapping it up
That's probably it for this year. Nothing crazy, but life's moving forward nonetheless. If you want to keep up to date with me be sure to follow me over on [bluesky](https://bsky.app/profile/marlam.in) where I've had a lot more fun than I had on Twitter this year. Vibe wise I would compare it with my early years on Twitter, so that's been far more enjoyable than current Twitter. 

There's more blog posts in the works as well, most are still in the concept/idea stage but there should be a few of them this year for sure. 

I hope everyone has a good 2025 and with Half-Life 3 hopefully finally being announced and player housing finally coming to WoW it should hopefully be a good one. Right?

If there's anything in specific you'd like me to talk about in the future (like ideas for deep dive blog posts), have some feedback/questions or whatever, you can poke me in the usual places. 

Cheerio!