---
slug: the-tavern
title: The Hearthstone Tavern project
authors: marlamin
tags: [wow, world-of-warcraft, modding]
enableComments: true
image: https://marlam.in/u/Wow_GKYAOfu39U.jpg
unlisted: true
date: 2025-01-23
---
# The Hearthstone Tavern
I've been over this on both this blog and on Twitter many times before. I'm a big fan of the Hearthstone Tavern model that Blizzard added back in 8.2.5. I even made [thread in the community council](https://us.forums.blizzard.com/en/wow/t/dont-let-the-unused-hearthstone-tavern-model-go-to-waste/1396364) about it. The model is great. It has an amazing atmosphere and is what I believe genuinely a work of art. However, it was never used. 

*More info on how the Tavern was supposed to be used in WoW can be found in an earlier blog post [here](/wow-wishlist#hearthstone-tavern).*

I've been wanting to use it in some projects over the years, but I always run into the fact it has no exterior model. Granted, there is a good amount of mystery around the tavern (see the lore section later on) so it not having an exterior model isn't a huge surprise, but I wanted to take a stab at it anyways. This is largely going to be a learning project as I struggle my way through giving it an exterior. Come with me on with me on this journey and maybe we'll both learn something.

<!-- truncate -->

***Warning:*** I am a notorious reinvent-the-wheel type of person who likes doing things my own way. There will be a lot of that in this post.

## What we're working with
### Concept art
There's not a ton of stuff out there on the exterior, most of the appearances of the tavern only have the interior. There is an impression of the Hearthstone Tavern in the Overwatch map "Blizzard World" but it is basically just a normal human tavern. 

There is however [this post](https://www.tumblr.com/zorinvasili/167935946390/httpswwwyoutubecomwatchv-a0zvritpcr8t-15s) by artist Vasili Zorin who made a bit of concept art of the tavern for the [the animated short "Hearth and Home"](https://www.youtube.com/watch?v=vPguoeYTvMI) back when he was at Blizzard (he is now at Valve!). 

This art by Vasili Zorin is to my knowledge, the only known existing (but not necessarily canon) art.

![https://marlam.in/u/r2zwB51obL.png](https://marlam.in/u/r2zwB51obL.png)
![https://marlam.in/u/35amkovxB0.png](https://marlam.in/u/35amkovxB0.png)
![https://marlam.in/u/VaGKTqHjyD.png](https://marlam.in/u/VaGKTqHjyD.png)
![https://marlam.in/u/9mM2RD4JSH.png](https://marlam.in/u/9mM2RD4JSH.png)

### The lore
There is a good bit of mystery on the tavern and how it operates, in official stories it's usually described as appearing in a time of need. In [the animated short "Hearth and Home"](https://www.youtube.com/watch?v=vPguoeYTvMI) the main character Ava is teleported into it by a Hearthstone board. Both her and the interior of the tavern appear later on in ["New Pack Day"](https://www.youtube.com/watch?v=sQb46Kyh-xA), ["Win or Lose"](https://www.youtube.com/watch?v=h4XiNRMp5rg) and the [Warcraft Rumble Announce Trailer](https://www.youtube.com/watch?v=tqnFIohEQ1M).

The tavern interior, [to my surprise](https://bsky.app/profile/marlam.in/post/3ldmex2gci22g), also appeared recently in the WoW comic "Seasons" ([YouTube](https://www.youtube.com/watch?v=AzIP04xEMrs), [PDF](https://bnetcmsus-a.akamaihd.net/cms/template_resource/TEFHLG7PQIL41734383405326.pdf)).

### The interior WoW model
In case you haven't seen it in its proper in-game glory before (and I won't be posting too many interior shots for post length reasons), check out [Leyst's video that showcased it back when it was added in 8.2.5](https://www.youtube.com/watch?v=upEcN-RnYnk).

Obviously, the existing interior model is the model we'll have to make a fitting exterior for. The model itself uses many assets and textures from the human building kit and introduced some textures that are still used in human buildings today so there's definitely precedent for making it a human-themed exterior as well. 

The model has 3 separate groups:
- "mainhall" (highlighted in orange below)
- "library" (on the top left)
- "fancyroom" (on the right)

![https://marlam.in/u/blender_DcS3Td5yxr.png](https://marlam.in/u/blender_DcS3Td5yxr.png)

The main hall is based on the interior that appears in the animated Hearthstone shorts (and as such some of the concepts). The "library" is a modified version of the human garrison mage tower interior and "fancyroom" appears to be entirely custom, just like the main hall. 

### Stuff I already did
Here's a screencap of the Blender file that I've messed around with throughout the years.

![https://marlam.in/u/blender_B48DldiIzp.jpg](https://marlam.in/u/blender_B48DldiIzp.jpg)

The only usable thing that really came out of it was the resized/slightly reworked tavern entrance (yes, I know the roof has inconsistent colors in these screenshots).

![https://marlam.in/u/blender_S7DJ7RADcf.png](https://marlam.in/u/blender_S7DJ7RADcf.png)

## Here we go!
### Set up tooling
The modding community made a great add-on for Blender called [WoW Blender Studio](https://gitlab.com/skarnproject/blender-wow-studio/) that allows you to import/export WMOs _(Bigger models)_ and M2s _(Smaller models)_ in to and out of Blender. 

There's only 2 things that are important to make note of, the way it was integrated with Blender requires Blender 3.4 to be used and, like most community made modding tools, it only really works with WotLK versions of WoW file formats. Not great since I'm targeting modern WoW, but not the end of the world.

### Proof of concept
To test the tooling pipeline (Blender -> WBS -> Upconvert WMO to Legion -> Patch into the game) I wanted to try getting the entrance I made earlier into the game. WBS took some figuring out, but I got there in the end!
If you're wondering why there's another entrance in the background, it's because I swapped missingwmo.wmo (the WMO the game loads if the WMO is missing) with the entrance.

![https://marlam.in/u/Photos_6yaGWglrts.png](https://marlam.in/u/Photos_6yaGWglrts.png)

### Kitbashing
I'm not a 3D modeling artist. I'm not a texture artist. I'm not that creative. I know some of the basic working of Blender, but that's about it. To get an exterior going, I'll need to take apart existing models to harvest bits of geometry that would be a good fit. Effectively [kitbashing](https://en.wikipedia.org/wiki/Kitbashing), but with 3D models.

One of those models that really fits the vibe I'm going for is the Frontier Inn model that was added in Dragonflight. This model, like the tavern, hasn't been used in the game and I'm assuming it is from an earlier phase of Dragonflight development where the initial settlement was more human-themed (there's a few more WMOs that point to this as well).

![https://marlam.in/u/9hu_human_house01.png](https://marlam.in/u/9hu_human_house01.png)

While it is a relatively large model (look at the sign at the entrance to get a good idea of the scale), it is most definitely not large enough to encompass the interior model of the tavern. For this, I'll have to take apart pieces of the model into a kit that I can somewhat easily reuse to build out the exterior of the tavern.

And take it apart, I did. My apologies to the original artists of this model.

![https://marlam.in/u/blender_jychcWmM1B.png](https://marlam.in/u/blender_jychcWmM1B.png)

### Concepting the exterior
With the parts I had 'extracted' from the Frontier Inn model, I went to work on combining these bits into something that looked good enough (to me). 

The initial entrance I made really didn't fit with the textures that the Frontier Inn walls use, but I went ahead regardless in the hopes I could fix this later on.

![https://marlam.in/u/blender_dRWuCArYzx.png](https://marlam.in/u/blender_dRWuCArYzx.png)

Step by step, I got to something that started to look like a real exterior!

![https://marlam.in/u/blender_77uVG0RGBI.png](https://marlam.in/u/blender_77uVG0RGBI.png)
![https://marlam.in/u/blender_6PSeU5NMLW.jpg](https://marlam.in/u/blender_6PSeU5NMLW.jpg)

I also needed a roof, just as a placeholder I grabbed the roof mesh from [the stable that is used for the Trading Post in Stormwind](https://marlam.in/u/10hu_tradingpoststable01.png) and made it much wider to at least cover the front. 
Another thing I tried is getting the entrance to use some of the same textures as the rest of the exterior so it'd fit in better. There's also some basic UV remapping done there, but I really don't know what I'm doing so it looks pretty bad. 

![https://marlam.in/u/blender_PiOjPUsRMu.jpg](https://marlam.in/u/blender_PiOjPUsRMu.jpg)

I wanted to get it to a point where I would be able to export it to the game again to get a good look at it. After a lot joining of the various kitbashed parts and setting up the materials for exporting, I got it to an acceptable point where I think the concept I was going for was getting pretty clear.

![https://marlam.in/u/blender_kfzN17skSy.png](https://marlam.in/u/blender_kfzN17skSy.png)

One export and a bit of fiddling with patching in the [missing materials](https://marlam.in/u/Wow_wlrTeeZHno.jpg) later, I got it in-game!

![https://marlam.in/u/Wow_GKYAOfu39U.jpg](https://marlam.in/u/Wow_GKYAOfu39U.jpg)

If you manage to ignore the glaring UV issues and the fact it's just not finished, it's looking pretty good!

With this method of making the exterior clearly working, I decided to move on for now to the next part of this project that I expected to be troublesome.

### Oh no, the door.
![https://marlam.in/u/Wow_4QJ7CvmOBP.png](https://marlam.in/u/Wow_4QJ7CvmOBP.png)
The interior model has a closed door. While I'll probably make two versions of the model, one with a door and one without, for future project reasons I want to be able to have a separate door object there that can open/close.

I had two options here (that I could think of). 

1) Downport the model to 3.3.5 so I can edit it in WBS, remove the door and convert it back up.
2) Surgically remove the door manually.

Option 1 got thrown out relatively quickly after seeing various modern bits of the model getting lost in the conversion process. I wanted to keep it as intact as humanly possible as to not ruin how amazing it is. This meant having to remove the door in a more manual fashion, AKA Option 2. 

_Warning: This is where things get rough and a bit technical._

I largely know the basics on how the [WMO](https://wowdev.wiki/WMO) file format works. Surely I can just edit the file to my wishes and just disable the faces of the door. I grabbed my old model viewer project in which I can control the (really rough) rendering of things and mapped out which specific triangles/faces I wanted to remove by slowly disabling more and more things until I found the exact face I wanted gone.

![https://marlam.in/u/WoWViewer.NET_zL8HvgM3HP.jpg](https://marlam.in/u/WoWViewer.NET_zL8HvgM3HP.jpg)

This took a bit more effort than I had initially expected (no shit) so I wrote up a quick tool that took in the needed information and set the relevant indices to 0 (I chose not to fully remove them as that would jumble up the original file). This ended up being a rather large amount of faces, but I got there in the end (although I might still be missing one here and there). 

![https://marlam.in/u/devenv_dRSSPKkx2u.png](https://marlam.in/u/devenv_dRSSPKkx2u.png)

With those faces set to use only vertice 0, the inner door frame is now completely empty, but a rather glaring issue has popped up. Obviously the wall behind it wasn't perfectly formed around the door and why it would it be, there's usually a door in front of it. 

![https://marlam.in/u/Wow_GsISpq4U7F.png](https://marlam.in/u/Wow_GsISpq4U7F.png)

To solve this I did the most sane thing ever and mapped out the face numbers, the specific vertices and then the 3D coordinates of said vertices.

![https://marlam.in/u/myrtunpyG0.jpg](https://marlam.in/u/myrtunpyG0.jpg)

A lot of trial and error later I got it down to 8 coordinates I had to update with the tool to get it to fit. 

![https://marlam.in/u/devenv_QEtlIo9ebe.png](https://marlam.in/u/devenv_QEtlIo9ebe.png)

At this time I also noticed a [tiny light shaft placed in front of the door window](https://marlam.in/u/Wow_pZJLSEBzn8.png) that I had to remove, but this was pretty easy. It is a separate model (doodad), so I just set the scale of it to 0. 

With that fixed and the vertices around the door frame updated, it looked pretty damn good (outside of some mildly displaced UVs that I hope will remain largely unnoticed).

![https://marlam.in/u/Wow_OGS1nzuNpI.png](https://marlam.in/u/Wow_OGS1nzuNpI.png)

Now, you'd think that was it, but there's still a collision mesh there so you still can't _actually walk_ through the damn door. I can't blanket remove the collision mesh in that area since you'd just fall through the floor, so it is time to find yet another specific vertice to change the coordinates of.

WoW's WMOs use BSP (Binary Space Partioning) trees for detecting collision, a technique originally developed for Quake that is far too complex for me to explain so I'll link to [this video](https://youtu.be/wLHXn8IlAiA) for those who are curious, but you don't need to watch it to understand the rest of this paragraph. 

Basically, some of the triangles/vertices in the WMO are exclusively for this collision mesh. Without diving into the entire BSP rabbit hole, I checked which triangles were used by the collision mesh and then which vertices were connected to it (thanks for the tip schlumpf). Then I found a specific vertice I could move to make an adequate hole.

Although this was done through editing the file itself with my hacky tool, [here is a visual representation](https://marlam.in/u/blender_e3TUogcOmS.mp4) of what that did to the collision mesh. Not perfect, but good enough.

_And this is where I am now, more updates soon(tm)._

### Finish basic exterior
With that done, it's time to move on to the rest of the exterior to get a 'closed' model around the interior. That includes a roof.

### Merging the WMOs
An important part that I need to do is merge the exterior group with the interior groups into one WMO. This will involve making portals (probably explain this) as well as modifying the WMOs in other ways I have not yet thought of or ran into.

### Detailing
Fixing up the various UV issues, adding some exterior doodads and all that.

## Future ideas
- Interior updates (Warcraft Rumble machine, some of the things from the cinematics)
- NPCs? Custom ones? Hmm!
- ???

## Credits
Many thanks to my friends who have helped me out throughout this project (specifically Implave and Belvane!). Obviously credits go out to the Blizzard artists that worked on the original tavern model in any shape or form. Same goes for the Frontier Inn that I largely harvested parts from.