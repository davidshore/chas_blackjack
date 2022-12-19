import { addCardElement } from "./addCardElement.js";
import { calculateSum } from "./calculateSum.js";
import { drawCard } from "./drawCard.js";
import { gameParams } from "./gameParams.js"

export const firstRound = () => {

    gameParams.payoutMultiplier = 2.5;
    const gameMessage = document.getElementById('gameMessage');
    const currentBet = document.getElementById('bet');
    const bankroll = document.getElementById('bankroll');
    const betButton = document.getElementById('betButton');

    gameParams.playerCards.length = 0;
    gameParams.playerSum = 0;
    gameParams.dealerCards.length = 0;
    gameParams.dealerSum = 0;

    gameParams.playerCards.push([])
    gameParams.playerCards[0].push(drawCard());
    const cardContainer = document.createElement('div');
    cardContainer.className = 'innerCardContainer'
    document.getElementById('playerCards').appendChild(cardContainer);
    gameParams.playerCardContainers.push(cardContainer)
    console.log(gameParams);
    setTimeout(() => {

        addCardElement(gameParams.playerCards[0][0], true, 0, 0);

        setTimeout(() => {
            gameParams.dealerCards.push(drawCard());
            gameParams.dealerCards.push(drawCard());
            addCardElement(gameParams.dealerCards[0]);

            setTimeout(() => {

                gameParams.playerCards[0].push(drawCard());
                addCardElement(gameParams.playerCards[0][gameParams.playerCards[0].length - 1], true, 0, 1);

                if (gameParams.playerCards[0][0].num === 1 || gameParams.playerCards[0][1].num === 1) {

                    if (gameParams.playerCards[0][0].num === 10 || gameParams.playerCards[0][1].num === 10) {
                        gameParams.playerBlackjack = true;

                        setTimeout(() => {
                            addCardElement(gameParams.dealerCards[1]);
                        }, gameParams.cardDelay);

                        if (gameParams.dealerCards[0].num === 1 || gameParams.dealerCards[1].num === 1) {

                            if (gameParams.dealerCards[0].num === 10 || gameParams.dealerCards[1].num === 10) {

                                gameParams.dealerBlackjack = true;

                            }
                        }

                        if (gameParams.dealerBlackjack) {

                            gameMessage.innerHTML = 'It´s a draw, you get your money back.';
                            gameParams.playerMoney += gameParams.bet[0];
                            gameParams.bet[0] = 0;
                            currentBet.innerHTML = `Current bet: $0`
                            bankroll.innerHTML = `Bankroll: $${gameParams.playerMoney}`;
                            betButton.disabled = false;
                            return;


                        } else {

                            gameMessage.innerHTML = 'Black Jack! You win!';
                            gameParams.playerMoney += gameParams.bet[0] * gameParams.payoutMultiplier;
                            gameParams.bet[0] = 0;
                            currentBet.innerHTML = `Current bet: $0`
                            bankroll.innerHTML = `Bankroll: $${gameParams.playerMoney}`;
                            betButton.disabled = false;
                            return;

                        }
                    }

                }

                setTimeout(() => {
                    addCardElement({ file: 'facedown_card.png' });
                }, gameParams.cardDelay);

                const firstCardSplit = gameParams.playerCards[0][0].file.split('_');
                const secondCardSplit = gameParams.playerCards[0][1].file.split('_');

                if (firstCardSplit[0] === secondCardSplit[0]) {

                    document.getElementById('splitButton').disabled = false;

                }

                const playerSum = calculateSum(true);

                if (playerSum >= 9 && playerSum <= 11) {

                    document.getElementById('doubleButton').disabled = false;

                }

                document.getElementById('hitButton').disabled = false;
                document.getElementById('standButton').disabled = false;


            }, gameParams.cardDelay);

        }, gameParams.cardDelay);

    }, gameParams.cardDelay);

}