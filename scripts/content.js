const uwufy = (text) => {
    return text
        .replace(/r/g, "w")
        .replace(/l/g, "w");
};

console.log("OwO, I can wowk with this page! UwU");

const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textNodes.nextNode()) {
    const node = textNodes.currentNode;
    node.textContent = uwufy(node.textContent);
}

