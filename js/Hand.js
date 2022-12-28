import { double } from "./double.js";

export class Hand {
    constructor() {

        this.cards = [];
        this.bet = 0;
        this.bust = false;
        this.double = false;
        this.blackjack = false;
        this.cardContainer = null;
        this.sum = 0;
        this.double = double;

    }

}