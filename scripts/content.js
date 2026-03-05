function uwufy(text) {
  let uwuText = text.replace(/[rl]/g, 'w').replace(/[RL]/g, 'W');

  uwuText = uwuText.replace(/n([aeiou])/g, 'ny$1');
  uwuText = uwuText.replace(/N([aeiou])/g, 'Ny$1');
  uwuText = uwuText.replace(/N([AEIOU])/g, 'NY$1');

  uwuText = uwuText.replace(/ove/g, 'uv').replace(/OVE/g, 'UV');

  uwuText = uwuText.replace(/\b([A-Za-z])(\w+)\b/g, (match, p1, p2) => {
    if (Math.random() < 0.2) {
      return `${p1}-${p1}${p2}`;
    }
    return match;
  });

  const faces = [' (uwu)', ' owo', ' (´・ω・`)', ' >w<', ' :3', ' ~nyan'];
  uwuText = uwuText.replace(/[.!?]/g, (match) => {
    if (Math.random() < 0.5) {
      const randomFace = faces[Math.floor(Math.random() * faces.length)];
      return match + randomFace;
    }
    return match;
  });

  return uwuText;
}

// Example Usage:
const original = "Hello everyone! I really love programming in JavaScript. It is very nice.";
console.log(uwufy(original));

console.log("OwO, I can wowk with this page! UwU");

const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textNodes.nextNode()) {
    const node = textNodes.currentNode;
    node.textContent = uwufy(node.textContent);
}

