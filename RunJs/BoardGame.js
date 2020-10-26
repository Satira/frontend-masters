// Create an object using bracket and dot notation that represents the characters and related data you may find in a gameof Clue
 let game = {};

game.murder = "??";
game['weapons'] = [
  {type: 'lasers', location: 'lab'},
  {type: 'angry cats', location: 'l'},
  {type: 'dish soap', location: 's'},
];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');
game['%artefacts'] = 'crystal ball';

let key = "%key"
let value = "value";

game[key] = value;

// const entries = Object.keys(game);
// console.log(entries);

for (const property in game) {
  console.log(`${property}: ${game[property]}`);
}


