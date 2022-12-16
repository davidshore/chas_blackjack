// You blackjack game code goes here
import { cards } from "./cards.js";

const startGame = document.querySelector('.startGame')
const cardsImage = document.querySelector('.cardsImage')
const cardNumber = document.querySelector('.cardNumber')
const totalNumber = document.querySelector('.totalNumber')
const result = document.querySelector('.result')
const stopBtn = document.querySelector('.stop')
const robotCard = document.querySelector('.robotCard')
const robotResult = document.querySelector('.robotResult')
const playAgain = document.querySelector('.playAgain')

let totalNum = 0;
let robotTotalNum = 0;

startGame.addEventListener('click',()=>{  
    const cardRandom = Math.random()*cards.length
    const cardRandomNum = Math.floor(cardRandom)

    const imgSrc = cards[cardRandomNum].file
    const imgTag = document.createElement('img');
    imgTag.width = '150'
    imgTag.height = '300'
    imgTag.src = `images/${imgSrc}`
     cardsImage.appendChild(imgTag);

     const cardNum =cards[cardRandomNum].num;
     const h5Tag = document.createElement('h5');
     h5Tag.innerHTML =  'Your Card Number : ' +cardNum+ ' ';
     cardNumber.appendChild(h5Tag);

     totalNum += cardNum;
     totalNumber.innerHTML = 'Your Total Card Number : '+totalNum;
     if ( totalNum > 21){
         result.innerHTML = 'Result : Over 21, You lost '
         startGame.style.display = 'none';
     }

    stopBtn.addEventListener('click',()=>{
        stopBtn.textContent = 'Robot Take Card'
        const cardRandom = Math.random()*cards.length
        const cardRandomNum = Math.floor(cardRandom)

        robotTotalNum +=cards[cardRandomNum].num;
        if (robotTotalNum < 21){
            robotResult.innerHTML = ' REsult :Robot Total card Number ='+ robotTotalNum
        }
       
        const imgSrc = cards[cardRandomNum].file
        const imgTag = document.createElement('img');
        imgTag.width = '150'
        imgTag.height = '300'
        imgTag.src = `images/${imgSrc}`
        robotCard.appendChild(imgTag);

        if (robotTotalNum > 21){
            stopBtn.style.display = 'none'
            robotResult.innerHTML = ' Robot Total card Number '+ robotTotalNum+ ', Over 21, Robot Lost'
        }
        playAgain.addEventListener('click',()=>{
            window.location.reload();
        })
    });
  
})







