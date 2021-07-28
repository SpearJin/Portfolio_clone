"use strict";

// *** Navbar scroll fixed ***
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("navbar-dark");
  }
});

// *** Click move to Navbarmenu ***
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  scrollInto(link);
  navbarMenu.classList.remove("open");
});

// *** Navbar ToggleBtn ***
const toggleBtn = document.querySelector(".navbar__toggle-btn");
toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// *** Contact button move to contact link ***
const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", (e) => {
  scrollInto("#contact");
});

function scrollInto(selected) {
  const scrollTo = document.querySelector(selected);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// *** Home background slowly opacity change ***
const homeContainer = document.querySelector(".home__container");
const homeHeight = homeContainer.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// *** Arrow click move to home-link ***
const arrowUp = document.querySelector(".arrow-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollInto("#home");
});

// *** Projects filterling ***
const workContainer = document.querySelector(".work__categories");
const workProjects = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workContainer.addEventListener("click", (e) => {
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  const filter = target.dataset.filter;

  const workSelected = document.querySelector(".category__btn.selected");
  workSelected.classList.remove("selected");
  target.classList.add("selected");

  if (filter === null) {
    return;
  }
  workProjects.classList.add("ani-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    workProjects.classList.remove("ani-out");
  }, 300);
});
