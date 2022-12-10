const categories = document.querySelector("#categories");
const numberOfItems = document.querySelectorAll(".item").length;

console.log("Number of categories:", numberOfItems);

for (let i = 1; i < categories.childNodes.length; i += 2) {
  const child = categories.childNodes[i];
  const heading = child.firstElementChild;
  const list = child.lastElementChild;
    
  console.log("Category:", heading.textContent);
  console.log("Elements:", list.children.length);
};
