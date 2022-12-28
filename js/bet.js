import { gameParams } from "./gameParams.js";
import { firstRound } from "./firstRound.js";
import { resetGame } from "./resetGame.js";

export const bet = (e) => {

    resetGame();

    document.getElementById('playerCards').innerHTML = '';
    document.getElementById('dealerCards').innerHTML = '';

    const betInput = document.getElementById('betSum');
    const playerBet = parseInt(betInput.value);

    if (gameParams.playerMoney <= 0) {

        document.getElementById('gameMessage').innerHTML = 'You can´t play, you´re broke!'
        betInput.value = 0;
        return;

    } else if (playerBet > gameParams.playerMoney) {

        gameParams.hands[gameParams.currentHand].bet = gameParams.playerMoney;
        betInput.value = gameParams.playerMoney;

    } else {

        gameParams.hands[gameParams.currentHand].bet = playerBet;

    }
    gameParams.playerMoney -= gameParams.hands[gameParams.currentHand].bet;
    document.getElementById('bet').innerHTML = `Current bet: $${gameParams.hands[gameParams.currentHand].bet}`;
    document.getElementById('bankroll').innerHTML = `Bankroll: $${gameParams.playerMoney}`;
    document.getElementById('gameMessage').innerHTML = ``;
    e.currentTarget.disabled = true;
    firstRound();

}