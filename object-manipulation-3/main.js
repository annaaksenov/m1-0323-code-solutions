console.log('Lodash is loaded:', typeof _ !== 'undefined');

function game() {
  const players = [
    { name: 'Player 1', hand: [] },
    { name: 'Player 2', hand: [] },
    { name: 'Player 3', hand: [] },
    { name: 'Player 4', hand: [] }
  ];
  const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  const deck = [];

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
