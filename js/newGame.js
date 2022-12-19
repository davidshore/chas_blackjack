import { createDeck } from "./createDeck.js"
import { gameParams } from "./gameParams.js"

export const newGame = () => {
    gameParams.deck = createDeck();
    gameParams.playerMoney = 1000;
    gameParams.playerBlackjack = false;
    gameParams.playerCards.length = 0;
    gameParams.playerSum = 0;
    gameParams.dealerBlackjack = false;
    gameParams.dealerCards.length = 0;
    gameParams.dealerSum = 0;
    gameParams.playerCardContainers.length = 0;
    gameParams.bet[0] = 0;
    gameParams.double = false;
    document.getElementById('betButton').disabled = false;
    document.getElementById('hitButton').disabled = true;
    document.getElementById('standButton').disabled = true;
    document.getElementById('splitButton').disabled = true;
    document.getElementById('doubleButton').disabled = true;
    document.getElementById('gameMessage').innerHTML = 'Place a bet';
    document.getElementById('bankroll').innerHTML = 'Bankroll: $1000';
    document.getElementById('bet').innerHTML = 'Current bet: $0';
    document.getElementById('playerCards').innerHTML = '';
    document.getElementById('dealerCards').innerHTML = '';


}