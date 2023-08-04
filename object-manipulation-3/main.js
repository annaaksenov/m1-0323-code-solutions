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
  /* const score = 0;
  const cardValue = ranks.map(({ rank, value }) => ({
    A: 11,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10
  }));
   for (let i = 0; i < players.length; i++) {

  }
  return players; */
}
callWinner(players);
console.log(callWinner(players));

/* const cardValue = ranks.map(n => {
  let value = 0;
  if (n === 'A') {
    value = 11;
  } else if (n === 'J') {
    value = 10;
  } else if (n === 'Q') {
    value = 10;
  } else if (n === 'K') {
    value = 10;
  } else {
    value = n;
  }
  return value;
}); */
