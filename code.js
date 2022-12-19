import { cards } from "./cards.js";

const currentCards = cards;

const cardsElement = document.querySelector("#cards");
const dealerCardsElement = document.querySelector("#dealerCards");

const takeCardButton = document.querySelector("#takeCard");
const stopButton = document.querySelector("#stop");
const resultElement = document.querySelector("#result");

let sum = 0;
let dealerCardSum = 0;

// Delar i blackjack-spel
// - Ta ett slumpat kort
// - Hålla reda på summan av tagna kort ( variabel med användarens summa )
// - Om summan är över 21 så skriv på skärmen att du förlorade.
// - Stoppknapp - klar och dealern kan börja ta kort.
// - Dealerns kort - while loop - loopa till att dealern får över eller lika med 17
// - Håll reda på dealerns summa av kort för att vet när du ska stanna while-loopen
// // let dealerCardSum = 0
// // while( dealerCardSum <= 17 )
// - När while-loopen stannar - kolla vem som vann.

//1. Ta fram en slupad siffra mellan 0 och kortlekens längd.

// const randomNum1 = Math.random(); // 0 -> 0.99999
// const randomNum2 = randomNum1 * cards.length; // 0 -> 51.99999
// const randomNum3 = Math.floor(randomNum2); // 0 -> 51

function getRandomCard() {
  const randomNum = Math.floor(Math.random() * cards.length);

  // const randomCard = cards[randomNum];
  const randomCard = currentCards.splice(randomNum, 1);

  return randomCard[0];
}

function createCard(parentElement) {
  const card = getRandomCard(); // {num: ... , file: ...  };

  const imgTag = document.createElement("img"); // <img />
  imgTag.src = `images/${card.file}`; // <img src="..." />
  imgTag.width = "100";
  imgTag.height = "145";

  parentElement.appendChild(imgTag);
  return card;
}

// funktionen ska ta ett kort och uppdatera summan
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
