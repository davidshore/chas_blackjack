// Your blackjack game code goes here

import { cards } from "./cards.js";

const currentCards = cards;

const cardsElement = document.querySelector("#cards");
const dealerCardsElement = document.querySelector("#dealerCards");

const takeCardButton = document.querySelector("#takecard");
const stopButton = document.querySelector("#stop");
const resultElement = document.querySelector("#result");

let sum = 0;
let dealerCardSum = 0;

//-Ta ett slumpat kort

//-Hålla reda på summan av tagna kort (variabel med användarens summa)

//-Om summan är över 21 så skriv på skärmen att du förlorade

//-Stoppknapp- Klar och dealern kan börja ta kort.

//-Dealerns kort - while loop - loopa till dealern får över eller lika med 17

//-Håll reda på dealern summa av kort för att veta när du ska stanna while- loopen
//let dealerCardSum = 0
// while(dealerCardSum <= 17 )

//- När while-loopen stannar - kolla vem som vann.

//1. Ta fram en slumpad siffra mellan 0 och kortlekens längd.
//const randomNum1 = Math.random(); // 0 -> 0.99999
//const randomNum2 = randomNum1 * cards.length; // 0 -> 51.9999
//const randomNum3 = Math.floor(randomNum2); //0 -> 51

function getRandomCard() {
  const randomNum = Math.floor(Math.random() * cards.length);
  console.log("randomNum", randomNum);

  // const randomCard = cards[randomNum];
  const randomCard = currentCards.splice(randomNum, 1);
  console.log("randomCard", randomCard);

  return randomCard[0];
}

function createCard(parentElement) {
  const card = getRandomCard();

  const imgTag = document.createElement("img");
  imgTag.src = `images/${card.file}`; //<img src="..." />
  imgTag.width = "75";
  imgTag.height = "130";

  parentElement.appendChild(imgTag);
  return card;
}

// funktionen ska ta ett kort och uppdatera summan
/*function userTakeCard(event) {
  const card = createCard();
  sum += card.num;
  console.log("card", card);
  console.log("sum", sum);
}*/

function userTakeCard(event) {
  const card = createCard(cardsElement);
  sum += card.num;
  if (sum > 21) {
    resultElement.textContent = "Över 21. Du förlorade";
  }
}

function dealerTakeCards(event) {
  resultElement.textContent = "Du stannade på " + sum;

  while (dealerCardSum < 17) {
    const card = createCard(dealerCardsElement);
    dealerCardSum += card.num;
  }
  if (dealerCardSum > 21) {
    resultElement.textContent = "Dealer fick över 21, du vann";
  } else if (dealerCardSum >= sum) {
    ("Dealern hade fler eller lika många poäng. Du förlorade ");
  } else {
    resultElement.textContent = "Du fick fler poäng. Du vann";
  }
}

takeCardButton.addEventListener("click", userTakeCard);
stopButton.addEventListener("click", dealerTakeCards);

//const cardsContainer = document.querySelector("#cards");

//const cardImage = document.querySelector("img");
//cardImage.src = `images/${filename}`;
//cardImage.src = `images/${cards[1].file}`;

//const cardImage = document.createElement("img");
//cardImage.src = `images/${filename}`;

//cardsContainer.appendChild(cards);
