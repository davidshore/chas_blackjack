// You blackjack game code goes here
import cards from "./cards.js";

const displayPlayerPoints = document.getElementById("playerPoints");
const displayPlayersCards = document.getElementById("displayPlayersCards");
const displayDealersCards = document.getElementById("displayDealersCards");
const displayDealerPoints = document.getElementById("dealerPoints");
const newCardBtn = document.getElementById("newCardBtn");
const stopBtn = document.getElementById("stopBtn");
let cardsArr = cards;
let playerUsedCards = [];
let dealerUsedCards = [];

newCardBtn.addEventListener("click", function () {
  newCard();
});
stopBtn.addEventListener("click", function () {
  stopGame();
});

function newCard() {
  let index = randomNumber(0, cardsArr.length);
  let playersCard = cardsArr[index];
  playerUsedCards.push(playersCard);
  cardsArr = cardsArr.filter(function (card) {
    return card.file != cards[index].file;
  });
  let points = displayPlayerPoints.innerHTML;
  let result = JSON.parse(points) + playersCard.num;
  displayPlayerPoints.innerHTML = result;

  let index2 = randomNumber(0, cardsArr.length);
  let dealersCard = cardsArr[index2];
  dealerUsedCards.push(dealersCard);
  cardsArr = cardsArr.filter(function (card) {
    return card.file != cards[index2].file;
  });
  let dealerPoints = displayDealerPoints.innerHTML;
  let dealerResult = JSON.parse(dealerPoints) + dealersCard.num;
  displayDealerPoints.innerHTML = dealerResult;
  console.log("dealersCard: ", dealersCard);
  console.log("dealerResult: ", dealerResult);

  let img = document.createElement("img");
  img.src = `images/${playersCard.file}`;
  img.alt = "missing card";
  displayPlayersCards.append(img);

  let img2 = document.createElement("img");
  img2.src = `images/${dealersCard.file}`;
  img2.alt = "missing card";
  displayDealersCards.append(img2);

  if (result > 21) {
    alert(`you louse. player has ${result} and dealer has ${dealerResult}`);
    location.reload();
  }
  if (result === 21) {
    alert(`you Win. player has 21`);
    location.reload();
  }

}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopGame() {
  let playerPoints = JSON.parse(displayPlayerPoints.innerHTML);
  let dealerPoints = JSON.parse(displayDealerPoints.innerHTML);
  if (dealerPoints > 21 || dealerPoints < playerPoints) {
    alert(`You win! player has ${playerPoints} and dealer has ${dealerPoints}`);
  } else {
    alert(`You louse. player has ${playerPoints} and dealer has ${dealerPoints}`);
  }
  location.reload();
}
