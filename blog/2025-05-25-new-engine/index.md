---
slug: new-engine
title: On the "new WoW engine" topic
authors: marlamin
tags: [wow, world-of-warcraft, datamining]
enableComments: true
unlisted: true
---

Much to my annoyance, at an increasingly frequent rate, the "WoW needs a new engine! It's still based on Warcraft 3!" discussions show up again. First, I don't think that's actually what people want when they say that. Second, there's very little if anything from the Warcraft 3 days left. 

Blizzard is unlikely to tackle this topic directly outside of the "we're constantly upgrading the game" quote they've used before. There's few people outside of Blizzard who are qualified to speak on this, and I'm not one of them, but given my experience, I feel like I can at least try.

<!-- truncate -->

## Who am I to speak on this?
Fair question. I'm not going to pretend to be the outmost expert on WoW's internals, but given the ~15 years I've spent taking the game apart and building tools that interact with it and its data, I feel like I have a good enough overview on how the game works and has changed over the years to at the very least try and talk about this. 

I also know/work with several people who are far more knowledgable about specific systems than I am that I've asked for input and feedback on this post.

## What do the people want?
This is probably good to set out as baseline when working on this post. I'm sure there's more varying opinions than this out there when people talk about "wanting a new engine", but these are the main 2 things I see out there.

### Visual overhaul
From what I've gathered, most people just want the game to get a complete visual overhaul to look closer to what those "WoW 2.0" AI slop videos are putting out. Given the amount of work remaking all assets ever, I'm not going to tackle that. That is, unless Blizzard has been doing that behind the scenes for some reason for several years now, not going to happen anytime soon. There is however a chance this will be the case for certain future assets. More on that later!

### Complete overhaul
Others want a complete engine overhaul to the likes of a modern AAA engine such as Unreal engine, either for performance reasons or visual ones. While there's projects out there attempting this, they'll have the same issue in needing to make new assets to make it not look like they just stuck old assets into a modern engine. And if such a look is fine for said people, those projects are also always focusing on older and simpler versions of the game such as 1.12 with far less systems to deal with. For modern WoW and all the historic content that comes with it, this quickly becomes an unsurmountable task.

## The current engine
### Warcraft 3 == WoW?
So most of the engine at release was still the same as Warcraft 3, right? Not really. I'm sure parts were, but most of it wasn't the same at that point. 

It used different or upgraded file formats. For model files for example, it switched over from [MDX](https://wowdev.wiki/MDX) to [M2](https://wowdev.wiki/M2) during the original Alpha and these are hardly comparable file formats. Outside of the [BLP](https://wowdev.wiki/BLP) file extension, of which its internal format version was bumped from 0 (or from 1 as seen in Warcraft 3: The Frozen Throne) to 2 with various changes coming with that, no file formats or extensions were carried over from Warcraft 3 directly.

As for internals, I can't say I had experience with looking at e.g. the rendering system or the network system at the time, but common sense dictates that given WoW looked wildly different and was built as an MMO instead of an RTS, these systems weren't exactly the same outside of the similar graphics API or data transfer protocols they targeted at the time.

### A timeline of changes
Most of the changes to the WoW engine obviously came after its initial release in 2004. The earlier on the less detailed information the community has on internal changes, but I'll do my best to add any and all I find. For sanity reasons I'm ignoring all the changes Blizzard did before the original Retail release in the 0.x alpha/betas. If no version is specified a change came with the pre-patch/expansion itself.

#### Glossary
- **M2**: File format for character, creature, doodad and other animated/smaller models. ([Wiki](https://wowdev.wiki/M2))
- **WMO**: File format for larger static models such as buildings. ([Wiki](https://wowdev.wiki/WMO))
- **ADT**: File format for terrain. ([Wiki](https://wowdev.wiki/ADT))
- **DBC/DB2**: File format for data table storage. (Wiki: [DBC](https://wowdev.wiki/DBC) - [DB2](https://wowdev.wiki/DB2))
- **LOD**: Level of detail system for showing optimized/lower detail 3D things further away. ([Wiki](https://en.wikipedia.org/wiki/Level_of_detail_(computer_graphics)))
- **Lua**: Programming language used for writing interface code such as addons. ([Wiki](https://en.wikipedia.org/wiki/Lua))
- **MPQ/CASC**: Filesystems for storing assets. (Wiki: [MPQ](https://wowdev.wiki/MPQ) - [CASC](https://wowdev.wiki/CASC))
- **FileDataID**: A numeric ID-based file reference instead of a filename. ([Wiki](https://warcraft.wiki.gg/wiki/FileDataID))

#### 2004+ - 1.x - Post-release
- (1.8.3) Introduced the Blizzard Launcher. Not neccesarily an 'engine' upgrade, but big QoL change.
- (1.10.0) Weather system introduced.

#### 2007 - 2.x - Burning Crusade
- Upgraded the Lua version from 5.0 to 5.1.1 which WoW still uses today, albeit optimized, extended and hardened throughout the years.
- Minor ADT changes to add support for flying bounds.

#### 2008 - 3.x - Wrath of the Lich King
- Added DirectX 10 support.
- Major ADT changes to add vertex shading, a new liquid storage format and cubemap support (e.g. Crystalsong Forest reflections).
- Major M2 changes that split the files up into several different files allowing for quicker/more selective loading as well as 

#### 2010 - 4.x - Cataclysm
- Added experimental DirectX 11 support.
- Overhaul of the shader system, adds support for shader compression and adds several new shaders.
- Major ADT upgrades to support the extended view distance as well as various new terrain features.
- Switched over to a streaming system for MPQs allowing for quicker installations and patching.
- Begin switch from DBC files to DB2 files, this continued every expansion until Legion.
- Introduce ADB files to allow hotfixing DB2s.

#### 2012 - 5.x - Mists of Pandaria
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
- Begin switching from refering files by filenames to referencing by numeric FileDataIDs instead.
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

#### 2020 - 9.x - Shadowlands
- Start switching over graphic pipelines to use Prism, Blizzard's cross-game graphics layer, starting with DirectX 11.
- Introduced new character customization system bringing several rendering changes to character models/texturing.
- Added raytracing as well as extended point/spot lights to support this.
- Added skyscene system to allow for various objects in the skybox that change based on various conditions.
- Minor M2 additions adding various chunks for additional information for shaders.
- Minor ADT additions to allow for color grading terrain tileset textures.

#### 2022 - 10.x - Dragonflight
- Added hot-reloading of the TACT filesystem allowing for the client to switch data builds without a restart.
- Updated filesystem to add TVFS (TACT Virtual File System) manifests. Required but older system is still in place for now.

#### 2024 - 11.x - The War Within
- Extended volumetric fog system.
- (11.0.5) Started switching over to an entity component system in networking. ([Wiki](https://en.wikipedia.org/wiki/Entity_component_system) - [Blue post](https://us.forums.blizzard.com/en/wow/t/nerub-ar-raid-lag-fixes-underway-october-25/1993481/8))
- (11.1.7) Minor M2 changes for player housing.

### 2025
So with that said, the 2025 engine of WoW is based on the Warcraft 3 engine in the same way Source 2 is based on the original Quake engine and how Unreal Engine 3 is still based on "Unreal Engine" from Unreal Tournament which released in 1998. Very little to no code or systems in these engines today are the same compared to decades ago and the same goes for WoW.

## The future
Now that that is out of the way, let us look to the future. Lots of speculation abound!

### Echoes of the future
M3s... hot-reloading... merged clients... 