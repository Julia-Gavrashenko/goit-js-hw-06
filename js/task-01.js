const itemAllEl = document.querySelectorAll(`.item`);
console.log(itemAllEl);

console.log(`Number of categories: ${itemAllEl.length}`);

const items = [];

for (let i = 0; i < itemAllEl.length; i += 1) {
    const item = itemAllEl[i];
    items.push(i);
}

console.log(items);