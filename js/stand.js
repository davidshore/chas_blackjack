import { addCardElement } from "./addCardElement.js";
import { gameParams } from "./gameParams.js";

export const stand = () => {

    document.getElementById('splitButton').disabled = true;
    document.getElementById('hitButton').disabled = true;
    document.getElementById('standButton').disabled = true;
    document.getElementById('doubleButton').disabled = true;

    setTimeout(() => {

        document.getElementById('facedown').src = `./images/${gameParams.dealerCards[1].file}`
        //addCardElement(gameParams.dealerCards[1]);

    }, gameParams.cardDelay);

}