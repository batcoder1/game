
const Game = require('./game')

function startGame() {
    const game = new Game(0,0);
    game.point('p1')
    game.point('p2')
    game.point('p2')
    game.point('p2')
    game.point('p2')
    return game.score();

}
console.log(startGame());