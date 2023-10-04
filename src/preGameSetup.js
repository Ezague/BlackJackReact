export function preGameSetup() {
    class Card {
        constructor(kuloer, vaerdi, cardValue) {
            this.kuloer = kuloer;
            this.vaerdi = vaerdi;
            this.cardValue = cardValue;
        }
    }
    
    function createDeck() {
        let kuloer = ['Kløver', 'Ruder', 'Hjerter', 'Spar'];
        let vaerdi = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knægt', 'Dronning', 'Konge', 'Es'];
        let cardValue = [2,3,4,5,6,7,8,9,10,10,10,10,1]
        let deck = [];
        
        for(let i = 0; i < kuloer.length; i++) {
            for(let j = 0; j < vaerdi.length; j++) {
                deck.push(new Card(kuloer[i], vaerdi[j], cardValue[j]));
            }
        }
        return deck;
    }
    return createDeck();
}