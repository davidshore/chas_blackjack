import { gameParams } from "./gameParams.js";
import { Hand } from "./Hand.js";

export const resetGame = () => {

    gameParams.hands.length = 0;
    gameParams.dealerCards.length = 0;
    gameParams.hands.push(new Hand());

}