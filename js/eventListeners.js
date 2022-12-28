import { bet } from "./bet.js";
import { double } from "./double.js";
import { gameParams } from "./gameParams.js";
import { hit } from "./hit.js";
import { newGame } from "./newGame.js";
import { split } from "./split.js";
import { stand } from "./stand.js";

export const eventListeners = () => {

    document.getElementById('betButton').addEventListener('click', bet);
    document.getElementById('doubleButton').addEventListener('click', () => {
        gameParams.hands[gameParams.currentHand].double();
    });
    document.getElementById('splitButton').addEventListener('click', split);
    document.getElementById('standButton').addEventListener('click', stand);
    document.getElementById('newGameButton').addEventListener('click', newGame);
    document.getElementById('hitButton').addEventListener('click', hit);



}

