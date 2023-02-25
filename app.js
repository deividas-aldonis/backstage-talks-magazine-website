const cardsContainer = document.querySelector(".cards__container");
const cards = document.querySelectorAll(".card");

let currentCard = 0;
let lastCard = cards.length - 1;

const removeWheelEventListener = () => {
  window.removeEventListener("wheel", scroll);
};

const attachWheelEventListener = () => {
  window.addEventListener("wheel", scroll);
};

const scroll = (e) => {
  // remove wheel event temporarily
  // so that user couldn't use wheel
  // while card container is transitioning
  removeWheelEventListener();
  const dir = Math.sign(e.deltaY);

  // prevent user from scrolling past first card
  if (currentCard === 0 && dir === -1) {
    attachWheelEventListener();
    return;
  }

  // prevent user from scrolling past last card
  if (currentCard === lastCard && dir === 1) {
    attachWheelEventListener();
    return;
  }

  dir === 1 ? currentCard++ : currentCard--;

  if (dir === 1) {
    cardsContainer.style.transform = `translateY(${-100 * currentCard}%)`;
  } else {
    cardsContainer.style.transform = `translateY(${-100 * currentCard}%)`;
  }
};

cardsContainer.addEventListener("transitionend", attachWheelEventListener);
window.addEventListener("wheel", scroll);
