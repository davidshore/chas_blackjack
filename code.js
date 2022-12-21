import { cards } from "./cards.js";

const currentCards = cards;

const cardsElement = document.querySelector("#cards");
const dealerCardsElement = document.querySelector("#dealerCards");

const takeCardButton = document.querySelector("#takeCard");
const stopButton = document.querySelector("#stop");
const resultElement = document.querySelector("#result");

let sum = 0;
let dealerCardSum = 0;

function getRandomCard() {
  const randomNum = Math.floor(Math.random() * cards.length);
  const randomCard = currentCards.splice(randomNum, 1);

  return randomCard[0];
}

function createCard(parentElement) {
  const card = getRandomCard();

  const imgTag = document.createElement("img");
  imgTag.src = `images/${card.file}`;
  imgTag.width = "100";
  imgTag.height = "145";

  parentElement.appendChild(imgTag);
  return card;
}
function userTakeCard(event) {
  const card = createCard(cardsElement);
  sum += card.num;
  if (sum > 21) {
    resultElement.textContent = "You lost, over 21";
  }
}

function dealerTakeCards(event) {
  resultElement.textContent = "You stayed at " + sum;

  while (dealerCardSum < 17) {
    const card = createCard(dealerCardsElement);
    dealerCardSum += card.num;
  }

  if (dealerCardSum > 21) {
    resultElement.textContent = "You won, dealer got over 21 ";
  } else if (dealerCardSum >= sum) {
    resultElement.textContent = "You lost. Dealer won ";
  } else {
    resultElement.textContent = "You won";
  }
}

takeCardButton.addEventListener("click", userTakeCard);
stopButton.addEventListener("click", dealerTakeCards);
