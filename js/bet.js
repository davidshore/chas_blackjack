import { gameParams } from "./gameParams.js";
import { firstRound } from "./firstRound.js";

export const bet = (e) => {

    gameParams.playerCardContainers.length = 0;
    document.getElementById('playerCards').innerHTML = '';
    document.getElementById('dealerCards').innerHTML = '';

    const betInput = document.getElementById('betSum');
    const playerBet = parseInt(betInput.value);

    if (gameParams.playerMoney <= 0) {

        document.getElementById('gameMessage').innerHTML = 'You can´t play, you´re broke!'
        betInput.value = 0;
        return;

    } else if (playerBet > gameParams.playerMoney) {

        gameParams.bet[0] = gameParams.playerMoney;
        betInput.value = gameParams.playerMoney;

    } else {

        gameParams.bet[0] = playerBet;

    }
    gameParams.playerMoney -= gameParams.bet[0];
    document.getElementById('bet').innerHTML = `Current bet: $${gameParams.bet[0]}`
    document.getElementById('bankroll').innerHTML = `Bankroll: $${gameParams.playerMoney}`
    document.getElementById('gameMessage').innerHTML = ``
    e.currentTarget.disabled = true;
    firstRound();

}