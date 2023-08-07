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

function deal(deck, players) {
  for (let playerCount = 0; playerCount < 4; playerCount++) {
    players[playerCount].hand = deck.splice(0, 1);
  }
  return players;
}
deal(shuffleDeck(createDeck()), players);

function callWinner(players) {
  const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const obj = { A: 11, J: 10, Q: 10, K: 10 };
  for (let i = 0; i < players.length; i++) {
    let score = 0;
    for (let j = 0; j < players[i].hand.length; j++) {
      for (let k = 0; k < players[i].hand[j].length; k++) {
        if (arr.includes(parseInt(players[i].hand[j][k]))) {
          score += parseInt([players[i].hand[j][k]]);
        } else {
          score += obj[players[i].hand[j][k][0]];
        }
      }
    }
    players[i].score = score;
  }
  const winner = players.sort((a, b) => b.score - a.score)[0];
  console.log('Winner!:', winner);
}
callWinner(players);
