import { preGameSetup } from "./preGameSetup";

export function drawCard(deck) {

    if (deck.length == 0) {
        preGameSetup();
        console.log('Bunken er fyldt op igen');
    }
    let i = Math.floor(Math.random() * deck.length);
    let card = deck.splice(i, 1)[0];
    return [card, deck]
}