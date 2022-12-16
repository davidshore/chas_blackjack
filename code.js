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
    startGame.textContent = 'Let Robot Take Crad'
    stopBtn.textContent = 'Robot Take Card'
    const cardRandom = Math.random()*cards.length
    const cardRandomNum = Math.floor(cardRandom)

    const imgSrc = cards[cardRandomNum].file
    const imgTag = document.createElement('img');
    imgTag.width = '100'
    imgTag.height = '180'
    imgTag.src = `images/${imgSrc}`
     cardsImage.appendChild(imgTag);

     const cardNum =cards[cardRandomNum].num;
     const h5Tag = document.createElement('h5');
     /* h5Tag.innerHTML =  'Your Card Number : ' +cardNum+ ' '; */
     cardNumber.appendChild(h5Tag);

     totalNum += cardNum;
     totalNumber.innerHTML = 'Your Total Card Number : '+totalNum;
     if ( totalNum > 21){
         result.innerHTML = 'Result : Over 21, You lost '
         startGame.style.display = 'none';
     }
     else if(totalNum == 21){
        result.innerHTML = 'Result : You won, congratulations! '
     }
     else{
        result.innerHTML = 'Result : Your Total Card Number : '+totalNum
     }

    stopBtn.addEventListener('click',()=>{
        stopBtn.textContent = 'Let User Take Card'
        startGame.textContent = 'User Take Crad'

        const cardRandom = Math.random()*cards.length
        const cardRandomNum = Math.floor(cardRandom)

        robotTotalNum +=cards[cardRandomNum].num;
        if (robotTotalNum < 21){
            robotResult.innerHTML = ' REsult :Robot Total card Number ='+ robotTotalNum
        }
       
        const imgSrc = cards[cardRandomNum].file
        const imgTag = document.createElement('img');
        imgTag.width = '100'
        imgTag.height = '180'
        imgTag.src = `images/${imgSrc}`
        robotCard.appendChild(imgTag);

        if (robotTotalNum > 21){
            stopBtn.style.display = 'none'
            robotResult.innerHTML = ' Robot Total card Number '+ robotTotalNum+  ',<br>  <br>Result: Over 21, Robot Lost'
        }
        else if(robotTotalNum == 21){
            robotResult.innerHTML = ' Robot Total card Number '+ robotTotalNum+  ',<br>  <br>Result: Robot won'
        }
        playAgain.addEventListener('click',()=>{
            window.location.reload();
        })
    });
})







