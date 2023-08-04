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
  let score;
  const shuffChunk = _.chunk(_.shuffle(deck), 2);
  for (let i = 0; i < players.length; i++) {
    players[i].hand = [...shuffChunk.splice(0, 1)];
    if (players[i].hand === ranks[0]) {
      score += 11;
    } else if (players[i].hand === ranks[10] || ranks[11] || ranks[12]) {
      score += 10;
    }
  }

  return score;
}
shuffleDeck(createDeck());
console.log(shuffleDeck(createDeck()));

/*
 function deal(eachOne) {
  for (let playerCount = 0; playerCount < 4; playerCount++) {
    players[playerCount].hand = shuffleDeck.splice(0, 3);
  }
  return players;
}
console.log(deal());
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
