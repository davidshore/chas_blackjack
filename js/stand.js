import { addCardElement } from "./addCardElement.js";
import { calculateSum } from "./calculateSum.js";
import { gameParams } from "./gameParams.js";

export const stand = () => {

    document.getElementById('splitButton').disabled = true;

    if (gameParams.hand < gameParams.playerCards.length - 1) {

        gameParams.hand++;

    } else {


        document.getElementById('hitButton').disabled = true;
        document.getElementById('standButton').disabled = true;
        document.getElementById('doubleButton').disabled = true;

        setTimeout(() => {

            document.getElementById('facedown').src = `./images/${gameParams.dealerCards[1].file}`

        }, gameParams.cardDelay);

        const dealerSum = calculateSum();
        const playerSum = calculateSum(true);

        console.log('dealerSum', dealerSum);
        console.log('playerSum', playerSum)

    }

}