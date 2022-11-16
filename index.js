// Const init

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
const menu = document.querySelector(".icons");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".content");
const icon1 = document.querySelector(".menuIcon1");
const icon2 = document.querySelector(".menuIcon2");
const title = document.getElementById("title");
const login = document.querySelector(".loginIcon");
const loginContainer = document.querySelector(".loginContainer");

// Variables init

let sectionIndex = 0;

// Banner functions

document.querySelectorAll(".controls li").forEach((indicator, ind) => {
  indicator.addEventListener("click", () => {
    sectionIndex = ind;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });
});

leftArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rightArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

// Menu + Login functions

document.addEventListener("click", (a) => {
  if (a.target.closest(".icons")) {
    sidebar.classList.toggle("hide");
    container.classList.toggle("blurry");
    title.classList.toggle("blurry");
    icon1.classList.toggle("brighter1");
    icon2.classList.toggle("brighter2");
    menu.classList.toggle("topAndLeft");
  } else if (a.target.closest(".loginIcon")) {
    loginContainer.classList.toggle("appear");
    container.classList.toggle("blurry");
    title.classList.toggle("blurry");
  } else if (
    !a.target.closest(".icons") &&
    !a.target.closest(".loginIcon") &&
    !a.target.closest(".loginContainer")
  ) {
    sidebar.classList.remove("hide");
    container.classList.remove("blurry");
    title.classList.remove("blurry");
    icon1.classList.remove("brighter1");
    icon2.classList.remove("brighter2");
    menu.classList.remove("topAndLeft");
    loginContainer.classList.remove("appear");
  }
});
