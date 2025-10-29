---
slug: modding-wow-part3
title: WoW Modding 103 - Zone design
authors: marlamin
tags: [wow, world-of-warcraft, modding]
enableComments: true
image: https://marlam.in/u/AuIA4BD3RR.png
---

Making a zone from the ground up is hard, especially if you're doing it on your own. Thankfully, throughout the years Blizzard has given us various peeks at their zone design process (sometimes intentional and sometimes not). I wanted to write up this post to document what (to me) appears to be their process in the hopes some of it could be useful for artists wanting to make stuff or learn/take inspiration based on how Blizzard does it. I'm a huge fan of world building (specifically in the more literal sense like this) and all the steps that go into it, so expect a long post.

Note that while these steps are described one by one for readability, in reality these likely overlap a lot with multiple of them starting at the same time or being revisited throughout the process. I will try to show/link to examples of the things I mention in each part for the visual learners (like myself).

<!--truncate-->

## Initial concepts
When starting work on an expansion, the narrative team works on the overarching story concept and I assume soon after basic descriptions/keywords of the zones are written down, concept artists (the "Visual Development" team) start working on rough sketches based on those ideas to start fleshing out the colors, biomes and themes of a zone. 

- (8.0) [Kul Tiras exploration](https://www.artstation.com/artwork/gY3mZ) by Jimmy Lo
- (9.0) [Maldraxxus Concepts](https://www.artstation.com/artwork/rAeXvG) by Jimmy Lo
- (10.0) [Dragonflight Concepts](https://www.artstation.com/artwork/1xxEKL) by Mongsub Song
- (11.0) [Isle of Dorn Concepts](https://www.artstation.com/artwork/OvmRkb) by David Noren

## Asset creation
After the themes start solidifying the "Visual Development" team continues to flesh out and make concept art for foliage, doodad kits, buildings etc for the various inhabitants of a zone based on this art.

- (Foliage kit concepts) 7.0 [Suramar Environment](https://www.artstation.com/artwork/GawAad) by Jimmy Lo 
- (Building kit concepts) 7.0 [Suramar Architecture](https://www.artstation.com/artwork/lxm4xY) by Jimmy Lo
- (Building kit concepts) 11.0 [Arathi Architecture](https://www.artstation.com/artwork/K3Od0B) by David Noren

Based on those concepts, artists start working on buildings, props, foliage and other doodads. Texture artists will start working on terrain textures.

- (Props) 11.0 [Isle of Dorn Props](https://www.artstation.com/artwork/L4eJxK) by Lucile Thyrard
- (Props) 11.0 [Arathor Props](https://www.artstation.com/artwork/lGRLGa) by Jess Liu
- (Terrain textures) 11.0 [Isle of Dorn](https://www.artstation.com/artwork/dy0xLA) by Kate Mckee

## Demo zones
With zone concepts and the first rough assets rolling in, exterior designers will start to make demo zones or 'dioramas' using the assets they have to get a feel for the zone. Like I mentioned at the start of this post, this likely happens around the same time as layout/rough sculpting, but I wanted to note it earlier on since it's closely tied to asset creation.

<a href='https://map.wow.tools/?map=2566&v=2497&z=6&lat=-26.157&lng=82.609' target='_BLANK'><img src='https://marlam.in/u/cptFqOXcQ5.png'></img></a>
_Excerpt of the 10.2 Emerald Dream dev map showing a demo zone. Click for minimap viewer._

<a href='https://map.wow.tools/?map=Nazjatar&v=689&z=6&lat=-50.609&lng=13.094' target='_BLANK'><img src='https://marlam.in/u/B1tBUrT0Cb.png'></img></a>
_Excerpt of a presumed demo zone for Nazjatar from the earlier available version. Click for minimap viewer. [Notable thing about this one is that it was actually used in the BlizzCon preview they showed of Nazjatar](https://www.youtube.com/watch?v=8xMCL7KtGrs&t=42s)._

## Layout
The exterior design team, in collaboration with the quest designers etc will start making rough 2D maps of the zone in e.g. Adobe Illustrator with to give an idea of the basic layout and scale of the zone (optionally with a grid overlay per ADT, or what Blizz calls them, "world chunks", to get a good indication for scale) and then a more detailed map with more roads, POIs and sometimes even basic terrain colors for the various biomes. 

Some designers might prefer blocking out in 3D instead, but historically Blizzard prefers and internally recommends 2D concepting first as those maps are easier to share between the teams (as per Cory Stockton during his Game Design Expo talk linked below).

<img src='https://marlam.in/u/chrome_O9MjTfpFle.png' style={{width: '50%', float: 'left'}}></img><img src='https://marlam.in/u/chrome_toToNev97h.png' style={{width: '50%'}}></img>
_Uldum maps without and with "world chunk" overlay from the "[The Big Picture: Macro Design in World of Warcraft](https://www.youtube.com/watch?v=-Y6DIED8R4M)" panel @ Game Design Expo 2011._ 

<img src='https://marlam.in/u/vlc_qiqoU5zhJb.png' style={{width: '50%', float: 'left'}}></img><img src='https://marlam.in/u/vlc_EdtwCoepbR.png' style={{width: '50%'}}></img>
_Maldraxxus maps from the "[Designers at Work: World of Warcraft World Creation](https://youtu.be/NRS9jjU9IrI)" panel @ BlizzCon 2019._

<img src='https://marlam.in/u/1OFvFM9NTi.png'></img>
_[Arathor Canyons AKA Hallowfall](https://www.artstation.com/artwork/NqGRlD) by Josh Navarro. Note the ADT grid for getting a good idea of zone size._

More examples:
- (6.0) [Nagrand](https://media.mmo-champion.com/images/news/2014/october/ac302.jpg) by Ely Cannon
- (8.2) [Nazjatar](https://cdnb.artstation.com/p/assets/images/images/033/026/175/large/colin-volrath-nz6.jpg?1608168601) by Colin Volrath ([source](https://www.artstation.com/artwork/w6qmaY))
- (10.0) [The Waking Shores](https://cdnb.artstation.com/p/assets/images/images/056/915/093/large/josh-navarro-df-artstation-47.jpg) by Josh Navarro ([source](https://www.artstation.com/artwork/PeP0BB))

## Rough sculpting/blockout
### 2D map printing
In recent years, we've noticed that Blizzard sometimes appears to start out by just 'printing' the 2D layout maps onto terrain, and then sculpting it from there on out. The most recent example is the dev map I puzzled together from unreferenced files left inside WoW's online installation archives. 

<a href='https://marlam.in/u/mapv1.png' target='_BLANK'><img src='https://marlam.in/u/BoiuOGQMTj.png'></img></a>
_Click for full-resolution image (~90MB, 16285x11942 resolution)._ 

Note that the same map legend that and sea/ADT grid from Josh Navarro's Arathor Canyons AKA Hallowfall concept map from the previous paragraph largely remained intact, with the zone then built on top of it. Also note the 'approved chunk sizes' on the top right for how many ADTs/tiles/chunks a zone was approved to take up. 

There's also that unknown Rootlands zone on there, which might or might not (have been?) the zone for the Haranir race. _(I didn't put those two together until after publishing the map, my bad, Blizz.)_

<a href='https://marlam.in/u/dragonislesdevmap.jpg' target='_BLANK'><img src='https://marlam.in/u/AuIA4BD3RR.png'></img></a>
_Click for full-resolution image (~1MB, 5574x2508 resolution)._  

Another instance of a 'printed map' we got is visible (albeit a bit rougher looking) is an early Dragon Isles map pasted on top of the map they used to develop Zaralek Caverns on.

<a href='https://map.wow.tools/?map=2566&v=2497&z=5&lat=-9.781&lng=235.375' target='_BLANK'><img src='https://marlam.in/u/AS3vUYRf3k.png'></img></a>
_Not a map but still a notable mention is this printed Night Elf Kit image ([video](https://www.youtube.com/watch?v=Hic1FXto3fE&t=151s)). Click for minimap viewer._

### Earlier zone blockout methods
Before the printed maps, Blizzard appeared to roughly draw out the various subzones (sometimes up to a biome level) with some very basic terrain geometry and sometimes colors. I'm guessing there were various different methods they could follow based on personal preference. 
<a href='https://map.wow.tools/?map=development&v=2788&z=5&lat=-151.909&lng=185.719' target='_BLANK'><img src='https://marlam.in/u/SO1ze0gfxq.png'></img></a>
_Part of Northrend from the "development" map. Click for minimap viewer._

<a href='https://map.wow.tools/?map=development&v=2728&z=5&lat=-87.057&lng=126.188' target='_BLANK'><img src='https://marlam.in/u/ocV3W31QOJ.png'></img></a>
_Early Howling Fjord blockout with some very early subzone experimentation. Click for minimap viewer._

<a href='https://map.wow.tools/?map=LevelDesignLand-DevOnly&v=168&z=4&lat=-222.875&lng=66.563' target='_BLANK'><img src='https://marlam.in/u/cwrVHiWDIe.png'></img></a>
_Early Draenor blockout with some very early subzone experimentation. Click for minimap viewer._

<a href='https://map.wow.tools/?map=NZoth&v=798&z=5&lat=-72.189&lng=78.656' target='_BLANK'><img src='https://marlam.in/u/EPKol7rU8N.png'></img></a>
_Early Nazjatar on the N'Zoth map also showing differently colored subzones. Click for minimap viewer._

<a href='https://map.wow.tools/?map=AcquisitionHavoc&v=2144&z=4&lat=-140.188&lng=175.250' target='_BLANK'><img src='https://marlam.in/u/XCdW2TNc0N.png'></img></a>
_Very early Suramar blockout/concepting. Click for minimap viewer._

## Rough texturing 
From there on, they start slowly texturing the terrain. Painting actual texture tilesets on paths, grass, etc. A good display of this is this bit of Suramar from the same Demon Hunter Artifact Acquisition scenario map as the Suramar blockout right above this paragraph, but at a much later but still WIP stage.

<a href='https://map.wow.tools/?map=AcquisitionHavoc&v=286&z=4&lat=-29.125&lng=31.375' target='_BLANK'><img src='https://marlam.in/u/KzvL8G2W12.png'></img></a>
_Remainders of early Suramar texturing on the AcquisitionHavoc map. Click for minimap viewer._

Another good example is Nazjatar. I've zoomed in on the souther part of the map here to show the roughness of the texturing at this point in the process.

<a href='https://map.wow.tools/?map=Nazjatar&v=689&z=4&lat=-53.248&lng=153.563'><img src='https://marlam.in/u/chrome_2XJatpkF3j.jpg'></img></a>
_Click for minimap viewer. I really recommend you do in this case because a more finished version of Nazjatar can be found on the same map to the left!_

One last good example of this is the Maw of Nashal which shows off parts of Stormheim (and a bit of Highmountain) in various rough texturing stages. Highmountain and the eastern part of Stormheim are still in the blockout stage, while the mid parts have started getting texturing work done, some of which is even already refined.

<a href='https://map.wow.tools/?map=TheMawofNashal&v=286&z=3&lat=-96.501&lng=88.125'><img src='https://marlam.in/u/3jINerqNbH.png'></img></a>
_Click for minimap viewer._

## Kit placement
Exterior designers usually make spots on maps or related maps that have the kit for a certain zone/race that they'll be using throughout the map. 

Some uses like making it easy to copy/paste assets from the kit into the map seem obvious, but it's possibly also during asset development to keep an eye on what is finished/not or what needs cutting if it ended up being unused (as can be seen in the examples below).

<a href='https://marlam.in/u/2566_rs.jpg' target='_BLANK'><img style={{width: '50%', float: 'left'}} src='https://marlam.in/u/chrome_UNDdC2Abwh.png'></img><img style={{width: '50%', float: 'left'}} src='https://marlam.in/u/GKG9nhMKR1.png'></img></a>
_10.2 asset kits (with an image printed on the map naming it). Click for *VERY* high-res image of full map._

<a href='https://map.wow.tools/?map=2222&v=857&z=7&lat=-21.265&lng=7.297' target='_BLANK'><img src='https://marlam.in/u/6rCZZqxGoq.png'></img></a>
_Early Shadowlands kit for The Maw showing similar statuses to the 10.2 kit. Click for minimap viewer._

## Refined texturing
This is another step that likely goes on during the entirety of zone development and is basically just a further along version than the rough texturing step mentioned above where artists do more refined/detailed texture painting, paint (or paint out) where ground effects are (e.g. the grass and stuff) as well as do vertex color painting on top of the painted textures. 

### Vertex shading
Vertex shading/painting was introduced in WotLK and heavily used in Cataclysm and every expansion afterwards. Blizzard painting it was first shown to the public [at BlizzCon 2009](https://youtu.be/3FjuEPnuKtU?t=205). This feature allows artists to paint colors on top of existing tilesets which adds much more variance and detail to the terrain instead of having the same colored tileset everywhere. 

The difference in terrain with and without vertex painting is huge, as can be seen in the below image shared by Josh Navarro in [this ArtStation post on the development of Highmountain](https://www.artstation.com/artwork/Xn5xAw).

<a href='https://www.artstation.com/artwork/Xn5xAw' target="_BLANK"><img src='https://marlam.in/u/OIYWZ1kMlu.png'></img></a>
_Click image to go to the Artstation post by Josh Navarro that shows off more of his work on Highmountain as well as the unedited comparison from above and another comparison._

## Newer things
There's also more recent tech that allows artists to refine their zone work. These are recent enough to where I don't have proper Blizzard explanations about them, but I wanted to note them anyways as far as I understand them.

### Color grading
Color grading is basically what it is generally known as (google it if you've never heard of it). 
There are 2 variants of color grading that Blizzard can use. The first was added in Legion and allows them to color grade the entire screen in zone regions of their choice, this is also used in some spells/screen overlays. The other form of colorgrading they can do more specific to zone creation is color grading a specific tileset, this tech was only used in Bastion. They can also control the intensity of the latter based on distance.

<a href='https://marlam.in/u/MtjfS4eNZO.jpg' target='_BLANK'><img src='https://marlam.in/u/HWFQDttIYu.jpg'></img></a>
_Tileset color grading. Top is as it appears on Retail, bottom is without color grading. Click for higher res._

### Volumetric fog
Instead of manually placing fog models everywhere, as of BfA they can also define volumetric fog cubes for larger regions of the map. This was further improved upon in TWW. I don't have a proper example of this, but I did manage to spawn all of the volumetric fog that Shadowlands had in one spot on my own map which lead to some [interesting visuals](https://www.youtube.com/watch?v=DdR7ZtYES1U), in between it shifting between the different overlapped fogs, you can spot some frames of what volumetric fog does in WoW. 

## Zone verification
According to Cory Stockton's 2011 Game Design Expo talk, when (part of) a zone is handed off by a designer, they render a top-down 2D compiled minimap image (as there are a few examples of in this post) and put the 2D map on top of it to verify that this is indeed the right size, has the right POIs and everything that was agreed upon earlier. 

Whether or not this is still done in their current design process I don't know (given they can stamp the 2D maps on terrain now and build on top of that).

<img src='https://marlam.in/u/chrome_Fby3CDOzzL.png' style={{width: '50%', float: 'left'}}></img><img src='https://marlam.in/u/chrome_omzDx8glX7.png' style={{width: '50%'}}></img>
_Tol Barad maps without and with minimap overlay for verification from the "[The Big Picture: Macro Design in World of Warcraft](https://www.youtube.com/watch?v=-Y6DIED8R4M)" panel @ Game Design Expo 2011._ 

## Timeline example of Argus
Blizzard showed off a timeline video of the development of the "Krokuun" subzone of Argus during BlizzCon 2017. It shows off a few of the things mentioned in this post. I took the liberty to cut out the low-res timeline and stitch it together with the high-res minimaps we got during the 7.3 PTR. 

While the original video is very low-res, the minimaps are high-res so I suggest watching it in full screen and maybe even slower than I already slowed it down to.

<iframe src="//www.youtube.com/embed/XG9lmk-rioc" frameborder="0" allowfullscreen="allowfullscreen" width="100%" height="500"></iframe>

## Resources
Below are various additional things to look at if you want to read more about this subject and look at more pretty work-in-progress things.

### Videos
Many more examples of the things mentioned in this post can be found in this amazing video by Implave that is also a love letter to the map making process similar to this post, but better.
<iframe src="//www.youtube.com/embed/zWYVaBx8M4A" frameborder="0" allowfullscreen="allowfullscreen" width="100%" height="500"></iframe>
_[Prototypes Unseen and Forgotten - A WoW Exploration Movie](https://www.youtube.com/watch?v=zWYVaBx8M4A) by Implave._

The below video shows off a lot of their various processes and is relatively recent. This dev map is also shown off in this officially released [Building Azeroth episode](https://x.com/Warcraft/status/1727024280666251772).

<iframe src="//www.youtube.com/embed/Hic1FXto3fE" frameborder="0" allowfullscreen="allowfullscreen" width="100%" height="500"></iframe>
_[10.2 Emerald Dream developer map exploration](https://www.youtube.com/watch?v=Hic1FXto3fE) by Dovah_

One more video I'd like to mention is the VOD of the [Exploration museum](https://youtu.be/RTfo_kO71Ag?t=556) event hosted by Implave, it shows off multiple developer maps and also has yours truly participating in the event as well. A specific part of it that I think fits well with this post is the "Level Design Technique & Resources" map that shows off Stormsong Valley at various points in development. You can skip ahead to that chapter [here](https://www.youtube.com/watch?v=RTfo_kO71Ag&t=4548s).

### Panels
These panels go into the entire zone creation process and I highly recommend watching each and every one of them. Keep in mind the process changed over time and some of the most recent things mentioned in this post (like the 2D map printing) won't be seen in these.
- BlizzCon 2009: [Cataclysm Zone Creation video](https://youtu.be/3FjuEPnuKtU)
- Game Design Expo 2011: [The Big Picture: Macro Design in World of Warcraft](https://www.youtube.com/watch?v=-Y6DIED8R4M)
- BlizzCon 2016: [World of Warcraft: Level Design](https://www.youtube.com/watch?v=eYDd3T_s1zo)
- BlizzCon 2017: [DesignCraft: Building Blocks of Level Design](https://www.youtube.com/watch?v=K-D2vuKMQhk)
- BlizzCon 2019: [Designers at Work: World of Warcraft World Creation](https://youtu.be/NRS9jjU9IrI)

### Art posts 
- (2014) [Artcraft: Building a Garrison](https://www.mmo-champion.com/threads/1456578-Artcraft-Building-a-Garriso)
- (2014) [Artcraft: Spires of Arak](https://www.mmo-champion.com/threads/1512774-Artcraft%E2%80%94The-Spires-of-Arak)
- (2014) [Artcraft: Level Design Part 1](https://www.mmo-champion.com/threads/1618608-Artcraft-Level-Design-Part-1) (Nagrand)
- (2014) [Artcraft: Level Design Part 2](https://www.mmo-champion.com/threads/1619788-Artcraft-Level-Design-Part-2-Oct-28-Hotfixes-Anti-Exploit-Mechanic-Ashran-Event) (Nagrand)
- (2014) [Artcraft: Level Design Part 3](https://www.mmo-champion.com/threads/1620249-Artcraft-Level-Design-Part-3) (Nagrand)
- (2018) [BfA Art Blast: Dungeon & Environment art](https://magazine.artstation.com/2018/09/blizzard-entertainment-world-warcraft-art-blast-dungeon-environment-art/)
- (2018) [BfA Art Blast: Prop Art & Level Design](https://magazine.artstation.com/2018/09/blizzard-entertainment-world-warcraft-art-blast-level-design-props/)
- (2018) [BfA Art Blast: Visual Development & Environments](https://magazine.artstation.com/2018/09/blizzard-entertainment-world-warcraft-art-blast-visual-development-environments/)
- (2020) [Shadowlands Art Blast: Part One](https://magazine.artstation.com/2020/12/blizzard-entertainment-world-of-warcraft-shadowlands-art-blast-part-one/)
- (2020) [Shadowlands Art Blast: Part Two](https://magazine.artstation.com/2020/12/blizzard-entertainment-world-of-warcraft-shadowlands-art-blast-part-two/)
- (2022) [Dragonflight Art Blast](https://magazine.artstation.com/2022/12/blizzard-entertainment-world-of-warcraft-dragonflight-art-blast/)
- (2024) [War Within Artstation Art Blast](https://magazine.artstation.com/2024/09/blizzard-entertainment-world-of-warcraft-the-war-within/) 

### Maps
- [Development map (map 451)](https://map.wow.tools/?map=development&v=2825&z=2&lat=-125.801&lng=146.000)
- [LevelDesignLand-DevOnly](https://map.wow.tools/?map=LevelDesignLand-DevOnly&v=168&z=2&lat=-125.801&lng=126.000)

### Interviews
- https://80.lv/articles/the-strings-of-environment-design/

## Credits & closing
I've credited all the artists and linked sources where I could. Credits obviously also go out to the various teams at Blizzard that work on/help with any of these processes (shout-out tools team in particular!). Thanks to implave for proof-reading and contributing to this post as well. Hopefully this post showed off a few things you might not have seen before. There's so much I left out that you can see in the above resources or by going through e.g. [Hayven's excellent videos](https://www.youtube.com/@HayvenGames/videos). 

Thanks for reading!
