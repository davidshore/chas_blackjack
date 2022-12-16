import { addCardElement } from "./addCardElement.js";
import { calculateSum } from "./calculateSum.js";
import { drawCard } from "./drawCard.js";
import { gameParams } from "./gameParams.js";


export const hit = () => {

    setTimeout(() => {
        gameParams.playerCards[gameParams.hand].push(drawCard());
        addCardElement(gameParams.playerCards[gameParams.hand][gameParams.playerCards[gameParams.hand].length - 1], true, gameParams.hand, gameParams.playerCards[gameParams.hand].length - 1);
        const playerSum = calculateSum(true);

        console.log('playerSum', playerSum)

        if (playerSum > 21) {

            gameParams.bet = 0;
            document.getElementById('gameMessage').innerHTML = 'You bust. Place another bet.'
            document.getElementById('hitButton').disabled = true;
            document.getElementById('betButton').disabled = false;
            document.getElementById('bet').innerHTML = `Current bet: $${gameParams.bet}`

        }
    }, gameParams.cardDelay);



}