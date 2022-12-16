import { cards } from "./cards.js"

const startButton = document.querySelector('.startButton');
const playButton = document.querySelector('.playButton');
const stopButton = document.querySelector('.stopButton');
const restartButton = document.querySelector('.restartButton');
const welcome = document.querySelector('.welcome');
const comName = document.querySelector('.comName');
const playName = document.querySelector('.playName');
const comCard = document.querySelector('.comCard');
const playCard = document.querySelector('.playCard');
const messege = document.querySelector('.messege');

let playCardSum = 0;
let comCardSum = 0; 

const currentDeck = cards;

const getRandomCard = () => {
    const ranNum = Math.floor(Math.random() * cards.length);
    const ranCard = currentDeck.splice(ranNum, 1);
    return ranCard[0];   
}

const card = getRandomCard();


const startFunction = (() => {
    startButton.classList.add('noButton');
    welcome.classList.add('noWelcome');
    comCard.classList.add('comCard2');
    playCard.classList.add('playCard2');
    messege.classList.add('noButton')
    playButton.classList.add('playButton2');
    playButton.textContent = 'Take card';
    comName.innerHTML = `<p> Computer - Dealer </p>`;
    playName.innerHTML = `<p> Your hand </p>`;
    stopButton.classList.add('stopButton2');
    stopButton.textContent = 'Stop';
});

startButton.addEventListener('click', startFunction);


const playFunction = (() => {
    const card = getRandomCard();
    const pic = document.createElement("img");
    pic.classList.add('cardSize')
    pic.src = `images/${card.file}`;
    playCard.appendChild(pic);
    playCardSum += card.num;

    if (playCardSum > 21) {
        messege.classList.remove('noButton');
        messege.innerHTML = `Over 21. You lost! <br> Sorry!`
        playButton.classList.remove('playButton2');
        playButton.textContent = '';
        stopButton.classList.remove('stopButton2');
        stopButton.textContent = '';
        restartButton.classList.add('restartButton2')
        restartButton.classList.remove('restartButton')
        restartButton.textContent = 'New game';
    }
});
   
playButton.addEventListener('click', playFunction);


const stopFunction = () => {
    playButton.classList.remove('playButton2');
    playButton.textContent = '';
    stopButton.classList.remove('stopButton2');
    stopButton.textContent = '';
    dealerFunction();
};

stopButton.addEventListener('click', stopFunction);


const dealerFunction = (() => {
    while (comCardSum < 17) {
    const card = getRandomCard();
    const card2 = document.createElement("img");
    card2.classList.add('cardSize')
    card2.src = `images/${card.file}`;
    comCard.appendChild(card2);
    comCardSum += card.num;
    }

    messege.classList.remove('noButton');

     if (comCardSum > 21) {
        messege.innerHTML = `Computer got over 21. You Won! <br> You are the Master!`
        restartButton.classList.add('restartButton2')
        restartButton.classList.remove('restartButton')
        restartButton.textContent = 'New game';
    } else if (comCardSum >= playCardSum) {
        messege.innerHTML = `The computer scored more or the same number of points as you. <br> You lost hard!`
        restartButton.classList.add('restartButton2')
        restartButton.classList.remove('restartButton')
        restartButton.textContent = 'New game';
    } else {
        messege.innerHTML = `You scored more points than the computer. You Won! <br> You are totaly amazing!`        
        restartButton.classList.add('restartButton2')
        restartButton.classList.remove('restartButton')
        restartButton.textContent = 'New game';
    }
});

const restartFunction = (() => {
    playCardSum = 0;
    comCardSum = 0;
    comCard.textContent ='';
    playCard.textContent = '';
    stopButton.classList.add('stopButton2');
    stopButton.textContent = 'Stop';
    playButton.classList.add('playButton2');
    playButton.classList.add('playButton2');
    playButton.textContent = 'Take card';
    messege.classList.add('noButton');
    restartButton.classList.remove('restartButton2');
    restartButton.textContent = '';
});

restartButton.addEventListener('click', restartFunction);