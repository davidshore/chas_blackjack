import { calculateSum } from "./calculateSum.js";
import { gameParams } from "./gameParams.js";

export const calculateWinner = () => {

    let win = false;
    const dealerSum = calculateSum();


    if (dealerSum > 21) {

        document.getElementById('gameMessage').innerHTML = 'Dealer bust, you win!';
        win = true;


    } else {

        const playerSum = calculateSum(true);

        if (playerSum > dealerSum) {

            document.getElementById('gameMessage').innerHTML = 'You win! Place another bet.';
            win = true;

        } else if (playerSum === dealerSum) {

            document.getElementById('gameMessage').innerHTML = 'It´s a draw. Place another bet.';
            gameParams.playerMoney += gameParams.hands[gameParams.currentHand].bet;
            document.getElementById('betButton').disabled = false;

        } else {

            document.getElementById('gameMessage').innerHTML = 'You lose. Place another bet.';
            document.getElementById('bankroll').innerHTML = `Bankroll: ${gameParams.playerMoney}`;
            document.getElementById('bet').innerHTML = `Current bet: 0`;
            document.getElementById('betButton').disabled = false;

        }

    }

    if (win) {

        gameParams.playerMoney += gameParams.hands[gameParams.currentHand].bet * gameParams.payoutMultiplier;
        document.getElementById('bankroll').innerHTML = `Bankroll: ${gameParams.playerMoney}`;
        document.getElementById('bet').innerHTML = `Current bet: 0`;
        document.getElementById('betButton').disabled = false;

    }

}



