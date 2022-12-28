import { cards } from './cards.js';

export const createDeck = () => {

    const tempCards = [...cards, ...cards, ...cards, ...cards, ...cards, ...cards];
    const tempLength = tempCards.length;
    const deck = [];

    for (let i = 0; i < tempLength; i++) {

        const randomNumber = Math.floor(Math.random() * tempCards.length);
        deck.push(tempCards[randomNumber]);
        tempCards.splice(randomNumber, 1);

    }

    return deck;
}