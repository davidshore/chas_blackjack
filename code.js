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
    imgTag.width = '100'
    imgTag.height = '180'
    imgTag.src = `images/${imgSrc}`
     cardsImage.appendChild(imgTag);

     const cardNum =cards[cardRandomNum].num;
     totalNum += cardNum;
    /*  totalNumber.innerHTML = 'Player1 Total Card Number : '+totalNum; */
     if ( totalNum > 21 ){
         result.innerHTML = 'Result :Player1 Total Card Number :'+totalNum +'<br></br>  Over 21, Player 1 lost!'
         startGame.style.display = 'none';
     }
     else if(totalNum == 21){
        result.innerHTML = 'Result :Player1 Total Card Number : '+totalNum + '<br></br> Player 1 won, congratulations! '
     }
     else if( totalNum < 21 && robotTotalNum < 21 && totalNum > robotTotalNum){
        result.innerHTML = 'Result : Player 1 Total Card Number : '+totalNum
     }
})

stopBtn.addEventListener('click',()=>{
    const cardRandom = Math.random()*cards.length
    const cardRandomNum = Math.floor(cardRandom)

    const imgSrc = cards[cardRandomNum].file
    const imgTag = document.createElement('img');
    imgTag.width = '100'
    imgTag.height = '180'
    imgTag.src = `images/${imgSrc}`
    robotCard.appendChild(imgTag);

    robotTotalNum +=cards[cardRandomNum].num;
    if (robotTotalNum < 21 ){
        robotResult.innerHTML = ' Result :Player 2 Total card Number : '+ robotTotalNum
    }
   
    if (robotTotalNum > 21){
        stopBtn.style.display = 'none'
        robotResult.innerHTML = ' Player 2 Total card Number '+ robotTotalNum+  ',<br>  <br>Result: Over 21, Player 2 Lost!'
    }
    else if(robotTotalNum == 21){
        robotResult.innerHTML = ' Player 2 Total card Number '+ robotTotalNum+  ',<br>  <br>Result: Player 2 won'
    }
    playAgain.addEventListener('click',()=>{
        window.location.reload();
    })
});







