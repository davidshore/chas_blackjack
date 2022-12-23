// You blackjack game code goes here
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




  function getRandomCard() {
    const randomNum = Math.floor(Math.random() * cards.length);
  
    
    const randomCard = currentCards.splice(randomNum, 1);// Stores the taken card and removes the card from the dealers deck
  
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
  
  // funktionen ska ta ett kort och uppdatera summan
  function userTakeCard() {
    const card = createCard(cardsElement);
    sum += card.num;
    if (sum > 21) {
      resultElement.textContent = "Över 21. Du förlorade";
      takeCardButton.removeEventListener("click", userTakeCard);
    }

  }
  
  function dealerTakeCards() {
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
    
    const restartBtn = document.createElement("button") // create a restart button
    restartBtn.textContent = "Restart?"
    resultElement.appendChild(restartBtn)
    restartBtn.addEventListener("click",restart)
    takeCardButton.removeEventListener("click", userTakeCard);
    stopButton.removeEventListener("click", dealerTakeCards);
  }
  function restart(){ // refresh page (restart game)
    location.reload()
  }
  
  
  takeCardButton.addEventListener("click", userTakeCard);
  stopButton.addEventListener("click", dealerTakeCards);
  
 



