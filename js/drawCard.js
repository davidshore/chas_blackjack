import { createDeck } from "./createDeck.js";
import { gameParams } from "./gameParams.js";

export const drawCard = () => {

    if (gameParams.deck.length === 0) {
        gameParams.deck = createDeck();
    }

    let card = gameParams.deck.shift();

    return card;
}