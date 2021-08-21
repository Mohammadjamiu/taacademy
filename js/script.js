const harmburger = document.querySelector(".menu-icon");
const lineOne = document.querySelector(".menu-line-one");
const lineTwo = document.querySelector(".menu-line-two");
const lineThree = document.querySelector(".menu-line-three");

const nav = document.querySelector("header nav");

harmburger.addEventListener("click", () => {
  console.log("hello");

  lineOne.classList.toggle("line-one");

  lineThree.classList.toggle("line-three");
  lineTwo.classList.toggle("line-two");
  nav.classList.toggle("nav-active");
});

// const tocIcon = document.querySelector(".toc-icon");
// const lcaToc = document.querySelector(".lca-toc");
// tocIcon.addEventListener("click", () => {
//   console.log("yes");
//   lcaToc.classList.toggle('toc-nav-active');
// });


