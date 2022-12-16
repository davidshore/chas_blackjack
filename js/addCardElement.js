import { gameParams } from "./gameParams.js";

export const addCardElement = (card, player, containerNumber, cardNumber) => {

    const cardElement = document.createElement('img');
    cardElement.src = `./images/${card.file}`;
    cardElement.className = 'card';

    if (card.file === 'facedown_card.png') {
        cardElement.id = 'facedown';
    }

    if (player) {

        cardElement.classList.add('playerCard');

        if (cardNumber !== 0) {

            cardElement.style.transform = `translate(-50%, -50%) translate(${cardNumber * 25}%, -${cardNumber * 20}%)`;
        }

        gameParams.playerCardContainers[containerNumber].appendChild(cardElement);

    } else {

        document.getElementById('dealerCards').appendChild(cardElement);

    }

}