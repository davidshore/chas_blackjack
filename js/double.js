import { gameParams } from "./gameParams.js";
import { hit } from "./hit.js";
import { stand } from './stand.js';

export function double() {

    gameParams.payoutMultiplier = 2;
    gameParams.playerMoney -= this.bet;
    this.bet = this.bet * 2;
    document.getElementById('bet').innerHTML = `Current bet: $${this.bet}`;
    document.getElementById('bankroll').innerHTML = `Bankroll: $${gameParams.playerMoney}`;

    hit();

    if (!this.bust) {

        stand();

    }
}