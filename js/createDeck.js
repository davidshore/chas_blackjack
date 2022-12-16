import { cards } from './cards.js';

export const createDeck = () => {

    // Get 6 decks of cards

    const tempCards = [...cards, ...cards, ...cards, ...cards, ...cards, ...cards];
    const tempLength = tempCards.length;
    const deck = [];

    // Shuffle cards and put in deck

    for (let i = 0; i < tempLength; i++) {

        const randomNumber = Math.floor(Math.random() * tempCards.length);
        deck.push(tempCards[randomNumber]);
        tempCards.splice(randomNumber, 1);

    }

    return deck;
}