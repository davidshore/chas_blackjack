import { addCardElement } from "./addCardElement.js";
import { calculateSum } from "./calculateSum.js";
import { drawCard } from "./drawCard.js";
import { gameParams } from "./gameParams.js";


export const hit = () => {

    document.getElementById('doubleButton').disabled = true;
    document.getElementById('splitButton').disabled = true;

    setTimeout(() => {
        gameParams.hands[gameParams.currentHand].cards.push(drawCard());
        addCardElement(gameParams.hands[gameParams.currentHand].cards[gameParams.hands[gameParams.currentHand].cards.length - 1], true, gameParams.currentHand, gameParams.hands[gameParams.currentHand].cards.length - 1);
        const playerSum = calculateSum(true);

        if (playerSum > 21) {

            document.getElementById('gameMessage').innerHTML = 'You bust. Place another bet.'
            document.getElementById('hitButton').disabled = true;
            document.getElementById('standButton').disabled = true;
            document.getElementById('betButton').disabled = false;
            document.getElementById('bet').innerHTML = `Current bet: $0`

        }
    }, gameParams.cardDelay);



}