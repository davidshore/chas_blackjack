// You blackjack game code goes here
import { cards } from "./cards.js";

const startGame = document.querySelector('.startGame')
const cardsImage = document.querySelector('.cardsImage')
const result = document.querySelector('.result')
const stopBtn = document.querySelector('.stop')
const robotCard = document.querySelector('.robotCard')
const robotResult = document.querySelector('.robotResult')
const playAgain = document.querySelector('.playAgain')
const won = document.querySelector('.won')
const stopPlay = document.querySelector('.stopPlay')
let totalNum = 0;
let robotTotalNum = 0;

startGame.addEventListener('click',()=>{  
    const cardRandom = Math.random()*cards.length
    const cardRandomNum = Math.floor(cardRandom)

    const imgSrc = cards[cardRandomNum].file
    const imgTag = document.createElement('img');
    imgTag.width = '100'
    imgTag.height = '150'
    imgTag.src = `images/${imgSrc}`
     cardsImage.appendChild(imgTag);

     const cardNum =cards[cardRandomNum].num;
     totalNum += cardNum;
    /*  totalNumber.innerHTML = 'Player1 Total Card Number : '+totalNum; */
     if ( totalNum > 21 ){
         result.innerHTML = 'Player1 Total Number : '+totalNum +'<br></br> Over 21, Player 1 lost!'
         startGame.style.display = 'none';
     }
     else if(totalNum == 21){
        result.innerHTML = 'Player1 Total Number : '+totalNum + '<br></br> Player 1 Blackjack, Congratulations! '
        startGame.style.display = 'none';
     }
     else if( totalNum < 21 ){
        result.innerHTML = 'Player 1 Total Number : '+totalNum
     }
})

stopBtn.addEventListener('click',()=>{
    const cardRandom = Math.random()*cards.length
    const cardRandomNum = Math.floor(cardRandom)

    const imgSrc = cards[cardRandomNum].file
    const imgTag = document.createElement('img');
    imgTag.width = '100'
    imgTag.height = '150'
    imgTag.src = `images/${imgSrc}`
    robotCard.appendChild(imgTag);

    robotTotalNum +=cards[cardRandomNum].num;
    if (robotTotalNum < 21 ){
        robotResult.innerHTML = ' Player 2 Total Number : '+ robotTotalNum
    }
   
    if (robotTotalNum > 21){
        stopBtn.style.display = 'none'
        robotResult.innerHTML = ' Player 2 Total Number : '+ robotTotalNum+  '<br>  <br>Over 21, Player 2 Lost!'
    }
    else if(robotTotalNum == 21){
        robotResult.innerHTML = ' Player 2 Total Number : '+ robotTotalNum+  ',<br>  <br>Player 2 Blackjack, Congratulations!'
        stopBtn.style.display = 'none'
    }  
});
stopPlay.addEventListener('click',()=>{
    startGame.style.display = 'none';
    stopBtn.style.display = 'none'

    if (robotTotalNum < 21 && totalNum < 21 && robotTotalNum< totalNum ){
        won.innerHTML = 'Player 1 Won!'
    }
    else if (robotTotalNum < 21 && totalNum < 21 && robotTotalNum> totalNum ){
        won.innerHTML = 'Player 2 Won!'
    }
    else if (robotTotalNum < 21 && totalNum < 21 && robotTotalNum== totalNum ){
        startGame.style.display = 'flex';
        stopBtn.style.display = 'flex'
        won.innerHTML = 'Two Players are at the same level, Please keep getting cards or play game again!'
    }
    else if (robotTotalNum > 21 && totalNum < 21  ){
        won.innerHTML = 'Player 1 Won!'
    }
    else if (robotTotalNum < 21 && totalNum > 21  ){
        won.innerHTML = 'Player 2 Won!'
    }
    else if ( totalNum == 21  ){
        won.innerHTML = 'Player 1 Blackjack, Congratulations!'
    }
    else if (robotTotalNum == 21  ){
        won.innerHTML = 'Player 2 Blackjack, Congratulations!'
    } 
    else if ( totalNum == 21 && robotTotalNum == 21 ){
        won.innerHTML = 'Player 1 And Olayer 2 Blackjack, Congratulations!'
    } 
})
playAgain.addEventListener('click',()=>{
    window.location.reload();
})







