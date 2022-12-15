// You blackjack game code goes here
import { cards } from "./cards.js";
const cardsImage = document.querySelector('.cardsImage')
const startGame = document.querySelector('.startGame')
console.log(cards);

startGame.addEventListener('click',()=>{
    for (let cardInfo of cards){
        let cardsNum = cardInfo.num;
        let cardImage = cardInfo.file
        console.log(cardsNum);
        console.log(cardImage);
        const cardRandom = Math.random()*cards.length;
        const cardsNumrandom = (Math.floor(cardRandom))
        console.log(cardsNumrandom);
        if (cardsNumrandom != cardInfo){
        }
        const imgTag = document.createElement('img');
        imgTag.src = `image/${cardsNumrandom}`
        imgTag.width = '200'
        imgTag.height = '400'
        cardsImage.innerHTML = imgTag;
    }
    
})



