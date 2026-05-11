const SPELLS = [
'Strength',
'Protect',
'Heal',
'Sword',
'Light',
'Freeze',
'Fireball',
'Quake',
'Smite',
'Orb',
'Entangle',
'Cure',
'Rest',
'Fly',
'Imbue',
'Amulet'
];
const CHARACTERS = ['Kara', 'Brammek', 'Zil', 'Felicity', 'Wren', 'Vane', 'Caspian', 'Lily', 'Meriel' ];
const characterClassLookup = {
    'Kara': 'Warrior',
    'Brammek': 'Paladin',
    'Zil': 'Artificer',
    'Felicity': 'Princess',
    'Wren': 'Ranger',
    'Vane': 'Rogue',
    'Caspian': 'Knight',
    'Lily': 'Mage',
    'Meriel': 'Druid',
    'Luna': 'Familiar',
};
// This list has the same index as the ids used for scenes
const ROOMS = [undefined,
'Entrance',
'Kobold',
'Treasure',
"Spider",
'Shrine',
'Lake',
'Mushroom',
"Dragon",
"Lich"
];
const roomsInOrder = ['Entrance', 'Kobold', 'Treasure', 'Spider', 'Shrine', 'Lake', 'Dragon', 'Mushroom', "Lich"];
const displayNameLookup = {
    'Entrance': 'Dungeon Entrance',
    'Kobold': 'Kobold Camp',
    'Treasure': 'Treasure Room',
    "Spider": "Spider's Cavern",
    'Shrine': 'Trapped Shrine',
    'Lake': 'Underground Lake',
    'Mushroom': 'Mushroom Forest',
    "Dragon": "Dragon's Lair",
    "Lich": "Lich's Chamber",
    "Strength": "Belt of Strength",
    "Sword": "Sword of the Sun",
    "Orb": "Orb of Eternity",
    "Cure": "Cure Poison",
    "Rest": "Lay to Rest",
    "Amulet": "Arcane Amulet",
}

const INTRO_TEXT = `
King: Please, Seer, you must help me discover what happened to the princess. She entered that deadly dungeon three days ago with her companion and never returned.
King: You claim you can <b>scry on past events</b>. You should be able to tell me the princess's exact fate.
King: First, prove your scrying works. I sent a party from the Adventurer's Guild into the dungeon to find the princess, but they never emerged either...
King: If you can accurately tell me <b>what spell they cast before entering the dungeon</b>, then I'll entrust you with discovering the Princess's fate.
King: The leader, Kara, is known for her magical [Belt of Strength]. You could start by scrying on traces of its magic.
King: When you can answer my question, use the <b>Record Fates</b> button.
`;

const INTRO_2 = `
King: So your scrying does work. My messenger confirmed your report that the artificer Zil used Imbue to create a golem outside the dungeon.
King: Now I task you to discover what happened to my daughter, <b>Princess Felicity</b>.
King: Here's a portrait of her. Please study it so you can target your scrying on her.
Felicity: [In the portrait, Felicity wears an elaborate gown and an impatient smile.]
King: If you scry on the dungeon, you will learn the fates of the other adventurers who ventured inside. Click the <b>Record Fates</b> button at any time to note their names and fates.
King: Once you've discovered everyone's fates, we will speak again.
`;

const END_TEXT = `
King: ...
King: My Felicity living thousands of years as a lich...
King: She paid such a great cost to protect the [Orb of Eternity] from those who would misuse it.
King: Back when we were young adventurers, Lily and I wanted to save the world, and we thought a powerful artifact could do that. But searching for the lich's artifact only led to losing our friends.
King: Now Felicity is the one truly saving the world! But unless there's a way to reach the bottom floor of the dungeon, I've lost her too...
King: I would change the ending of this particular tale if I could. But at least we know, now, the heroic sacrifice she made.
King: Thank you, Seer, for telling me Felicity's story.
`;

