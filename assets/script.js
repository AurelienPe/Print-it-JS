"use strict";

// ********** CONSTANTS **********

const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

const arrowLeft   = document.querySelector(".arrow-left");
const arrowRight  = document.querySelector(".arrow-right");
const slide       = document.querySelector(".banner-img");
const paragraph   = document.querySelector(".paragraph");
const dots        = document.querySelector(".dots");

// ********** VARIABLES **********

let index = 0;

// ********** FUNCTIONS **********

/**
 * ? CHANGE SLIDE
 * * Updates the slide and content based on the given index.
 */
function changeSlide(index) {
  const allDots       = dots.children;
  slide.src           = "./assets/images/slideshow/" + slides[index].image;
  paragraph.innerHTML = slides[index].tagLine;

  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.toggle("dot-selected", i === index);
  }
}

/**
 * ? SLIDE LEFT
 * * Slides the content to the left.
 */
function slideLeft() {
  index = (index - 1 + slides.length) % slides.length;
  changeSlide(index);
}

/**
 * ? SLIDE RIGHT
 * * Slides the current slide to the right.
 */
function slideRight() {
  index = (index + 1) % slides.length;
  changeSlide(index);
}

/**
 * ? ADD LISTENERS
 * * Adds event listeners to the arrowLeft and arrowRight elements.
 */
function addListeners() {
  arrowLeft.addEventListener('click', slideLeft);
  arrowRight.addEventListener('click', slideRight);
}

/**
 * ? CREATE DOTS
 * * Creates dots for each slide and adds event listeners for click events.
 */
function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");

    dot.classList.add("dot");
    dot.addEventListener("click", () => changeSlide(i));

    if (i === index) dot.classList.add("dot-selected");
    dots.appendChild(dot);
  }
}

// ********** MAIN CODE **********

createDots();
addListeners();
