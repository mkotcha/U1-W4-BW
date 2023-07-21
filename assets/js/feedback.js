const stars = document.querySelectorAll("#img-stelle img");
let clicked = false;
const btnNext = document.querySelector("#send-feedback");
btnNext.disabled = true;
const arrStelle = document.querySelectorAll("#img-stelle img");
let votoStar = 0;

remStarNext = element => {
  while ((element = element.nextElementSibling)) {
    element.classList.remove("selected-stars");
  }
};

setStarPrev = element => {
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
    stars.forEach(elm => elm.classList.remove("selected-stars"));
  }
};

const colorStar = event => {
  let element = event.target;
  element.classList.add("selected-stars");
  console.log(element);
  setStarPrev(element);
  remStarNext(element);
};

const setStar = event => {
  let element = event.target;
  stars.forEach(elm => elm.classList.remove("clicked-star"));
  element.classList.add("clicked-star");
  clicked = true;
  btnNext.disabled = false;
  document.getElementById("send-feedback").classList.add("universal-style-btn-slc");
};

stars.forEach(elm => (elm.onmouseover = colorStar));
stars.forEach(elm => (elm.onclick = setStar));

document.querySelector("#img-stelle").onmouseleave = unColorStar;

const goToPageFeedback = event => {
  event.preventDefault();

  for (let i = 0; i < arrStelle.length; i++) {
    for (let j = 0; j < arrStelle[i].classList.length; j++) {
      if (arrStelle[i].classList[j] === "clicked-star") {
        votoStar = i + 1;
      }
    }
  }

  let UserFeedback = "";
  UserFeedback = document.querySelector("form input").value;

  document.getElementById("feedback").style.display = "none";

  switch (votoStar) {
    case 1:

    case 2:

    case 3:

    case 4:

    case 5:

    case 6:
      document.getElementById("NoGoodFeedback").style.display = "block";
      break;

    case 7:

    case 8:
      document.getElementById("MidGoodFeedback").style.display = "block";

      break;
    case 9:

    case 10:
      document.getElementById("VeryGoodFeedback").style.display = "block";

      break;
  }
};

document.querySelector("form").onsubmit = goToPageFeedback;
