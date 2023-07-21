const stars = document.querySelectorAll("#img-stelle > img");
let clicked = false;
const btnNext = document.querySelector("#send-feedback");
btnNext.disabled = true;

remStarNext = (element) => {
  while ((element = element.nextElementSibling)) {
    element.classList.remove("selected-stars");
  }
};

setStarPrev = (element) => {
  while ((element = element.previousElementSibling)) {
    element.classList.add("selected-stars");
  }
};

const unColorStar = () => {
  if (clicked) {
    let element = document.querySelector(".clicked-star");
    setStarPrev(element);
    remStarNext(element);
  } else {
    stars.forEach((elm) => elm.classList.remove("selected-stars"));
  }
};

const colorStar = (event) => {
  let element = event.target;
  element.classList.add("selected-stars");
  setStarPrev(element);
  remStarNext(element);
};

const arrStelle = document.querySelectorAll("#img-stelle img");
let result = 0;
const setStar = (event) => {
  let element = event.target;
  stars.forEach((elm) => elm.classList.remove("clicked-star"));
  element.classList.add("clicked-star");
  clicked = true;
  btnNext.disabled = false;
  document
    .getElementById("send-feedback")
    .classList.add("universal-style-btn-slc");

  for (let i = 0; i < arrStelle.length; i++) {
    for (let j = 0; j < arrStelle[i].classList.length; j++) {
      if (arrStelle[i].classList[j] === "clicked-star") {
        result = i + 1;
      }
    }
  }
};

stars.forEach((elm) => (elm.onmouseover = colorStar));
stars.forEach((elm) => (elm.onclick = setStar));

document.querySelector("#img-stelle").onmouseleave = unColorStar;

const goTo_pageFeedback = (event) => {
  event.preventDefault();
  console.log(result);

  let UserFeedback = "";
  UserFeedback = document.querySelector("form input").value;
  console.log(UserFeedback);

  if (result >= 1 && result <= 6) {
    to_NoGoodFeedback();
  } else if (result > 6 && result <= 8) {
    to_MidGoodFeedback();
  } else {
    to_VeryGoodFeedback();
  }
};

document.querySelector("form").onsubmit = goTo_pageFeedback;

const to_NoGoodFeedback = () => {
  document.getElementById("feedback").style.display = "none";
  document.getElementById("NoGoodFeedback").style.display = "block";
};
const to_MidGoodFeedback = () => {
  document.getElementById("feedback").style.display = "none";
  document.getElementById("MidGoodFeedback").style.display = "block";
};
const to_VeryGoodFeedback = () => {
  document.getElementById("feedback").style.display = "none";
  document.getElementById("VeryGoodFeedback").style.display = "block";
};
