const harmburger = document.querySelector(".menu-icon");
const lineOne = document.querySelector(".menu-line-one");
const lineTwo = document.querySelector(".menu-line-two");
const lineThree = document.querySelector(".menu-line-three");
const seeAnswer = document.querySelector(".see-answer");
const hideShowImg = document.querySelector(".hide-show-image");

const nav = document.querySelector("header nav");

harmburger.addEventListener("click", () => {
  console.log("hello");

  lineOne.classList.toggle("line-one");

  lineThree.classList.toggle("line-three");
  lineTwo.classList.toggle("line-two");
  nav.classList.toggle("nav-active");
});

seeAnswer.addEventListener("click", () => {
  console.log("answer");
  hideShowImg.classList.toggle("hide-show-image-active");
});
