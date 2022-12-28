export const checkForBlackJack = (hand) => {

    if (hand[0].num === 1 || hand[1].num === 1) {

        if (hand[0].num === 10 || hand[1].num === 10) {

            return true;

        }

    }

    return false;

}