console.log('Lodash is loaded:', typeof _ !== 'undefined');
const players = [
  { name: 'Desi', hand: [] },
  { name: 'Kyle', hand: [] },
  { name: 'Pete', hand: [] },
  { name: 'Sofi', hand: [] }
];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = ['C', 'D', 'H', 'S'];
const deck = [];
// const cardValue = { 'A': 11, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10 };
// const cardValue = { A: 11, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10 };
function createDeck() {
  for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
      deck.push(ranks[rankCounter] + suits[suitCounter]);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  const shuffChunk = _.chunk(_.shuffle(deck), 2);
  return shuffChunk;
}
shuffleDeck(createDeck());
console.log(shuffleDeck(createDeck()));

function deal(deck, players) {
  for (let playerCount = 0; playerCount < 4; playerCount++) {
    players[playerCount].hand = deck.splice(0, 2);
  }
  return players;
}
deal(shuffleDeck(createDeck()), players);
console.log(deal(shuffleDeck(createDeck()), players));

function callWinner(players) {
  let score;
  for (let i = 0; i < players.length; i++) {
    // const split = players[i].hand.split(' ');
    if (players[i].hand.includes('A')) {
      score += 11;
    }
  }
  return score;
}
callWinner(players);
console.log(callWinner(players));
/*
 for (var i = 0; i < ranks.length; i++) {
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
