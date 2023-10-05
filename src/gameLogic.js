export function checkRoundState(playerCards, dealerCards, gameOver) {
    var playerHandPoints = handTotal(playerCards);
    var dealerHandPoints = handTotal(dealerCards);

    if (playerHandPoints == 21 || dealerHandPoints > 21 || (playerHandPoints > dealerHandPoints && gameOver == true)) {
        return 'You won!';
    }
    if (playerHandPoints > 21 || dealerHandPoints == 21 || (playerHandPoints < dealerHandPoints && gameOver == true)) {
        return 'You lost!';
    }
    if (playerHandPoints == dealerHandPoints && gameOver == true) {
        return 'It\'s a draw!';
    }
    return null;
}

export function handTotal(hand) {
    let total = 0;
    let aces = 0;

    //create a for loop that loops through the hand and adds the cardValue to the total
    

    for (let i = 0; i < hand.length; i++) {
        total += hand[i].cardValue;

        if (hand[i].cardValue == 1) {
            aces += 1;
        }
    }

    for (let i = 0; i < aces; i++) {
        if (total + 10 <= 21) {
            total += 10;
        }
    }
    return total;
}