const EPILOGUE = `
Lich: Father... I can't let anyone use the Orb of Eternity, even you.
King: Oh, Felicity, that's not why I'm here. I just wanted to see you.
King: It was horrible when the seer told me what happened to you. Since then, my soldiers have been working to clear a path through the collapsed dungeon.
Lich: I'm glad Kara can escape, and I... I missed you. But this is too dangerous.
Lich: The Orb must stay hidden away, or more adventurers will perish trying to seize it.
King: Let it stay here, then, when we head back to the castle. We can seal the entrance to the dungeon and post guards there, and then you won't have to worry.
Lich: I can't. My existence depends on the power of the Orb. Leaving the dungeon would be the end of me.
King: Felicity... Don't worry. I won't let this be the end of you.
King: I'm stronger and wiser now than when I first ventured into this dungeon, and I have a whole kingdom supporting me. I'll do whatever it takes.
King: If there's a way to destroy the Orb and return you to yourself, I swear on my heart's blood that I will find it.
`;

const SCENES_TEXT = `

--- 1.1
Caspian, Lily, Meriel, Vane, Amulet
Vane: Ha! Bullseye!
Caspian: Stop throwing knives at trees and just be patient, Vane. Lily has to charge her [Amulet].
Lily: Now - accept my offering, {Arcane Amulet}!
She holds the amulet in both hands and sends magical power swirling into it. Beside her, the knight pauses polishing the [Sword of the Sun] to watch the glow build in the purple gem.
Vane: Caspian just wants everyone to admire the fancy gift he got Lily. Meriel and I are feeling very left out, Cas.
Meriel: ...
Lily: Oh, but it really is fantastic. It concentrates magic to up to three times its potency! It will be great to have if we have to face a big obstacle.
Vane: Like a lich, you mean?
Caspian: Exactly. The tales say the lich is powerful - but that means the artifact it's guarding must be powerful too.
Caspian: If anyone can reach the bottom of the dungeon, defeat the lich, and capture the artifact, it's us.

--- 1.2
Caspian, Lily, Meriel, Vane, Fireball, Sword
Caspian: We're going to need some firepower against all these kobolds! Can you do the honors, Lily?
Lily: Oh, but they're kind of cute! Look, that one is using an old pan as a weapon.
Vane: "Cute"? They're trying to kill us. Let's kill them back, please!
He has to shout to be heard over the ferocious yipping of the dozens of kobolds and the howling that the druid's wolf is doing in return. The knight draws his rune-inscribed sword and activates it with a shout.
Caspian: {Sword of the Sun}! Let's go, Lils.
Meriel: Now, stay back, Luna!
The wolf ducks out of the way as the mage raises her staff, her free hand moving through an intricate series of spell signs.
Lily: {Fireball}!

--- 1.3
Caspian, Lily, Meriel, Vane, Heal
Caspian: So much for Vane's famous agility.
Vane: The smoke from Lily's [Fireball] was in my eyes right when the kobold came at me, okay?
Lily: Oh, Vane, just hold still. {Heal}!
Caspian: Hey, Meriel, what's Luna got there?
Meriel: I think something sinister is hiding in this chest - a Mimic, perhaps.
Vane: Ooh! I've always wanted to see if I could steal the treasure from a Mimic. Without getting my arm bitten off, hopefully.
Lily: Please be careful, after I just healed you...

--- 1.4.1
Caspian, Lily, Meriel, Vane, Light, Cure
Caspian: Lily! [Fireball] whatever that thing was, now!
Meriel: No! You'll burn Luna.
Lily: Oh dear, I can't see at all! I'll just - {Light}! Eep!
The light from the mage's staff glints in the many eyes of the huge spider overhead and illuminates the wolf that hangs limply from its claws.
A heartbeat later, Meriel draws her bow and sinks an arrow into the spider's head, dropping it to the ground.
Lily: Oh no! Is Luna okay? The spider moved so fast...
Vane: Ugh, that thing is creepy. Probably poisonous, too.
Lily: Oh dear. Quick, Meriel, I'll try - {Cure Poison}!
Meriel: ...

--- 1.4.2
Caspian, Lily, Meriel, Vane, Rest
The druid kneels before the motionless form of her familiar, her head bowed.
Lily: Oh no, was my [Cure Poison] too late?
Meriel: Yes. I'm afraid Luna is dead.
Caspian: Meriel... I'm sorry.
Lily: But Meriel, the tales say the lich's artifact controls life and death. If we can get the artifact, this might not be goodbye!
Meriel: ... Luna is gone. There's no power that can reverse death.
Meriel: Please, give me a moment. I will now {Lay to Rest} my beloved companion.
After a moment, the rogue steps close and sets down a jade carving of a wolf.
Vane: Hey. This was in that Mimic's treasure chest. I thought, if you want, Luna could have it.
Meriel: ... Thank you, Vane.

--- 1.5
Caspian, Lily, Meriel, Vane, Entangle
Vane: Come on, slowpokes. This isn't that hard.
Caspian: Show off. Forgive us for being careful in a room full of deadly traps.
Lily: Oh, hm, I wonder what that statue with the sphere does?
Vane: Let's see... Ha ha! Looks like a nice little bolt of lightning. I'll just - dodge that -
Meriel: This is a dungeon, not a game. Don't get carried away, or someone will - {Entangle}!
Vines burst from the ground and wrap around a sword that was about to slice into the rogue's head.
Meriel: Someone will get hurt.
The flat tone of the druid's voice makes the rogue look back, and his smirk fades.
Vane: Sorry, Meriel.

--- 1.6.1
Caspian, Lily, Meriel, Vane, Amulet, Fly
The lake laps lightly at the mossy stone landing the party is standing on, then stretches out in a vast sparkling expanse. On the far shore, a passageway leads deeper into the dungeon.
Lily: Look at that deep blue. It's beautiful!
Meriel: It is.
Caspian: It's also very big. What do you have for us, Lily?
Lily: Hm. The easiest would be... Yes. Ooh, I think I need my [Amulet] for this one. Serve me now, {Arcane Amulet}!
The silver amulet around her neck sends out power in a bolt of light, surging into the mage until her eyes glow purple.
Lily: Everyone, hold hands! And now - {Fly}!
The party starts to soar over the lake. An eerie glow shines from the shifting water below.
Caspian: Please stay focused, Lils. We're depending on you.
Vane: Scared, Cas?
Lily: Just make sure to protect me if there's any trouble... or we're all going down!

--- 1.6.2
Caspian, Lily, Meriel, Vane, Protect
Vane: Uh, you mentioned trouble, Lily?
A giant fish with razor-sharp fins and a needle-toothed mouth makes a powerful leap towards the flying party. It barely misses them before plunging back into the water.
Lily: Eep! I need to concentrate on [Fly] or we'll fall!
Caspian: Let me get out my sword -
Lily: No, don't let go of my hand!
Meriel: Stay calm, everyone. {Protect}!
A green glow radiates out from the druid's hand and envelops the group, just in time to block the monstrous fish as it leaps at them. They all let out a breath.
Vane: Hey, nice one, Meriel.

--- 1.8.1
Caspian, Lily, Meriel, Vane, Freeze, Entangle
The dragon has thick crimson scales, huge jaws full of teeth, and a sinuous neck that swipes from side to side, snapping at the party and shooting out jets of flame.
Vane: Ugh. There's no way I can find a weak spot with it thrashing around like that. Caspian? Plan?
Caspian: Uh, magic?
Meriel: Dragons resist magic. A spell is as likely to hurt it as my arrows.
Vane: So, not at all.
The mage peeks at the dragon from the corner she's taken refuge in.
Lily: Hm. Magic can't hurt it - but it can still affect it, right?
Meriel: What are you thinking?
Lily: Meriel, your [Entangle] is always strong. Can you cast that? I'm going to try - {Freeze}!
Meriel: Very well - {Entangle}!

--- 1.8.2
Caspian, Lily, Meriel, Vane, Sword, Quake
Lily: That should hold the dragon for a moment. What now?
Vane: Let's not wait for it to get free - let's take some its treasure and go!
Caspian: No, we're so close to the artifact. We can't run away now.
The dragon growls, glaring at the party as it struggles against the shimmering layer of ice and cocoon of vines that hold it immobile.
Vane: It might be run away or die, Cas.
Lily: But the lich's artifact - if it can save lives, it's worth it.
Caspian: Lily's right. We need to try.
Caspian: {Sword of the Sun}! Serve me now as you served my forefathers!
His blade glows with a brilliant golden light and he charges at the dragon, leaps forward, and plunges the shining blade into the dragon's throat.
Flame erupts from the wound, scalding the knight. The ice melts into nothing and the dragon rears up, its roar vibrating the cavern, its gaze fixed on the knight.
Lily: Caspian! No! Oh dear, I'll have to - {Quake}!
Meriel: Everyone take cover! The rocks -
Vane: Ah!
Caspian: Vane! I can't get over there. We have to get out of here!
Vane: Idiots. We... should have run...

--- 1.7
Meriel, Vane, Heal
The druid, panting, lets the rogue fall to ground under the glow of the giant mushrooms. His head is bloody from being battered by rocks and he doesn't move.
Meriel: No... {Heal}!
The blue glow of power floats over the rogue's body, doing nothing.
Meriel: He's already gone...
Meriel: ...
Meriel: The [Orb of Eternity]. If it truly has such power, then maybe...
Meriel: Maybe it's worth whatever the cost will be.

--- 1.9
Meriel, Vane, Orb
Lich: It's you... Where is Lily?
Meriel: What? Who are you? How do you know her name?
Lich: She was... someone I knew, a long time ago.
Meriel: I believe Lily and Caspian fled back the way we came. But, please, you must help Vane -
The lich keeps its glowing eyes fixed on the druid. It doesn't even look at the crumpled form of the rogue on the ground between them.
Lich: First, I must give you a critical quest.
Lich: In two years, Lily and Caspian will have a child. When that child is grown, bring her here.
Meriel: What? Why?
Lich: It is her fate to save the world.
Meriel: ... How can I trust you?
Lich: You wish me to bring this halfling back to life. If you swear on your heart's blood that you will bring me Lily's daughter, I will do as you ask.
Meriel: Very well. I swear it.
Lich: Then let it be so. {Orb of Eternity}!
The rogue sits up. His skin is gray under the blood and dirt on his face, and his warm brown eyes now shine pitch black.
Revenant: Run...
Meriel: No. No, what did you do?
Lich: Fulfill your oath, my old friend, if you don't want this to be the fate of the entire world.

--- 2.1
Wren, Felicity, Amulet
Felicity: Please, allow me to say thank you, Wren. Father always dismissed the idea of me venturing into the dungeon, but you never did.
Wren: I know you are destined for great things, my lady. But there will be dangers ahead. Allow me to cast [Protect] to shield you.
Felicity: Yes, I know - monsters, traps, even this evil lich they tell tales about.
Felicity: But I've been training since I first heard Father's stories, and I have you by my side. Save your [Protect] for a time when we really need it.
Wren: Very well.
Felicity: Don't look so grim, Wren. This is my chance to follow in Father's footsteps. To find the artifact and then...
Wren: ...
Felicity: And then return triumphant. Now, that reminds me. Before we go in - Accept my offering, {Arcane Amulet}!
Power passes from her hands through the inscribed runes, building in the gem at the amulet's center until it shines with a steady purple light.

--- 2.2
Wren, Felicity, Entangle, Sword
The arched ceilings of the hall echo with the chatter of kobolds as a wave of them rush towards the princess and the ranger, eager to defend their turf.
Felicity: Ah! There's a lot of them. But not to worry. {Sword of the Sun}!
The runes on the sword blaze with golden power as she steps forward to meet the kobolds.
Wren: Be careful!
The princess's footwork is elegant, but she's been trained to fight duels, and the mob of kobolds quickly surround her. A spear jabs into her leg, and she stumbles.
Felicity: Ah!
Wren: No! {Entangle}!
The ancient tile cracks as vines sprout from the floor, surging up to twine around the kobolds and hold them in place. It only takes a few moments for the princess to dispatch them with her glowing sword, her teeth gritted.

--- 2.3
Wren, Felicity, Heal
Felicity: Ow. Wren, it's fine. You don't need to - ow. You don't need to bandage it, I can just cast {Heal}. See?
Wren: Very well, my lady.
As the blue glow of Heal fades away along with the princess's injury, she lets out a breath.
Felicity: ... Perhaps we should turn back after all. I don't want to make Father worry.
Wren: Have courage, my lady. Your fate lies ahead.
Felicity: Yes, you're right. The heroes of tales wouldn't give up.
She offers the ranger a smile. The ranger nods her head in acknowledgement, her face shadowed by her hood.
Felicity: Now... I wonder if there's anything useful in any of these chests?
Wren: I doubt that, my lady. Previous adventurers have likely taken anything of value.
Felicity: Ah, yes, I'm sure you're right. Let's continue.

--- 2.4
Wren, Felicity, Light
Wren: My lady, please cast [Light] as we enter.
Felicity: As you wish, Wren - {Light}!
The spell chases all the shadows deep into crevasses in the stone, leaving the cavern empty and still. 
Felicity: Look at this stone - it says "Luna". I wonder what that means?
Felicity: Ooh! And this precious little jade carving! I wonder how that got down here?
Wren: ...
Felicity: I'd expect something like this in the Treasure Room, not just sitting in a cave. Odd!

--- 2.5
Felicity, Wren, Heal
Felicity: Ooh, these statues are very striking... Ah!
The ranger seizes the princess's arm and pulls her back, just as a marble statue springs to life and brings a sword down with deadly finality.
Felicity: Oh! Striking, indeed.
Wren: Follow me, my lady, and step only where I step.
The ranger's soft footfalls lead them across the room, dodging the spots guarded by statues or hiding spikes or pits.
Felicity: You're good at this. Have you been here before?
Wren: ...
Felicity: Wait - you've been in the dungeon before, Wren? You never told me.
Felicity: Why is it a secret?
The ranger's gaze snaps back to the princess. At the same moment, an arrow shoots from the mouth of a snake statue and slams into the ranger's side before she can dodge.
Wren: Ah! Now - now is not the time for revelations, my lady.
Felicity: Wren! Oh, you're bleeding. Let me - {Heal}!

--- 2.6
Felicity, Wren, Freeze, Amulet
The princess looks out across the vast underground lake, which shimmers with an eerie bioluminescent glow.
Felicity: Hm. I could [Freeze] the water, but I don't think I have enough power to cover the entire lake...
Wren: What of your mother's- that is, your [Amulet]?
Felicity: ...
Wren: I apologize.
Felicity: Don't. It's a little silly of us to avoid mentioning her, isn't it?
Felicity: I mean, she's why I'm here...
Felicity: ... That aside, excellent idea. Serve me now, {Arcane Amulet}!
The purple glow of power spirals up from the amulet into the princess's chest. She gasps and blinks violet eyes.
Felicity: That worked! I think I can - {Freeze}!
Ice crystals burst from her outstretched hand and skate along the water, drawing a glittering path across the lake. The adventurers move carefully across, looking around at the glowing water.
Felicity: That deep blue... It's beautiful.
Wren: ...
Wren: Felicity. You asked if I'd been here before - I have.
Wren: It was a long time ago, as measured by your human lifespan, at least...

--- 2.8
Felicity, Wren, Protect
The dragon's cavern is filled with crags of fallen rock and piles of treasure, but the princess and the ranger can't seem to find cover from the searing blasts of dragonfire.
Felicity: You lied to me!
Wren: My lady. Whatever happens, you must reach that far passage.
Felicity: Answer me! Why hide your identity from me and Father? What else are you hiding?
Her voice rises. The dragon's neck whips towards her, and it lunges at her with its fanged mouth open.
Felicity: Ah!
Wren: {Protect}!
Green energy streams from the ranger's outstretched hand to form a barrier around the princess, blocking the dragon's bite. The dragon rears back, snarling.
Wren: All I want is to do is serve you, my lady. I swore an oath -
Before she can finish, the dragon snarls and snaps at them again. Its jaws close around the ranger, fangs piercing her cloak, hot breath billowing around her.
Felicity: Wren!! Oh, by all the gods, why did I use up my [Arcane Amulet] at the Underground Lake...

--- 2.7
Felicity, Wren, Heal
The princess and the ranger stumble into the glowing cavern along with a blast of hot air from the Dragon's Lair. The ranger leaves a trail of blood with each step.
Wren: My lady... Please, continue without me.
Felicity: Don't be silly, Wren. You'll be fine. {Heal}!
The gentle blue pulse of the spell is almost invisible in the glow of the giant mushrooms. It knits together the ranger's smaller wounds, but the gashes left by the dragon's teeth refuse to close. The ranger's face is pale and she breathes in gasps.
Felicity: I don't know if I'm powerful enough to do this. If Mother were here...
Wren: You must continue.
Felicity: Come with me. The lich's artifact controls life and death, right? It can save you!
Wren: No... No power can reverse death, not even the [Orb of Eternity].
Felicity: But that's why we're here... My mother...
Wren: Your fate is to save the world. You must continue onwards.
She takes a rattling breath, closing her eyes.
Wren: It's been an honor... my lady.

--- 2.9
Felicity, Orb
Lich: I've been waiting for you, Felicity.
Felicity: The lich... And that must be the artifact. The one that can control death.
Lich: This is the [Orb of Eternity]. It controls time. Death is just a function of time.
Felicity: And can it - can it bring back those who are gone?
Lich: Your mother wasted away from illness and has rested in the earth for a year. Would you really like to awaken what remains of her?
Felicity: No!
Felicity: No, I... I thought...
She covers her face with her hands. The lich is perfectly still. Finally the princess looks up again, wrapping one hand around the Arcane Amulet that rests over her heart.
Felicity: The Orb controls time? Then send me back. At least let me see her again. Please.
Lich: ... You wish to go back in time. Step closer, and lay your hand upon the [Orb], then invoke its power.
Felicity: Very well. {Orb of Eternity}!
A wave of darkness pulses from the orb, reaching for the princess. It makes no noise as it swallows her. There's only the echoing clang of her crown and sword falling to the ground.
Lich: ...
Lich: Felicity... This is our fate.

--- 3.1
Kara, Brammek, Zil, Imbue
Brammek: I know you're excited, Kara, but we must be cautious. The dungeon is full of dangers - tales tell of a deathless lich lurking in the depths.
Kara: Oh yeah? Let's just see how deathless it is once I'm done with it.
Zil: ... Well, by definition, a lich is a creature that has used magical means to avoid death, so -
Kara: Okay, just finish your stone man so we can go in.
The artificer's eyes shine behind his goggles as he bends close to the metal-and-stone creation on the ground.
Zil: It's ready. {Imbue}!
As he casts the spell, blue light sparks from his fingertip and courses along the golem's stone skin. When it stands, it looms over the shorter party members. The warrior grins.
Kara: Nice! Now let's go. We have a princess to rescue.

--- 3.2.1
Kara, Brammek, Zil, Fireball
Zil: Ah, yes, I expected some monsters might have taken up residence here. Stand back, please.
Zil: Kobolds are exactly the type of enemy that my [Imbued] golem was built for.
The spell-engineered golem lumbers forward, meeting the kobolds, who snatch up makeshift weapons and dash forward to take on the intruders.
Brammek: Hm. That machine can land a punch, I'll give you that, Zil.
But the golem is outnumbered. Kobolds leap at it and tear at the metal and wiring that holds the stone body together. The blue runes that trace its limbs flicker and go dark.
Zil: Nooo!
Kara: Sorry, Zil - I guess we're getting through this floor the old-fashioned way.
She draws her greatsword. But the artificer is faster, reaching for the vials at his belt and seizing an orb full of brilliant red.
Zil: How's this for the old-fashioned way? Take this! {Fireball}!

--- 3.2.2
Kara, Brammek, Zil, Strength
When the smoke clears, the marble floor of the underground hall is scorched dark. The surviving kobolds shriek with anger.
Kara: A [Fireball] in a bottle! Nice!
Zil: That's what those nasty kobolds get for killing my friend!
The warrior snorts, hefting her greatsword as the remaining kobolds fix their beady eyes on the party.
Kara: Well, I'm glad you had a friend, Zil. At least for a little while.
Zil: Very funny.
Brammek: Don't let down your guard, Kara. There are a lot left.
Kara: No problem - {Belt of Strength}!
Orange runes on her belt flare to life as a surge of power fills her. With a yell, she charges into the center of the burnt kobold camp, greatsword swinging in a vicious arc.

--- 3.3
Kara, Brammek, Zil, Heal, Freeze
Brammek: Deep breaths and hold still, now. {Heal}!
Kara: I love that tingly feeling. Thanks, Brammek.
Zil: You know, I have potions that can heal injuries too. I've got all kinds.
Brammek: Save your potions for emergencies, kid.
The small room is packed full of dusty containers. The artificer paws through them, keeping an eye out for anything that hasn't been picked over long ago.
Zil: ... Hm, signs of movement... I suspect this chest is actually a Mimic! It might be guarding some treasure. Let's see...
Brammek: Did you hear what I just said? About saving your -
But the artificer has already pulled out a bottle shimmering with crystalline blue and decanted it over the chest.
Zil: {Freeze}! Kara, can you kick it right there?
At her forceful kick, the ice-covered chest springs open, showing the fangs and frozen tongue of the monster hidden inside.
Kara: I don't see any treasure.
Zil: ... Aw. I suppose someone else got here first.

--- 3.4
Kara, Brammek, Zil, Light, Smite
Kara: Ah!
Zil: Kara? What happened? {Light}!
He lobs a glowing marble into the darkness of the cavern. It shatters and the flare of light reveals a hulking spider huddled on top of the warrior, pinning her to the ground.
Zil: Ah! I hate spiders! Kill it with [Fireball], Brammek!
Brammek: I never cast [Fireball], kid. I prefer the targeted power of the divine light of the Holy Scribe to turn aside evildoers.
Kara: Okay, wonderful - do that then!
Brammek: {Smite}!
A searing ray of white light blasts the spider away from the warrior. She sits up with a shudder.
Zil: Oh no, Kara, did it bite you? I have a potion -
Kara: No, it's okay, it didn't get its horrible mandibles into me. Ugh.
Brammek: Deep breaths, everyone. We're fine.

--- 3.5.1
Kara, Brammek, Zil, Vane, Smite
Zil: Interesting. I don't see any signs of [Imbue] on these statues. I think they're purely mechanical traps. It's impressive, actually.
Kara: More like annoying. ... Wait, that's not a statue.
The figure prowling towards the party makes no attempt to avoid the traps that fill the room. There's a metallic shriek as a blade spins out from the wall, but no blood spills when it cuts flesh.
Brammek: By the Divine Scribe. That's no living person. It's a revenant.
Its skin is gray and its head malformed as if dented by a massive blow, but there's something alive in the pitch-black glow of its eyes and the rapid tilt of its head as it considers the party.
Revenant: Run away... or die...
Brammek: Begone, creature of evil! {Smite}!
White light sears towards the revenant, but it dodges backwards with startling agility.
Zil: Did you get it? Where is it?
Kara: Ugh, I can't see it in the shadows. Quick, Zil, do you have another one of those [Light] thingies you used earlier?

--- 3.5.2
Kara, Brammek, Zil, Vane, Light
Zil: Trust me, this will work. The traps in this room are as regular as clockwork. And after the revenant is impaled, Brammek can hit it with another [Smite].
Brammek: Be careful, Zil. That thing might be dead, but it seemed pretty smart.
Zil: But I'm smarter. Here we go - {Light}!
He lobs a glowing marble into the shadowy corner where the revenant disappeared. The flare of light shows a flash of movement as the revenant ducks away.
Zil: Not so fast!
He throws another [Light] spell in the revenant's path, blocking its escape. It turns nimbly and dashes directly at the artificer, but he dodges sideways, ducking under a spear thrust by a trap.
Brammek: Watch yourself, kid!
Zil: Right where I wanted you! Wait -
The revenant unexpectedly spins to the side, and when the artificer flinches, a statue slices down with a massive sword.
Kara: Zil!!
Brammek: Kid!
The revenant turns away from the artificer's crumpled body with a wicked smirk. The paladin is already charging forward, dropping his holy symbol to cast a spell with both hands.
Brammek: Burn in hell, demon!

--- 3.5.3
Kara, Brammek, Fireball, Rest
Brammek: {FIREBALL}!
The flames light up the entire passageway, throwing stark shadows from the statues against the walls. When the smoke clears, the Revenant is just a smear of ash.
The artificer's clothes are singed black and his form is motionless on the ground, the used-up glass [Light] baubles scattered around him.
Kara: Heal him! Now!
Brammek: He's already gone.
Kara: No! Use your holy magic! That's your job!
Brammek: Nobody can bring the dead back to life, Kara. Not true life.
Kara: No. No... It tricked him. He was supposed to be smarter! This isn't fair!
The paladin kneels beside the body of the artificer, moving carefully to avoid the trap triggers.
Brammek: Deep breaths, Kara.
Kara: Okay. You're right. Let's get out of here. We have a princess to rescue.
Brammek: Not yet. If we don't care for him now, he could end up like that revenant.
He bows his head, sketching the symbols of his god in the air above the artificer's body.
Brammek: {Lay to Rest}!

--- 3.6
Kara, Brammek, Smite
The remaining party members float across the dark underground lake, using a wooden door wrenched from its hinges as a raft. Neither speaks, and for a long time the only sound is the gentle lapping of the water.
Brammek: Look.
To their left, a ridged fin cuts through the water. Just under the surface is a shadow as large as the door.
Kara: Well, that looks friendly.
Brammek: Reveal yourself to the Divine Scribe! {Smite}!
A missile of white light cuts through the water to plunge into the shadowy shape, and it sinks back into the depths.
Kara: I hope that's really gone.
Kara: Since your Smite didn't slow that thing in the Trapped Shrine down in the slightest.
Brammek: Kara...

--- 3.8.1
Kara, Brammek, Quake
The piles of treasure shimmer with heat and slide beneath the heroes' feet as they try to dodge the dragon's snapping jaws and burst of flame.
Kara: Argh, this is useless - no pointing in using my [Belt of Strength] if my blade can't get through its scales. Are you out of magic already?
Brammek: I'm low. And none of my spells are powerful enough to hurt it on their own.
Kara: We can't turn back now - we need to find Princess Felicity. So figure something out.
Brammek: Hm, those cracks in the ceiling... Kara, when I say, run to that far corner.
Kara: Why?
Brammek: Now! {Quake}!

--- 3.8.2
Brammek, Kara, Smite
The entire cavern shudders in the aftermath of [Quake]. The cracks that were already in the ceiling split like faultlines, bringing down boulder-sized chunks of rocks. The dragon shrieks.
Brammek: Praise the Divine Scribe, the beast is trapped!
Brammek: And so am I... Kara? Kara, are you all right?
Kara: Brammek? I can't get to you!
Brammek: You go on ahead, Kara.
He's trapped with the wild-eyed dragon. As the cracks overhead spread in grinding inches, water starts to trickle through. The drops hiss against the dragon's red-hot scales, and it lunges frantically at the paladin.
Brammek: Deep breaths, Brammek. Few are given the chance to end a dragon.
Brammek: In the name of the Divine Scribe, let it be written that Brammek did his best to destroy evil. {Smite}!
The sizzling bolt burns through the dragon's battered scales. It spasms, lurching towards him, and its fangs sink into him. They've both fallen still by the time a fresh cascade of rocks buries them.

--- 3.7
Kara, Cure
The warrior paces between the gargantuan mushrooms that fill the narrow cavern, fists at her side.
Kara: That idiot! What made him think [Quake] was a good idea? I'm not supposed to be the brains of the party here.
Kara: ... Not that there is a party anymore. Damn it!
She aims a vicious kick at a mushroom, which wobbles cheerily back and forth, dropping a thick drift of glowing spores.
Kara: Achoo!!
Kara: Oops, I hope that wasn't poisonous... Ugh, I feel... Uh oh.
Kara: Okay, think, Kara. Zil was always talking about having a potion for everything, right?
The artificer's belt of vials is stuffed into her bag. She pulls it out and peers at the labels.
Kara: Aha! {Cure Poison}!
Kara: ... Okay, I think that's working. Phew!
Kara: Thanks, kid...

--- 3.9
Kara, Orb
Kara: Answer me if you want to keep your head, lich! Where is the princess?
Lich: The princess is before you.
The warrior shakes her head. In the dark and decrepit chamber, there's no sign of the young pricess except for the royal family's [Sword of the Sun] resting against the throne.
Kara: Stop lying! She entered the dungeon three days ago, she must still be alive -
Lich: I entered the dungeon three days ago, but also three millenia. The [Orb of Eternity] has allowed me to guard this dungeon for all these centuries.
Kara: What? Listen - my whole party died! I need to do this for them. I need to rescue the princess!
Lich: Observe a glimpse of my past, if you don't believe me. {Orb of Eternity}!
A swirling pane of darkness forms between them. Through the pane the warrior sees not the ancient lich but the princess, as she used to be, young and hopeful. After a moment the illusion fades.
Kara: You're her? But... how?
Lich: I wished to use the [Orb of Eternity] to see someone I lost. But I wasn't able to control its power. It sent me far back in time, and I had to become a lich so I could survive to today.
Lich: Every person misses someone who's gone. Every hero wishes to reverse death. That's the temptation of the Orb of Eternity.
Lich: But over the centuries, I learned the truth. Deathlessness is a curse.
Lich: Death is the gift that allows us to enjoy our brief lives. After all, a story without an end is no story at all.
Kara: ... Fine. Death is good, the Orb is bad. I'll just destroy it.
Lich: It can't be destroyed. And so long as it exists, mortals will be drawn to plunder the dungeon, seize it, and curse the world to deathlessness.
Lich: It's my mission to prevent that, no matter what the cost.
Kara: That sounds very noble of you. But if you've been here for all those years, haven't you already done enough?
Kara: The king is waiting for you. Come back with me.
Lich: ...
Lich: I must protect the [Orb of Eternity]. And even if I could leave, the cavern above us has collapsed and flooded.
Lich: There's no escape for either of us now...
`;
