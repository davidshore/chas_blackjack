import { gameParams } from "./gameParams.js"


export const calculateSum = (player) => {

    let cards;

    if (player) {

        cards = gameParams.playerCards[gameParams.hand];

    } else {

        cards = gameParams.dealerCards;

    }

    let sum = 0;
    let acePresent = false;

    for (let i = 0; i < cards.length; i++) {

        if (cards[i].num === 1) acePresent = true;

        sum += cards[i].num;

    }

    if (acePresent) {

        const sum2 = sum + 10;

        if (sum2 <= 21) {

            return sum2;

        }

    }

    return sum;

}