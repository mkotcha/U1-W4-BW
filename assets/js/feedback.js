const stars = document.querySelectorAll("#img-stelle > img");
let clicked = false;

const unColorStar = () => {
  if (clicked) {
    let element = document.querySelector(".clicked-star");
    while ((element = element.nextElementSibling)) {
      element.classList.remove("selected-stars");
    }
    element = document.querySelector(".clicked-star");
    while ((element = element.previousElementSibling)) {
      element.classList.add("selected-stars");
    }
  } else {
    stars.forEach(elm => elm.classList.remove("selected-stars"));
  }
};

const colorStar = event => {
  unColorStar();
  let element = event.target;
  element.classList.add("selected-stars");
  while ((element = element.previousElementSibling)) {
    element.classList.add("selected-stars");
  }
  element = event.target;
  while ((element = element.nextElementSibling)) {
    element.classList.remove("selected-stars");
  }
};

const setStar = event => {
  let element = event.target;
  stars.forEach(elm => elm.classList.remove("clicked-star"));
  stars.forEach(elm => elm.classList.remove("selected-stars"));
  element.classList.add("clicked-star");
  clicked = true;
  while ((element = element.previousElementSibling)) {
    element.classList.add("selected-stars");
  }
};

stars.forEach(elm => (elm.onmouseover = colorStar));
stars.forEach(elm => (elm.onclick = setStar));

document.querySelector("#img-stelle").onmouseleave = unColorStar;
