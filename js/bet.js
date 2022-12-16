import { gameParams } from "./gameParams.js";
import { firstRound } from "./firstRound.js";

export const bet = (e) => {

    gameParams.playerCardContainers.length = 0;
    document.getElementById('playerCards').innerHTML = '';
    document.getElementById('dealerCards').innerHTML = '';

    const betInput = document.getElementById('betSum').value;
    const playerBet = parseInt(betInput);

    if (gameParams.playerMoney <= 0) {

        document.getElementById('gameMessage').innerHTML = 'You can´t play, you´re broke!'
        betInput = 0;
        return;

    } else if (playerBet > gameParams.playerMoney) {

        gameParams.bet = gameParams.playerMoney;
        betInput = gameParams.playerMoney;

    } else {

        gameParams.bet = playerBet;

    }
    gameParams.playerMoney -= gameParams.bet;
    document.getElementById('bet').innerHTML = `Current bet: $${gameParams.bet}`
    document.getElementById('bankroll').innerHTML = `Bankroll: $${gameParams.playerMoney}`
    document.getElementById('gameMessage').innerHTML = ``
    e.currentTarget.disabled = true;
    firstRound();

}