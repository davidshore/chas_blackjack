import { cards } from "./cards.js";
// You blackjack game code goes here
let sum = 0;
let dealerCardSum = 0;

const takeCard = document.querySelector("#takeCard");
const dealerCards = document.querySelector("#dealerCards");
const cardsElement = document.querySelector("#cardsELement");
const resultElement = document.querySelector("#result");
const stopElement = document.querySelector("#stop");

function randomCard() {
  const randNum = Math.floor(Math.random() * cards.length);
  const chosenCard = cards[randNum];
  return chosenCard;
}

takeCard.addEventListener("click", userTakeCard);
stopElement.addEventListener("click", dealerTakeCards);

function userTakeCard(e) {
  if (sum > 21) {
    return;
  }
  const card = randomCard();
  const cardImage = document.createElement("img");
  cardImage.setAttribute("class", "cardImage");
  cardImage.src = `images/${card.file}`;

  cardsElement.appendChild(cardImage);
  sum += card.num;
  if (sum > 21) {
    resultElement.textContent = "Över 21, du förlorade.";
  }
}

function dealerTakeCards(event) {
  resultElement.textContent = "Du stannade på " + sum + ".";

  while (dealerCardSum < 17) {
    const card = randomCard();
    const cardImage = document.createElement("img");
    cardImage.setAttribute("class", "cardImage");
    cardImage.src = `images/${card.file}`;
    dealerCards.appendChild(cardImage);
    dealerCardSum += card.num;
  }
  if (dealerCardSum > 21) {
    resultElement.textContent = "Dealern fick över 21, du vann!";
  } else if (dealerCardSum >= sum) {
    resultElement.textContent =
      "Dealern hade fler eller lika många poäng. Du förlorade. ";
  } else if (sum > 21) {
    resultElement.textContent = "Du stannade på över 21, du förlorade.";
  } else {
    resultElement.textContent = "Du fick fler poäng. Du vann!";
  }
}
