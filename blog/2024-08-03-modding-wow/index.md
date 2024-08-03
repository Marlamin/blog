---
slug: modding-wow-part1
title: WoW Modding 101 - Intro
authors: marlamin
tags: [wow, world-of-warcraft, modding]
enableComments: true
image: https://marlam.in/u/noggit_i1cv9gCJkW.png
---

I love modding games. I love WoW. Following that logic, I've been dipping my toes in WoW modding for a bit now and wanted to do a bit of an intro post on it. Many people won't be familiar with it (for obvious reasons we'll get into), but I still think it is pretty neat and has the ability to be even neater in the future. 

<!--truncate-->

There are a ton of talented artists in the WoW community and while modding in general isn't something that's frowned upon in the gaming community (if anything it is encouraged), it has had a negative reputation in the mainstream WoW community due to its long history with cheating, scummy for-profit private servers that try to compete with Blizzard and other things.

### Uh... is this allowed? 
It's complicated. Many things, including datamining, running private servers or even the simple act of opening up wow.export or WoW Model Viewer to get some stuff from the game is not allowed as per the WoW terms of service. So, no.

At the same time, Blizzard has had a long time of showing some leniency in terms of what they enforce against and what they let be. Many projects that are the result of things that technically break the terms of service (e.g. sites like Wowhead, tools that machinima artists use, etc) are actively used and sometimes even commissioned by Blizzard, even though they won't publicly acknowledge those parts of those projects as it would undermine their own policies.

### Should it be?
Modding is one of those things that toes the line between what is allowed and what isn't, depending on what you do. Are you modding the official game on live servers? That might be enforced against or not depending on what you're doing as that could, for example, be used for cheating. I personally wouldn't ever recommend editing game files on official servers for that reason.

In my personal opinion (which is definitely not legal advice), modding in a local environment that is neither for-profit and/or trying to compete with Blizzard, let alone not public, should be okay and should at least not call upon the wrath of big blue. Obviously, Blizzard wouldn't think the same if you asked but at the same time they won't bother with it. 

For a company with Blizzard's history in modding, it's weird that they haven't tapped into this market of creatives with WoW. Granted there's a lot of issues with continuity, spending resources on supporting things like this and it making certain parts of the game far more complex to run/host or make secure/stable, which is why I think it should be permitted for the community to take this upon themselves, and at least not actively be worked against by Blizzard.

### Brief overview of the types of modding
I'm going to be primarily focusing on modding the world in these posts as that's what I enjoy about it the most, but there's more stuff out there than just that. Granted, I haven't really messed with these, but I know they exist.

- Modding armor/weapons into WoW; either adding in stuff from other games, modding in remade WoW weapons made by someone like [Tomkek](https://www.youtube.com/@Tomkektv/videos) or simply making recolors of existing items.
- Character modding; making your character look like what you want it to look like. Obviously this also contains an NSFW aspect that I'll never get into, but it's too big of a thing to not mention at all.
- Quality/look; Using things like ReShade to change the way the game looks or using higher quality textures (including the AI upres textures Blizz is experimenting with in Cata Classic)
- Gameplay; This obviously is very limited to private servers because it's harder to mod on just the client, but there's definitely some pretty crazy modded servers out there.
- Retroporting (*colloquially also called fuckporting due to an inherent loss of data*) which basically takes content from recent versions of the game and converts it into content supported by older versions of the game, most commonly going from Retail WoW clients to 3.3.5 clients.

### World building/map making
Now this is my cup of tea. I love the idea of world building and making my own zones. The WoWEdit panels are my favorite BlizzCon panels (and it's a disgrace we haven't seen them in a while) and I've studied those panels for hours. I know I'm not alone in that either.

There's a solid bunch of people who make their own maps for WotLK clients, but I wanted something more recent as there's quite a few limitations in the 3.3.5 old client (even though some crafty people have worked very hard to remove or raise those limitations over the years).

On the other hand, there's also more than a few people who enjoy making their own places in a more modern WoW environment and they've largely kept to the RP private servers that give them this ability with the largest one being Epsilon WoW.

Epsilon allows players to spawn NPCs, objects, buildings as well as a bunch of other things and then of course have roleplaying events and such in said customized places. Polygon's Cass Marshall [has written about Epsilon](https://www.polygon.com/23025284/epsilon-world-of-warcraft-community-housing-creation-building-role-play) as well as one of the projects made on Epsilon: [Fission Heights](https://www.polygon.com/23774369/world-of-warcraft-epsilon-phase-fission-heights-goblin-gnomes-lore-wow), I highly suggest checking their articles out.

Even though it's an amazing project that has managed to make the game client do things unimaginable on retail, it does have some limitations. The largest of which (in my opinion) is that you can't *really* make custom maps from the ground up with all the terrain modifying features that you would have in a proper map editor, let alone in a way that is remotely similar in performance as normal WoW is (custom Epsilon areas are usually made out of many hundreds or thousands of server-spawned objects).

To create zones externally of the client, there is only one open-source map editor that is complete enough to work with and is still worked on today and that is **Noggit**, but more on that in the next post.

Either way, it's clear that there's a want out there for people to make custom WoW content and it's a shame that the outlets to do so are either relatively limited, stuck in the past, or somewhat underground/grey areas like Epsilon is. I wish that weren't the case and that Blizzard had a friendly/more welcoming way to go about all of this, but alas. 

### To be continued

I'm hoping these series of posts, the work that's being done by a few people behind the scenes and the other stuff I'm going to be talking about might bring this topic more into the 'mainstream' WoW community, get a few more people excited about it and maybe even drag modding out of underground-vibe that it currently has into more of a spotlight for more people to enjoy.

In the next blog post I'll be going into what Noggit is, what it can and can't do and the work we're doing to drag it from the dark ages (WotLK 3.3.5) to more modern times (Shadowlands 9.2.7 and up).

While messing with Noggit and some tool development, I've also been working on my own zone off and on for a few months now (pictured below). Stay tuned for that and more, soon.

![https://marlam.in/u/noggit_0KdwPOlNSH.jpg](https://marlam.in/u/noggit_0KdwPOlNSH.jpg)