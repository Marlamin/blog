---
slug: new-engine
title: On the "new WoW engine" topic
authors: marlamin
tags: [wow, world-of-warcraft, datamining]
enableComments: true
image: https://marlam.in/u/chrome_BJxSKEVgT6.png
date: 2025-07-01
---

Much to my annoyance, at an increasingly frequent rate, the "WoW needs a new engine! It's still based on Warcraft 3!" discussions show up again. First, I don't think that's actually what people want when they say that. Second, there's very little if anything from the Warcraft 3 days left. 

Blizzard is unlikely to tackle this topic directly outside of the "we're constantly upgrading the game" quote they've used before. There's few people outside of Blizzard who are qualified to speak on this, and I'm not one of them, but given my experience, I feel like I can at least try.

<!-- truncate -->

## Who am I to speak on this?
Fair question. I'm not going to pretend to be the outmost expert on WoW's internals, but [given the ~15 years](https://github.com/Marlamin) I've spent taking various parts of the game apart and building tools that interact with it and its data, I feel like I have a good enough overview on how the game works and has changed over the years to at the very least try and talk about this. 

I also know/work with several people who are far more knowledgeable about specific systems than I am that I've asked for input and feedback on this post.

## What do the people want?
This is probably good to set out as baseline when working on this post. I'm sure there's more varying opinions than this out there when people talk about "wanting a new engine", but these are the main 2 things I see out there.

### Visual overhaul
From what I've gathered, most people just want the game to get a complete visual overhaul to look closer to what those "WoW 2.0" AI slop videos are putting out. Given the amount of work remaking all assets ever, I'm not going to tackle that. That is, unless Blizzard has been doing that behind the scenes for some reason for several years now, not going to happen anytime soon. There is however a chance this will be the case for certain future assets. More on that later!

### Complete overhaul
Others want a complete engine overhaul to the likes of a modern AAA engine such as Unreal engine, either for performance reasons or visual ones. While there's projects out there attempting this, they'll have the same issue in needing to make new assets to make it not look like they just stuck old assets into a modern engine. And if such a look is fine for said people, those projects are also always focusing on older and simpler versions of the game such as 1.12 or 3.3.5 with far less systems to deal with. For modern WoW and all the historic content that comes with it, this quickly becomes an insurmountable task, let alone while running a live service game.

## The current engine
### Warcraft 3 == WoW?
So most of the engine at release was still the same as Warcraft 3, right? Not really. I'm sure parts were, but most of it wasn't the same at that point. 

It used different or upgraded file formats. For model files for example, it switched over from [MDX](https://wowdev.wiki/MDX) to [M2](https://wowdev.wiki/M2) during the original Alpha and these are hardly comparable file formats. Outside of the [BLP](https://wowdev.wiki/BLP) file extension, of which its internal format version was bumped from 0 (or from 1 as seen in Warcraft 3: The Frozen Throne) to 2 with various changes coming with that, no file formats or extensions were carried over from Warcraft 3 directly. It is worth noting that BLP is also just a wrapper over various image/texture compression formats and while these things don't change a lot, they could add newer compression methods like BC7 in the future pretty easily just like they added DXT5/BC5 to it post-release as well.

As for internals, I can't say I had experience with looking at e.g. the rendering system or the network system at the time, but common sense dictates that given WoW looked wildly different and was built as an MMO instead of an RTS, these systems weren't exactly the same outside of the similar graphics API or data transfer protocols they targeted at the time.

### A timeline of changes
Most of the changes to the WoW engine obviously came after its initial release in 2004. The earlier on the less detailed information the community has on internal changes, but I'll do my best to add any and all I find. For sanity reasons I'm ignoring all the changes Blizzard did before the original Retail release in the 0.x alpha/betas as well as any interface/API-related changes, you can check the [Warcraft Wiki](https://warcraft.wiki.gg/wiki/API_change_summaries) for the latter. If no version is specified a change came with the pre-patch/expansion itself. 

#### Glossary
- **M2**: File format for character, creature, doodad, spell and other animated/smaller models. ([Wiki](https://wowdev.wiki/M2))
- **WMO**: File format for larger static models such as buildings. ([Wiki](https://wowdev.wiki/WMO))
- **ADT**: File format for terrain. ([Wiki](https://wowdev.wiki/ADT))
- **DBC/DB2**: File format for data table storage. (Wiki: [DBC](https://wowdev.wiki/DBC) - [DB2](https://wowdev.wiki/DB2))
- **LOD**: Level of detail system for showing optimized/lower detail 3D things further away. ([Wiki](https://en.wikipedia.org/wiki/Level_of_detail_(computer_graphics)))
- **Lua**: Programming language used for writing interface code such as addons. ([Wiki](https://en.wikipedia.org/wiki/Lua))
- **MPQ/CASC**: Filesystems for storing assets. (Wiki: [MPQ](https://wowdev.wiki/MPQ) - [CASC](https://wowdev.wiki/CASC))
- **FileDataID**: A numeric ID-based file reference instead of a filename. ([Wiki](https://warcraft.wiki.gg/wiki/FileDataID))

> **Note that the below list of changes is not exhaustive by any means, but just the stuff I was able to find on various sources/from my own knowledge.**

#### 2004+ - 1.x - Post-release
- (1.8.3) Introduced the Blizzard Launcher. Not necessarily an 'engine' upgrade, but big QoL change.
- (1.10.0) Weather system introduced.

#### 2007 - 2.x - Burning Crusade
- Upgraded the Lua version from 5.0 to 5.1 which WoW still uses today, albeit optimized/updated throughout the years.
- DXT5 texture compression support added to BLPs.
- Minor ADT changes to add support for flying bounds.

#### 2008 - 3.x - Wrath of the Lich King
- Added DirectX 10 support.
- Major ADT changes to add vertex shading, a new liquid storage format and cubemap support (e.g. Crystalsong Forest reflections).
- Major M2 changes that split the files up into several different files allowing for quicker/more selective loading.

#### 2010 - 4.x - Cataclysm
- Added experimental DirectX 11 support.
- Added new water.
- Overhaul of the shader system, adds support for shader compression and adds several new shaders.
- Major ADT upgrades to support the extended view distance as well as various new terrain features.
- Switched over to a streaming system for MPQs allowing for quicker installations and patching.
- Begin switch from DBC files to DB2 files, this continued every expansion until Legion.
- Introduce ADB files to allow hotfixing DB2s.

#### 2012 - 5.x - Mists of Pandaria
- Added [SSAO](https://en.wikipedia.org/wiki/Screen_space_ambient_occlusion)
- Introduce the physics system to allow for e.g. belt armor models to have swinging ropes.
- Major ADT upgrades to support height texturing, texture scaling and blending between WMOs and terrain.
- More improvements to the streaming MPQ system.

#### 2014 - 6.x - Warlords of Draenor
- Switch filesystems from [MPQ](https://wowdev.wiki/MPQ) to [CASC](https://wowdev.wiki/CASC).
- Minor M2 changes that add separate files for bone data.
- Minor improvements to the LOD system.

#### 2016 - 7.x - Legion
- Added (optionally animated) points lights and spot lights.
- Added color grading system allow for condition-based color grading of the 3D scene.
- Major ADT upgrades to support WMO scaling.
- Major M2 changes that wraps the file in chunks to allow for easier expanding of the format going forward.
- Major improvements to the LOD system allowing for far larger view distances.
- Begin switching from referring files by filenames to referencing by numeric FileDataIDs instead.
- Many changes to DB2 files over the course of the expansion (from version 2 to 7).
- (7.0.3) Fully switch over to DB2s to allow hotfixing all the things.
- (7.2) Drop ADB files and add DBCache.bin file to replace them for hotfix storage.
- (7.3) Minor M2 additions to allow for deduplicated skeletons (between e.g. allied races).

#### 2018 - 8.x - Battle for Azeroth
- Removed legacy OpenGL support.
- Introduced volumetric fog system.
- Improved particle systems, starting with weather.
- Minor improvements to the LOD system.
- Minor M2 additions to particle systems.
- (8.1.5) Renamed old single-threaded DirectX 11 support to DirectX 11 (Legacy).
- (8.1.5) Introduced multi-threaded DirectX 11 support.
- (8.1.5) Added support for DirectX 12.
- (8.2) Fully references files by FileDataIDs outside of Interface files.
- (8.2.5) Beginnings of M3 implementation (more below!).

#### 2020 - 9.x - Shadowlands
- Start switching over graphic pipelines to use Prism, Blizzard's cross-game graphics layer, starting with DirectX 11.
- Introduced new character customization system bringing several rendering changes to character models/texturing.
- Added experimental controller support.
- Added raytracing as well as extended point/spot lights to support raytraced shadows.
- Added skyscene system to allow for various objects in the skybox that change based on various conditions.
- Minor M2 additions adding various chunks for additional information for shaders.
- Minor ADT additions to allow for color grading terrain tileset textures.

#### 2022 - 10.x - Dragonflight
- Added hot-reloading of the CASC filesystem allowing for the client to switch data builds without a restart (unused for now).
- Updated filesystem to add TVFS (TACT Virtual File System) manifests. Required but older system is still in place for now.

#### 2024 - 11.x - The War Within
- Extended volumetric fog system.
- First M3 models added (more below!).
- (11.0.5) Started switching over to an entity component system in networking. ([Wiki](https://en.wikipedia.org/wiki/Entity_component_system) - [Blue post](https://us.forums.blizzard.com/en/wow/t/nerub-ar-raid-lag-fixes-underway-october-25/1993481/8))
- (11.1.7) Minor M2 changes for player housing.
- (11.2.0) First M3 model used in-game.

### 2025
So with that said, the 2025 engine of WoW is based on the Warcraft 3 engine in the same way Source 2 is based on the original Quake engine and how Unreal Engine 3 is still based on "Unreal Engine" from Unreal Tournament which released in 1998. Very little to no code or systems in these engines today are the same compared to decades ago and the same goes for WoW. 

It continues to evolve with the times and there's rumblings of more big changes coming in..

## The future
Now that that is out of the way, let us look to the future. 

> **What follows, while based on facts, is very speculative.**

### Model3/Material3
WoW has been using the M2 model format since basically its release (ignoring a short stint during pre-release alpha where it still used MDX). While it naturally has seen many many updates over the years, they hit fundamental limits every now and then, especially as of Shadowlands with its introduction of high-resolution (geometry *and* texture wise) in-game cinematic models. There's also modern rendering techniques that Blizzard may want to use that the format simply isn't built for. 

With M3 models also comes a new methodology of how they make materials/shaders which can also lead to far more unique-looking models. WMOs (buildings and generally larger models than M2s) also have indications of support for this newer material system. As far as we can tell from the way these 'compiled' files look, Blizzard has transitioned to a node-based methodology of building materials/shader, similar to how (for example) Blender does it, no longer limiting artists to the existing set of shaders available to use with the old material system.

We first spotted references of M3 models being worked in the client back in 8.2.5. The first M3 file that was added to the client, while incomplete, was in 11.0. Now, as I had already wrote most of this post, in 11.2 the first M3 model has made its 'production' appearance in the raid, in the form of a silk spool with some animated UV maps (fully animated in the shader vs. using keyframes like M2s do):
<video width="100%" height="100%" playsinline muted controls loop>
    <source src="https://marlam.in/u/WowT_T8NxmQR41q.mp4" type="video/mp4" />
</video>
_The three larger silk spools in the background are M3 models! The thinner spool on the ground is an M2._

It might not seem very impressive or even different-looking compared to other models, but that is arguably intended as anything too flashy would look out of place. Don't expect the game to look different overnight, but don't be surprised if you see some fancier models show up in upcoming expansions either! Right now M3s are still lacking a few things that M2s can do (e.g. mesh animations, attachment points, and more), but given they're in-game now they're clearly set on going forward with it.

Things that come to mind for what this could be used for is more advanced spell effects, even higher fidelity models for e.g. in-game cinematics as well as cool new items and item effects. Time will tell how much they'll be using this going forward, but the visual model/material fidelity possibilities this file format opens up is as close to a 'new engine' as you're going to get without actually switching engines.

### Build hot-reloading
Another thing Blizzard started working on a few years ago are "file hotfixes", we haven't officially seen this in action yet but we know enough to describe & show it a little as well as take some educated but still speculative guesses on how it might be applied. 

#### What is it?
Currently, Blizzard can hotfix DB2 tables with new/updated/removed records, but if they were to have to update a model, map, interface file or any other file that isn't a DB2, they'd need to push a new build, make people restart to patch up and all that. Not a great user experience. The term "file hotfixes" already implies what it means on the tin, AKA being able to 'hotfix' those other files too.

As far as we can tell, file hotfixes are essentially new builds deployed to the CDN servers, but instead of Battle.net doing the updating while the game isn't running, the game server tells your WoW client to load a specific set of configs while it is running and to switch over to the new build once it is done patching itself up. One can assume that such hotfix builds are pushed to the Battle.net client at the same time too, anything that affects the executable would still need a restart.

To illustrate this with an extreme example, here is (some old) footage from a client switching over from 10.1.5 Retail data to 1.14 Classic data on a local sandbox without restarting:

<video width="100%" height="100%" playsinline muted controls loop>
    <source src="https://marlam.in/u/filereload.mp4" type="video/mp4" />
</video>

Note that this is a very extreme example as these are very incompatible versions data wise (and it crashed seconds after the cut due to incompatible DB2s), but it should illustrate what this system is capable of. With a little more work (and some of that work likely has already been done since I last messed with it) this could be a pretty powerful system. How could this be used, you say? Well, multiple ways...

#### Usecase 1: The obvious
There's a few obvious things that come to mind that this could be used for like e.g. fixing a broken model or spell effect in a raid without requiring people to interrupt their raiding. Obviously neat, but lets get a bit more creative/speculative.. 

#### Usecase 2: A fix for datamined spoilers?
Even though Blizzard has done an increasingly good job of encrypting spoilers over the years (with the exception of a few mistakes as well as more recently in 11.2 some unencrypted voice-overs) there is an interesting theoretical thing they can do where they just don't put that data in the files at all until the moment it's needed (e.g. when a new raid opens). Stuff like voice-overs, secrets, cinematics or other 'secretive' things wouldn't necessarily have to be encrypted but could just be file hotfixed in globally the moment the content would go live. 

While it would suck for dataminers (shooting myself in the foot here), they've had their fun and it would be better for the game in terms of having surprises be surprises, at least until the moment certain content is released. Granted, there would be a download of some content and the game would stream in some things upon said release, but it could be worth it provided the system is optimized enough by now.

#### Usecase 3: But wait, there's more!
This one requires its own subsection...

### Unified client
Over the years, we've seen more and more signs that Blizzard is trying to unify their codebases between all the various branches of WoW. More and more Classic stuff is finding its way into Retail clients and vice-versa. This is likely to increase codebase maintainability and making it less awful to merge changes between the various branches. But they've been doing a bit more than just that.

For example, a few years ago Blizzard merged the interface code between all the clients, which is why stuff like [player housing-related API strings](https://www.mmo-champion.com/content/12993-Player-Housing-Interface-API-Strings) leak in 4.4.2 while this is a Midnight (or well, probably 11.2.x) feature. 

DB2 files have also shared more and more layouts between Classic and Retail allowing for theoretical compatibility in terms of reading these files without having to restart. They also added a "schema" system to DB2s not too long ago that specifies the version of a specific DB2. The client only supports a single schema right now, but it could support multiple in the feature allowing it to seamlessly switch between different DB2 table layouts seamlessly. 

Blizzard has also been put time into making "gamemodes", not only for Classic but also for Retail (e.g. Plunderstorm and the upcoming spooky thing). They've also mentioned that it is hard to change things in e.g. Season of Discovery without changing anything in Classic Era, Hardcore or vice-versa is sometimes hard or even impossible. 

Being able to switch between builds with different builds without restarting the client would allow them to separate data properly between the gamemodes as well as maybe treat Retail WoW or Classic Progression (e.g. MoP Classic) the same and allowing player to switch between them seamlessly too.

![https://marlam.in/u/WowClassic_pqDHPqNGsG.png](https://marlam.in/u/WowClassic_pqDHPqNGsG.png)
_The current gamemode switcher as it appears in Classic WoW._

![https://marlam.in/u/iuI9nfsPfK.png](https://marlam.in/u/iuI9nfsPfK.png)
_A quick edit of what the switcher may look like in a merged client? Hopefully not that crowded, though..._

Now, they're not exactly there yet as the clients still have some underlying differences, but something along the likes of this could become reality.

As of 11.x they also have a new ClientSettings database file that can disable certain aspects of the client (e.g. raytracing, volumteric fog and other more advanced features) that could also be used to turn off certain modern features in Classic builds. I don't think we've seen that happen yet and they've only used it through hotfixes to disable certain graphics features that were crashy while they worked on a fix, but it could be something used for controlling what kind of things the client can do based on what gamemode is loaded. 

To sum it up, I believe that all this together points towards (and I've been thinking this since at least 2023) Blizzard slowly been working towards a unified client for all release branches of WoW. We could also be seeing a much different WoW-thing come out after the World Soul saga ends with this client being for every 'legacy version' before that, but that is baseless speculation from the dark beyond.

## In closing
While WoW is an old and large beast, Blizzard isn't very shy of modernizing things under the hood, even if it causes a few issues from time to time. It's very possible I'll have to eat (some of) my words in the future when a WoW 2.0 comes out after the World Soul Saga with a million billion reworked fancy looking M3 assets and/or entirely new client based on cool new tech, but after some initial chagrin of having to deal with that from a datamining PoV, I'm sure I'd love for that to be the case. The future of WoW isn't dead just yet, regardless of how many content creators want you to believe that.