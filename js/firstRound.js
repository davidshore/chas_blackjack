import { addCardElement } from "./addCardElement.js";
import { calculateSum } from "./calculateSum.js";
import { checkForBlackJack } from "./checkForBlackJack.js";
import { drawCard } from "./drawCard.js";
import { gameParams } from "./gameParams.js"
import { Hand } from "./Hand.js";


export const firstRound = () => {

    gameParams.payoutMultiplier = 2.5;
    const gameMessage = document.getElementById('gameMessage');
    const currentBet = document.getElementById('bet');
    const bankroll = document.getElementById('bankroll');
    const betButton = document.getElementById('betButton');

    console.log(gameParams)

    gameParams.hands[0].cards.push(drawCard());

    // fusk till blackjack
    const fusk = () => {

        while (gameParams.hands[0].cards[0].num !== 8) {

            gameParams.hands[0].cards[0] = drawCard();

        }

        while (gameParams.hands[0].cards[1].num !== 10) {

            gameParams.hands[0].cards[1] = drawCard();

        }

        addCardElement(gameParams.hands[0].cards[0], true, 0, 0);
        addCardElement(gameParams.hands[0].cards[gameParams.hands[0].cards.length - 1], true, 0, 1);

    }

    const fuskDealer = () => {

        while (gameParams.dealerCards[0].num !== 8) {

            gameParams.dealerCards[0] = drawCard();

        }

        while (gameParams.dealerCards[1].num !== 10) {

            gameParams.dealerCards[1] = drawCard();

        }

        addCardElement(gameParams.dealerCards[0]);
        addCardElement(gameParams.dealerCards[1]);

    }




    const cardContainer = document.createElement('div');
    cardContainer.className = 'innerCardContainer'
    document.getElementById('playerCards').appendChild(cardContainer);
    gameParams.hands[0].cardContainer = cardContainer;

    setTimeout(() => {

        addCardElement(gameParams.hands[0].cards[0], true, 0, 0);

        setTimeout(() => {
            gameParams.dealerCards.push(drawCard());
            gameParams.dealerCards.push(drawCard());
            addCardElement(gameParams.dealerCards[0]);

            setTimeout(() => {

                gameParams.hands[0].cards.push(drawCard());
                addCardElement(gameParams.hands[0].cards[gameParams.hands[0].cards.length - 1], true, 0, 1);

                gameParams.hands[0].blackjack = checkForBlackJack(gameParams.hands[0].cards);

                if (gameParams.hands[0].blackjack) {

                    setTimeout(() => {
                        addCardElement(gameParams.dealerCards[1]);
                    }, gameParams.cardDelay);

                    gameParams.dealerBlackjack = checkForBlackJack(gameParams.dealerCards);

                    if (gameParams.dealerBlackjack) {

                        gameMessage.innerHTML = 'It´s a draw, you get your money back.';
                        gameParams.playerMoney += gameParams.hands[gameParams.currentHand].bet;
                        currentBet.innerHTML = `Current bet: $0`
                        bankroll.innerHTML = `Bankroll: $${gameParams.playerMoney}`;
                        betButton.disabled = false;
                        return;


                    } else {

                        gameMessage.innerHTML = 'Black Jack! You win!';
                        gameParams.playerMoney += gameParams.hands[gameParams.currentHand].bet * gameParams.payoutMultiplier;
                        currentBet.innerHTML = `Current bet: $0`
                        bankroll.innerHTML = `Bankroll: $${gameParams.playerMoney}`;
                        betButton.disabled = false;
                        return;

                    }

                }

                setTimeout(() => {
                    addCardElement({ file: 'facedown_card.png' });
                }, gameParams.cardDelay);

                const firstCardSplit = gameParams.hands[0].cards[0].file.split('_');
                const secondCardSplit = gameParams.hands[0].cards[1].file.split('_');

                if (firstCardSplit[0] === secondCardSplit[0]) {

                    document.getElementById('splitButton').disabled = false;

                }

                const playerSum = calculateSum(true);

                if (playerSum >= 7 && playerSum <= 11) {

                    if (gameParams.playerMoney >= gameParams.hands[0].bet) {

                        document.getElementById('doubleButton').disabled = false;

                    }

                }

                document.getElementById('hitButton').disabled = false;
                document.getElementById('standButton').disabled = false;


            }, gameParams.cardDelay);

        }, gameParams.cardDelay);

    }, gameParams.cardDelay);

}