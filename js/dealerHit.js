import { addCardElement } from "./addCardElement.js";
import { calculateSum } from "./calculateSum.js";
import { calculateWinner } from "./calculateWinner.js";
import { drawCard } from "./drawCard.js";
import { gameParams } from "./gameParams.js";

export const dealerHit = () => {

    setTimeout(() => {

        gameParams.dealerCards.push(drawCard());
        addCardElement(gameParams.dealerCards[gameParams.dealerCards.length - 1]);

        let win = false;
        const dealerSum = calculateSum();

        if (dealerSum < 17) {

            dealerHit();


        } else {

            calculateWinner();

        }

    }, gameParams.cardDelay);

}