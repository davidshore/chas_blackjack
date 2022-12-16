// You blackjack game code goes here
// knappar
import { cards } from "./cards.js";

const currentCards = cards;
const cardsElement = document.querySelector("#cards");
const dealerCardsElement = document.querySelector("#dealerCards");

const takeCardButton = document.querySelector("#takeCard");
const resultElement = document.querySelector("#result");

let sum = 0;
let dealerCardSum = 0;

const cardContainer = document.querySelector("#cards");
const card = document.createElement("img");
card.src = `images/${cards[1]}`;

//1. Ta fram en slumpad siffra mellan 0 och kortens längd
/* const randomNum1 = Math.random(); // 0-0,9999  blir inte 1.
const randomNum2 = randomNum1 * card.length; // 0 - så många som finns. (heltal)
const randomNum3 = Math.floor(randomNum2); */

function getRandomCard() {
  const randomNum = Math.floor(Math.random() * cards.length);
  //const randomCard = cards[randomNum];
  const randomCard = currentCards.splice(randomNum, 1);

  return randomCard[0];

  //console.log("randomCard", randomCard);
}

function createCard(event) {
  const card = getRandomCard();

  const imgTag = document.createElement("img");
  imgTag.src = `images/${card.file}`;
  imgTag.width = "100";
  imgTag.height = "145";

  cardsElement.appendChild(imgTag);
  return card;
}

// functionen ska ta ett kort och uppdatera summan.
function userTakeCard(event) {
  const card = createCard(cardsElement);
  sum += card.num;
  if (sum > 21) {
    resultElement.textContent = "Över 21, du förlorade!";
  }
}

function dealerTakeCard(event) {
  resultElement.textContent = "Du stannade på " + sum;

  while (dealerCardSum < 17) {
    const card = createCard(dealerCardsElement);
    dealerCardSum += card.num;
  }

  if (dealerCardSum > 21) {
    resultElement.textContent = "Dealern fick över 21 du vann ";
  } else if (dealerCardSum >= sum) {
    resultElement.textContent =
      "Dealern hade fler eller lika många poäng. Du förlorade ";
  } else {
    resultElement.textContent = "Du fick fler poäng. Du vann";
  }
}

takeCardButton.addEventListener("click", userTakeCard);
stopButton.addEventListener("click", dealerTakeCard);
