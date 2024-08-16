---
slug: modding-wow-part2
title: WoW Modding 102 - Noggit
authors: marlamin
tags: [wow, world-of-warcraft, modding]
enableComments: true
image: https://marlam.in/u/noggit_i1cv9gCJkW.png
---
There are many tools out there to support WoW modding, but as these posts will only be focusing on modern modding we'll focus on tools that can help with specifically that. First up: Noggit!

<!--truncate-->

### Noggit history lesson
I kind of lied in the last post saying there was only one open-source map editor still around and being worked on today. All of them are still Noggit, but there's actually multiple forks/versions of Noggit and one has stuff the other doesn't vice-versa. The version currently on the forefront is Noggit Red, pictured below.

![https://marlam.in/u/noggit_dFNzgadtiY.jpg](https://marlam.in/u/noggit_dFNzgadtiY.jpg)

Noggit Red is based on regular Noggit (colloquially called "Noggit Green") which has heritage going all the way back to wowmapview which is turning 19/20 years old this year. It has quite the history and as such baggage, but the modding history has grown to love (and/or hate) it.

Both Noggit Red and Noggit Green are still being worked on by different people. Noggit Red has undo/redo, position/rotation gizmos and a few other things that Noggit Green doesn't have. Noggit Green on the other hand has chunk moving, working scripts and a few other things that Noggit Red doesn't have. It's a bit messy, but given they both target the 3.3.5 version of the game, you can use them interchangeably on the same project, it's just a bit annoying having to switch between them.

### More recent history and the future
Over the years there have been a few attempts to get modern features working in Noggit Red. Initially it was intended for Noggit Red to get Shadowlands support *(the main branch was called 'noggit-shadowlands' for several years)* but this never ended up being realized for various reasons. Two other, separate forks of Noggit Red added support for Height texturing/texture scaling *(Mists of Pandaria feature)* and WMO scaling *(Legion feature)* but were also seemingly abandoned after that.

Earlier this year I tried to combine the various Noggit Red forks into one so the few people (including myself) who did want to have modern features didn't have to switch between multiple Noggit forks just to do basic editing. This was mildly successful even with my lack of C++ knowledge. This has slowly escalated to today where I'm trying to keep said fork updated with new features/fixes that Titi (the current Noggit Red maintainer) is working on. 

Maybe one day Noggit Green and Noggit Red will merge into one again for the sake of the community, but that requires (pun intended) moving some mountains. One can dream.

### What can it do
Noggit can do pretty much all of the things you expect out of a basic map editor:
- Basic terrain mesh editing (raising, lowering, flattening, blurring)
- Placing/editing liquid meshes
- Placing, rotating, scaling models (and with the modern feature fork, scale WMOs too)
- Terrain texturing (and with the modern feature fork, MoP height texturing/texture scaling as well)
- Terrain vertex color painting
- Making terrain holes (low resolution only)
- Heightmap based terrain brushes
- Heightmap/alphamap/vertex color importing
- Designating area IDs to an area
- Generating minimaps
- Probably more that I forgot...

### What can it NOT do
There's also some stuff that Noggit can't do. Keep in mind some of these might be planned, though.
- Make high-resolution terrain holes (MoP feature)
- Terrain vertex lighting painting
- Other WoW terrain/map-related features added after 3.3.5 (e.g. placing lights, volumetric fog, etc) 
- Placing serverside objects such as NPCs or interactable objects
- Working with other information that is serverside

### Creating your own World (of Warcraft) with Noggit
If you want to get started with this I highly suggest checking out [Implave's excellent video about modern modding](https://www.youtube.com/watch?v=TP8YpgiGOPs) and the [the guide mini-site](https://marlamin.github.io/modern-map-making/) that we're still working on. 

We just published a guide on how to get a streaming 9.2.7 client, a sandbox, the launcher and even the magical [hot-reloading](https://marlam.in/u/Wow_YbGssG0xpd.mp4) going. You can find that guide [here](https://marlamin.github.io/modern-map-making/sandbox-setup/) but make sure to read through and where applicable [follow the basic guide first](https://marlamin.github.io/modern-map-making/category/basic).

***Last-minute note:** And when I say "just published" I literally mean published just now as of writing this, so there might be some issues still, please let us know in the Discord linked in the guide site menu if you run into any. Hoping to fix any major ones before TWW releases.*

I'm hoping to make some more modding blog posts soon, but with The War Within releasing next week I'll be pretty busy with that and the additional workload around it, so it might be a bit. Whether you'll be checking out the modding stuff or playing The War Within; enjoy. Just make sure to not do both at the exact same time, that might be a bad idea. ;)