const stars = document.querySelectorAll("#img-stelle > img");
let clicked = false;
const btnNext = document.querySelector("#more-info");
btnNext.disabled = true;

const arrStelle = document.querySelectorAll("#img-stelle img");

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
  console.log(event.relatedTarget.children);
  element.classList.add("selected-stars");
  setStarPrev(element);
  remStarNext(element);
};

const setStar = (event) => {
  let element = event.target;
  stars.forEach((elm) => elm.classList.remove("clicked-star"));
  element.classList.add("clicked-star");
  clicked = true;
  btnNext.disabled = false;
  document.getElementById("more-info").classList.add("universal-style-btn-slc");
};

stars.forEach((elm) => (elm.onmouseover = colorStar));
stars.forEach((elm) => (elm.onclick = setStar));

document.querySelector("#img-stelle").onmouseleave = unColorStar;
