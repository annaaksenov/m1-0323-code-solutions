console.log('Lodash is loaded:', typeof _ !== 'undefined');
const players = { Desi: [], Kyle: [], Peter: [], Sofi: [] };
/* [
  { name: 'Desi', hand: [] },
  { name: 'Kyle', hand: [] },
  { name: 'Peter', hand: [] },
  { name: 'Sofie', hand: [] }
]; */

console.log(players[2]);

function createDeck() {
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['C', 'D', 'H', 'S'];
  const deck = [];
  for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
      deck.push(ranks[rankCounter] + suits[suitCounter]);
    }
  }
  return deck;
}
console.log(createDeck());
//

function shuffleDeck(deck) {
  return _.shuffle(deck);
}
console.log(shuffleDeck(createDeck()));
//

/* function deal(eachOne) {
  for (let playerCount = 0; playerCount < 4; playerCount++) {
    players[playerCount].hand = shuffleDeck.splice(0, 3);
  }
  return players;
}
console.log(deal()); */

/* for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var card = { rank: ranks[i], suit: suits[j] };
      if (ranks[i] === 'Ace') {
        card.pointValue = 11;
      } else if (['King', 'Queen', 'Jack'].includes(ranks[i])) {
        card.pointValue = 10;
      } else {
        card.pointValue = parseInt(ranks[i]);
      }
      deck.push(card);
    }
  }
  return players; // delete
}
console.log(game);
*/
