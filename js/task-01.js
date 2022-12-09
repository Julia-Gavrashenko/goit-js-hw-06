const itemsEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(function (item) {
  const itemFirstEl = item.firstElementChild.textContent;
  const itemLastEl = item.lastElementChild;
  const childrenEl = itemLastEl.children.length;

  console.log(`Category: ${itemFirstEl}`);
  console.log(`Elements: ${childrenEl}`);
});
