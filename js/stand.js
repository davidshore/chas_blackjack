import { calculateSum } from "./calculateSum.js";
import { calculateWinner } from "./calculateWinner.js";
import { dealerHit } from "./dealerHit.js";
import { gameParams } from "./gameParams.js";

export const stand = () => {

    document.getElementById('splitButton').disabled = true;

    if (gameParams.hand < gameParams.playerCards.length - 1) {

        gameParams.hand++;

    } else {


        document.getElementById('hitButton').disabled = true;
        document.getElementById('standButton').disabled = true;
        document.getElementById('doubleButton').disabled = true;
        document.getElementById('splitButton').disabled = true;

        setTimeout(() => {

            document.getElementById('facedown').src = `./images/${gameParams.dealerCards[1].file}`;

            const dealerSum = calculateSum();
            const playerSum = calculateSum(true);

            if (dealerSum < 17) {

                dealerHit();

            } else {

                calculateWinner();

            }

        }, gameParams.cardDelay);



    }

}