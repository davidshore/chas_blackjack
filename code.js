// You blackjack game code goes here
import { cards } from "./cards.js";

const draw = document.querySelector('.draw')
const stop = document.querySelector('.stop')
const result = document.querySelector('.result')
const chooseAce = document.querySelector('.choose-ace')
const aceOne = document.querySelector('.ace-one')
const aceEleven = document.querySelector('.ace-eleven')
const playAgainBtn = document.querySelector('.play-again')
const myCards = document.querySelectorAll('.cards')[0]
const dealersCards = document.querySelectorAll('.cards')[1]
const showMyPoints = document.querySelectorAll('.points')[0]
const showDealersPoints = document.querySelectorAll('.points')[1]

let newCards = [...cards]
let randomNumber = 0
let myPoints = 0
let dealersPoints = 0

function checkPoints() {
    if (myPoints > 21) {
        draw.setAttribute('disabled', '')
        stop.setAttribute('disabled', '')
        myCards.style.opacity = '0.4'
        result.innerHTML = '--You Lose!--'
        gameEnd()
    }
}

draw.addEventListener('click', () => {
    randomNumber = Math.floor((Math.random() * newCards.length))
    myCards.insertAdjacentHTML('beforeend', `<img src="images/${newCards[randomNumber].file}">`)

    if (newCards[randomNumber].num == 1) {
        chooseAce.classList.remove('hide')
        aceOne.classList.remove('hide')
        aceEleven.classList.remove('hide')
        draw.setAttribute('disabled', '')
        stop.setAttribute('disabled', '')
    } else {
        myPoints += newCards[randomNumber].num
    }

    showMyPoints.innerHTML = `Points: ${myPoints}`
    checkPoints()

    newCards.splice(randomNumber, 1)
    console.log(newCards)
})

stop.addEventListener('click', () => {
    draw.setAttribute('disabled', '')
    stop.setAttribute('disabled', '')
    dealersDraw()
})

aceOne.addEventListener('click', () => {
    myPoints += 1
    showMyPoints.innerHTML = `Points: ${myPoints}`

    chooseAce.classList.add('hide')
    aceOne.classList.add('hide')
    aceEleven.classList.add('hide')
    draw.removeAttribute('disabled', '')
    stop.removeAttribute('disabled', '')
    checkPoints()
})
aceEleven.addEventListener('click', () => {
    myPoints += 11
    showMyPoints.innerHTML = `Points: ${myPoints}`

    chooseAce.classList.add('hide')
    aceOne.classList.add('hide')
    aceEleven.classList.add('hide')
    draw.removeAttribute('disabled', '')
    stop.removeAttribute('disabled', '')
    checkPoints()
})

function dealersDraw() {
    while (dealersPoints <= 17) {
        randomNumber = Math.floor((Math.random() * newCards.length))
        dealersCards.insertAdjacentHTML('beforeend', `<img src="images/${newCards[randomNumber].file}">`)

        if (newCards[randomNumber].num == 1) {
            /* debugger; */
            const oneOrEleven = Math.floor((Math.random() * 2))
            if (oneOrEleven == 0) {
                dealersPoints += 1
            } else if (oneOrEleven == 1) {
                dealersPoints += 11
            }
        } else {
            dealersPoints += newCards[randomNumber].num
        }

        /* dealersPoints += newCards[randomNumber].num */

        showDealersPoints.innerHTML = `Points: ${dealersPoints}`

        newCards.splice(randomNumber, 1)
        console.log(newCards)
    }

    if (myPoints > dealersPoints || dealersPoints > 21) {
        result.innerHTML = '--You Win!--'
        myCards.style.border = '2px solid red'
        dealersCards.style.opacity = '0.4'
        gameEnd()
    } else if (myPoints == dealersPoints) {
        result.innerHTML = '--It\'s a Draw!--'
        gameEnd()
    } else {
        result.innerHTML = '--You Lose!--'
        dealersCards.style.border = '2px solid red'
        myCards.style.opacity = '0.4'
        gameEnd()
    }
}

function gameEnd() {
    draw.classList.add('hide')
    stop.classList.add('hide')
    playAgainBtn.classList.remove('hide')
}

playAgainBtn.addEventListener('click', playAgain)

function playAgain() {
    myPoints = 0
    dealersPoints = 0
    showDealersPoints.innerHTML = ''
    showMyPoints.innerHTML = ''
    result.innerHTML = ''

    myCards.style.border = ''
    dealersCards.style.opacity = ''
    dealersCards.style.border = ''
    myCards.style.opacity = ''
    myCards.innerHTML = ''
    dealersCards.innerHTML = ''

    draw.classList.remove('hide')
    stop.classList.remove('hide')
    playAgainBtn.classList.add('hide')

    draw.removeAttribute('disabled', '')
    stop.removeAttribute('disabled', '')

    newCards = [...cards]
}