import { cards } from "./cards.js";
// You blackjack game code goes here
const hitButton = document.querySelector(".hitButton");
const stayButton = document.querySelector(".stayButton");
const dealButton = document.querySelector(".dealButton");
const playerCards = document.querySelector(".playerCards");
const dealerCards = document.querySelector(".dealerCards");

const playerSum = document.querySelector(".playerSum");
const dealerSum = document.querySelector(".dealerSum");
const playerScore = document.querySelector(".playerScore");
const dealerScore = document.querySelector(".dealerScore");
let playerAces;
let dealerAces;

let deck;

function createDeck() {
    deck = cards.filter((card) => {
        if (card.file[card.file.length - 5] != 2) {
            return card;
        }
    });
}

function takeCard() {
    const card = deck[Math.floor(Math.random() * deck.length)];
    return card;
}

dealButton.addEventListener("click", startGame);

// DEALER <= 17 ?

function startGame() {
    dealButton.classList.toggle("hide");
    createDeck();
    playerCards.innerHTML = ``;
    dealerCards.innerHTML = ``;
    playerSum.innerHTML = 0;
    dealerSum.innerHTML = 0;
    playerAces = 0;
    dealerAces = 0;
    playerTakeCard();
    dealerTakeCard();
    hitButton.addEventListener("click", playerTakeCard);
    stayButton.addEventListener("click", dealerTurn);
}

function playerTakeCard() {
    let card = takeCard();
    let img = document.createElement("img");
    img.src = "images/" + card.file;
    playerCards.appendChild(img);
    if (card.num == 1) {
        console.log("pulled ace");
        playerSum.innerHTML = parseInt(playerSum.innerHTML) + 11;
        playerAces++;
    } else {
        playerSum.innerHTML = parseInt(playerSum.innerHTML) + card.num;
    }
    deck.splice(deck.indexOf(card), 1);
    if (playerSum.innerHTML > 21) {
        if (playerAces != 0) {
            console.log("Aces saving player from bust");
            playerSum.innerHTML =
                parseInt(playerSum.innerHTML) - playerAces * 10;
            playerAces = 0;
            return;
        }
        hitButton.removeEventListener("click", playerTakeCard);
        stayButton.removeEventListener("click", dealerTurn);
        dealerScore.innerHTML++;
        alert("BUSTED!");
        dealButton.classList.toggle("hide");
    }
    if (playerSum.innerHTML == 21) {
        hitButton.removeEventListener("click", playerTakeCard);
        stayButton.removeEventListener("click", dealerTurn);
        playerScore.innerHTML++;
        alert("BlackJack!");
        dealButton.classList.toggle("hide");
    }
}

function dealerTakeCard() {
    let card = takeCard();
    let img = document.createElement("img");
    img.src = "images/" + card.file;
    dealerCards.appendChild(img);
    if (card.num == 1) {
        console.log("pulled ace");
        dealerSum.innerHTML = parseInt(dealerSum.innerHTML) + 11;
        dealerAces++;
    } else {
        dealerSum.innerHTML = parseInt(dealerSum.innerHTML) + card.num;
    }
    deck.splice(deck.indexOf(card), 1);
}

function dealerTurn() {
    hitButton.removeEventListener("click", playerTakeCard);
    stayButton.removeEventListener("click", dealerTurn);
    if (parseInt(dealerSum.innerHTML) < parseInt(playerSum.innerHTML)) {
        //console.log(dealerSum.innerHTML, "<=", playerSum.innerHTML);
        while (parseInt(dealerSum.innerHTML) <= 17) {
            dealerTakeCard();
            if (parseInt(dealerSum.innerHTML) > 21 && dealerAces != 0) {
                console.log("ace saving dealer");
                dealerSum.innerHTML =
                    parseInt(dealerSum.innerHTML) - dealerAces * 10;
            }
            if (
                parseInt(dealerSum.innerHTML) >= parseInt(playerSum.innerHTML)
            ) {
                console.log(dealerSum.innerHTML, ">=", playerSum.innerHTML);
                console.log("this should break");
                break;
            }
        }
    }
    if (parseInt(dealerSum.innerHTML) > 21) {
        playerScore.innerHTML++;
        alert("Dealer busted");
    } else if (parseInt(dealerSum.innerHTML) >= parseInt(playerSum.innerHTML)) {
        dealerScore.innerHTML++;
        alert("Dealer won");
    } else {
        playerScore.innerHTML++;
        alert("You won");
    }
    dealButton.classList.toggle("hide");
}

console.log(deck);
