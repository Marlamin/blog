---
slug: player-housing-2
title: "Player Housing - More thoughts"
authors: marlamin
tags: [wow, world-of-warcraft]
enableComments: true
image: https://marlam.in/u/Discord_i03KeSMlAV.png
---

Since my [last post on Player Housing](/player-housing-1), Blizzard has released a few more blog posts and has demo'd player housing/given interviews at Gamescom, leading to many more thoughts! Here we go.

<!-- truncate -->

## New information
The blog posts Blizzard released since my last post are:
- [Azeroth Beautiful: A Look at Housing Interior Design](https://worldofwarcraft.blizzard.com/en-us/news/24186690/azeroth-beautiful-a-look-at-housing-interior-design)
- [Azeroth Living: A Look at Housing Rewards](https://worldofwarcraft.blizzard.com/en-us/news/24196547/azeroth-living-a-look-at-housing-rewards)
- [WoW Housing: It’s Only Neighborly](https://worldofwarcraft.blizzard.com/en-us/news/24221516/wow-housing-its-only-neighborly)

A good amount of information also came from Kexman's interview with Laura Sardinha and Toby Ragaini [here](https://www.youtube.com/watch?v=xBtHpM4KKxM) as well as some other interviews summed up [here](https://www.mmo-champion.com/threads/2663886-Dev-Interviews-Damage-Meter-Apex-Talents-Neighborhood-Managers-and-More). There is also many many hours of interior designing demo footage out there, far too much to collect/link.

A lot of questions I had in my previous blog post have gotten answered by all this new info, you can go through that post and the above links to see all, but lets just say all the answers have been either great. The big ones like how advanced the editor is going to be or how many kits of decor we'll have at launch have all exceeded expectations.

## New thoughts
Based on what I've heard/read/seen I've come up with many more suggestions, as well as a bunch that were noted by those playing the demos or by people in communities I'm in (and Zee). 

I'm sure Blizzard has heard them all at this point, but I wanted to note them out anyways and maybe in a while when we're well into Alpha/Beta (or 11.2.7 PTR if it is before Alpha) we can come back and see if any of these got added! 

I also have some thoughts on neighborhoods/exterior decorating but we know very little about how that'll work yet, so I'll hold off on those for now.

### Editor
#### Copy pasting
This was probably the biggest suggestions I've seen from everyone at the con or various people in chat. Copy pasting with CTRL-C/CTRL-V shortcuts and/or UI buttons is also one of those things people intuitively know how to do. It would of course need to check whether or not you can place any more of those decor items upon copy pasting and such, especially if something like multi-selecting is added.
#### Cloning/duplicating
Similar to the above suggestion but more intuitive/faster is perhaps holding a modifier key while dragging a decor item to clone/duplicate it in place, provided there is one available in the chest.
#### Undo/redo
Also a pretty basic suggestion, an undo/redo system with CTRL-Z/CTRL-Y keybinds. Granted the amount of undos/redos will be limited for technical reasons, but would alleviate some of the issues of people accidentally moving stuff around for example.
#### Multi-selection
Box/group selecting, maybe by holding e.g. control for multi-select and shift for group-select also seems like a thing more advanced users known how to intuitively do. I am aware it can be technically challenging to implement properly, but it still seems like something that is notably missing for those of us used to 3D editors or even map editors. 
#### Grouping
Would require multi-selecting, but the grouping of items (and they then remaining grouped) would be awesome for e.g. kitbashing or various other usecases. Cloning these would then also clone the entire group, etc.
#### Locking
Decor should be lockable in place (maybe by right clicking), I've seen many people playing the demo accidentally pick up decor when misclicking in the UI and due to below issue it would make it change position sometimes significantly, which is just bothersome.
#### Decor clicking
Selecting a placed bit of decor makes it jump 'up' to where your mouse is, but the user would expect it to stay in the same position if they just clicked on it. 
#### Collections
When a player runs out of a certain decor item it disappears from the catalog/chest entirely. Maybe instead it should still list items that you've collected but all placed, but with a 0 available instead. Alternatively, add a filter to the menu that allows for collected but 'out of stock' items to be listed that is off by default.
#### Advanced properties
Right now it appears that there's various positioning modes, simple where you just drag things around or advanced where you use the gizmos or arrow buttons to change properties more granularly. One thing I would like to see however is some sort of way to position things numerically as well. Maybe some sort of key combo that would bring up a window that has editable floats for position, rotation and scale. Some of the models during the demo were also pretty locked in terms of how much they can scale and I'd like to see some of those numbers be bigger (or smaller, let me put boats in cabinets like in the Hearthstone Tavern!).
#### Advanced imports/exports 
It was [already confirmed](https://www.twitch.tv/anniefuchsia/clip/WonderfulCrispyDillNomNom-fe6Lh2psRyVIBj--) that there are plans to add importing/exporting at some point. There are many ways they could go about this, e.g. strings so third-party sites can also generate 'blueprints' and such similar to how the talent system works. They could also go the Factorio way and have placable blueprint items instead (although those can also be imported with strings). One thing I would like to see are 'partial' imports/exports. They would optionally be a full house, only a few rooms or a single room, or even some combined decor. Say someone builds a cool dining table, being able to share just that instead of having to share the whole room/house would be great. On the other hand, being able to share a full house or room is also a nice way to 'back up' your work. I'm aware this is all very complex and will lead to giant amounts of data being stringified (oh god, the floats), but it would be very cool.
#### Advanced lighting 
Another somewhat common message during Twitch chat is that the houses appeared to dark by default, or very yellow if you used models with lights. A relatively simple way to fix this without people needing to place a bunch of braziers around their house is to add a range of M2s that only contain a light of which resizing would influence the amount of light spread. These would not be selectable or have any collision outside of edit mode, but inside of edit mode could show up with for example a lightbulb sprite as is common in other 3D editors. To battle the default yellow-ish color many lights have, possibly allow dying the light as well where the dye color influences the lights color.
#### API
Some of these suggestions could lead to a more complex/overwhelming UI for users and might simply be 'too much'. To alleviate that, maybe opening up enough of the system through the addon API would allow the community to implement some of these. Granted, some will require a bunch of developer work regardless so opening that up only for addons might be a bit moot, but it could greatly improve the UX of player housing as a whole.

### Decor
#### Collectable system
WoW introduced the "collectable" system a while back that tracks the sources for various appearances as well as listing which you don't have. It would be great for decor to be added to that system as well as the collections UI so we can see what we're missing and in some cases maybe even where to get it.
#### Suggestions
Some sort of official way to suggest certain models to be added as decor. This is going to be an extremely common thing that will start happening as soon as player housing is available (for testing). The default PTR suggestions/feedback tool will likely get flooded with requests like this, so maybe a megathread on the testing forums for each region or something could alleviate that during testing. After testing this is going to be common as well, so this might need a more permanent solution.
#### Unlimited decor
Some pieces of decor should simply be available in unlimited quantities or be very cheap/easily accessible (see below). Stuff like rocks, floorboards or other things that will get a lot of usage.
#### Shop 
We know a new cash shop is coming and will include various categories of decor, but a shop available through the in-game UI (maybe even available during edit mode?) where common pieces of decor or pieces of decor on the AH are easily available would be great as well. Having to run to the auction house or a vendor in the neighborhood for decor is going to get very old very quickly. Of course more specific pieces of decor shouldn't be acquired like this, but if you want to get like a wooden chair or a rock and these aren't unlimited, I don't really want to go back to a vendor for that.
#### Building pieces
There are already various building pieces of decor in the demo, but e.g. more curved walls and stuff like that would be great (the decor suggestions have begun!).

That is all for now, I might come back to this post and add a few more things at some point (will list updates at the top) or make another post when we get another information drop. 

As always, you can reach out to me on [BlueSky](https://bsky.app/profile/marlam.in) or via e-mail to marlamin@marlamin.com. Toodles!