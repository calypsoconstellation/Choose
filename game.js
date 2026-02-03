const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const imageElement = document.getElementById('story-image');

// Define each scene in the story
const storyNodes = {
  start: {
    text: "You wake on cold pine needles, breath fogging the air. The forest is quiet and unfamiliar. You are small. Young in a way you haven't been in a very long time. You do not know your name. You do not know how you came here. All you know is that you are alone, and the woods go on forever.",
    image: "images/pine-forest.jpg",
    choices: [
      { text: "Call out for help", next: "callOut" },
      { text: "Stay silent and listen", next: "listen" }
    ]
  },

  callOut: {
    text: "You break the eerie silence and call out “Help!” Your voice feels dulled, as if the trees are swallowing the sound. Gooseflesh creeps up your forearms and you shiver. You get the distinct feeling you weren’t supposed to speak.",
    image: "images/pine-forest2.jpg",
    choices: [
      { text: "Ignore the feeling and call out again", next: "deerherd" },
      { text: "Stay silent and observe your surroundings", next: "eyes" }
    ]
  },

  listen: {
    text: "You have the distinct feeling you aren’t supposed to speak. You wait in the quiet for a moment before you hear it. Soft, barely there. The sound of running water, and the soft sounds of someone or something in distress. ",
    image: "images/pine-forest2.jpg",
    choices: [
      { text: "Walk towards the sound", next: "river" },
      { text: "Walk away from the sound", next: "deepWood" }
    ]
  },

  /* Deerherd */
  deerherd: {
    text: "You call out again, unwilling to let your fear control you. Behind you there’s a sharp snap like a branch breaking. Your head snaps towards the sound, and you lock eyes with the thing watching you. You would hesitate to call it a man. Not with the antlers. Not with those eyes. Not with the unnatural bending of his limbs.",
    image: "images/deerherd.jpg",
    choices: [
      { text: "Continue", next: "deerherdI" },
    ]
  },

  deerherdI: {
    text: "The deer don't seem to mind him, though, and aren't animals supposed to be good judges of character? Or maybe there's something wrong with them too...",
    image: "images/deerherd.jpg",
    choices: [
      { text: "Run", next: "death" },
      { text: "Freeze", next: "death" },
      { text: "Say hello", next: "death" }
    ]
  },

  /* Eyes */
  eyes: {
    text: "It’s dark here. Darker than it has a right to be, because you can see the bright blue of the sky through the gaps in the branches. It’s as if the light refuses to breach the barrier of the forest. Combined with the strange muffling of your voice, you begin to worry for your senses. Had you hit your head? You don’t recall falling. Then you see them. Clear and bright in the dark of the underbrush. Eyes.", 
    image: "images/eyes.jpg",
    choices: [
      { text: "Choice", next: "death" },
    ]
  },

  /* river */
  river: {
    text: "The water is closer than you’d assumed based on the noise. For a half second you wonder if it’s your hearing that’s the issue, but dismiss the thought. It’s brighter here, beyond the trees, and there’s no longer any sign of the high, pained keening you’d heard before.",
    image: "images/river.jpg",
    choices: [
      { text: "Search for a way to cross the stream", next: "death" },
      { text: "Search for the source of the vanished keening", next: "death" }
    ]
  },

  /* death scene */
  death: {
    text: "Your actions have resulted in your demise. Thanks for playing.", 
    image: "images/death.jpg", 
    choices: [
      { text: "Reincarnate", next: "start" },
    ]
  }
};


function showNode(nodeKey) {
  const node = storyNodes[nodeKey];
  storyElement.textContent = node.text;
  choicesElement.innerHTML = "";

  if (node.image) {
    imageElement.src = node.image;
    imageElement.style.display = "block";
  } else {
    imageElement.style.display = "none";
  }

  node.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.classList.add('choice-btn');
    button.addEventListener('click', () => showNode(choice.next));
    choicesElement.appendChild(button);
  });
}

// Start the game
showNode("start");






