import { cards } from "./cards.js"

// variabless
let playerCount = 0;
let dealerCount = 0;
let stayBol = false; // har jag stannat eller ej

// divs
const playerDiv = document.getElementById("playerDiv")
const dealerDiv = document.getElementById("dealerDiv")
const hit = document.getElementById("hit")
const stay = document.getElementById("stay")
const result = document.getElementById("result")
const clear = document.getElementById("clear")
const playerDivCount = document.getElementById("playerDivCount")
const dealerDivCount = document.getElementById("dealerDivCount")

// add funtions to buttons
hit.addEventListener("click", hitClick)
stay.addEventListener("click", stayClick)
clear.addEventListener("click", clearAll)

// kan användas för nåde player och dealer att skapa kort
function createCard(i, DIV) {
    const card = document.createElement("img")
    card.src = `images/${cards[i].file}`
    card.classList.add("card")
    DIV.appendChild(card)
}

function hitClick(){
    // om du redan valt att stanna -> gå tillbaka (så man ej kan klicka hit igen)
    if(stayBol == true) return
    // draw random card
    const index = getRandomIndex()
    // add a card with image when you press hit
    createCard(index, playerDiv)

    // add to playercount 
    let value = cards[index].num
    playerCount += value
    playerDivCount.textContent = playerCount

    // gå till nästa steg ifall counten blir högre än 21
    if(playerCount > 21) {
        stayBol = true 
        stayClick()
        return
    }

}

function stayClick() {
    stayBol = true

    while(dealerCount < 17) {

        const index = getRandomIndex()
        // create new element
        createCard(index, dealerDiv)
     
        dealerCount += cards[index].num
    }

    dealerDivCount.textContent = dealerCount

    // get the game winner
    getWinner()
}

function getWinner() {

    let resultString = ""

    // check if you or dealer are over
    if(playerCount > 21) { 
        resultString = "You are busted! Try to get under 21 next time.."
    } else if(dealerCount > 21) {
        resultString = "Dealer got over 21, you win!"
    }
    //check if player or dealer is bigger and both under 21
    if(playerCount > dealerCount && playerCount<=21){
        resultString = "You win! You got " + playerCount + " and the dealer got " + dealerCount
    } else if(dealerCount > playerCount && dealerCount<=21){
        resultString = "You lost to the dealer. You got " + playerCount + " and the dealer got " + dealerCount
    }
    // check if equal
    if(playerCount == dealerCount && playerCount <= 21){
        resultString = "Same, same but different. It is a draw! " + 
            "player: " + playerCount + "dealer: " + dealerCount;
    }
 
    result.textContent = resultString 
}

function clearAll() {

    stayBol = false;
    playerCount = 0;
    dealerCount = 0; 
    
    playerDiv.innerHTML = ""
    dealerDiv.innerHTML = ""
    result.textContent = ""

    playerDivCount.textContent = ""
    dealerDivCount.textContent = ""
}

// get Random index from the deck
function getRandomIndex() {
    const ran = Math.floor(Math.random() * cards.length)
    return ran
}
