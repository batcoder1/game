const Game = require('./game')
const assert = require('assert');

describe('game tes', () => {

    it('start game, should score should be 0, 0', async () => {
        let gameExpeted = {
            player1: 0,
            player2: 0
            
        }
        const game = new Game(0,0)       
        assert.deepEqual(game.score(), gameExpeted );

    });
    it('start game, should score should be 15, 0', async () => {
        let gameExpeted = {
            player1: 15,
            player2: 0
            
        }
        const game = new Game(0,0);
        game.point('p1');
        
        assert.deepEqual(game.score(), gameExpeted );

    });
    it('start game, should score should be 0, 15', async () => {
        let gameExpeted = {
            player1: 0,
            player2: 15
            
        }
        const game = new Game(0,0);
        game.point('p2');
        
        assert.deepEqual(game.score(), gameExpeted );

    });
    it('start game, should score should be 15, 15', async () => {
        let gameExpeted = {
            player1: 15,
            player2: 15
            
        }
        const game = new Game(0,0);
        game.point('p2');
        game.point('p1');
        
        assert.deepEqual(game.score(), gameExpeted );

    });
    it('start game, should score should be 30, 15', async () => {
        let gameExpeted = {
            player1: 30,
            player2: 15
            
        }
        const game = new Game(0,0);
        game.point('p2');
        game.point('p1');
        game.point('p1');
        
        assert.deepEqual(game.score(), gameExpeted );

    });
    it(' 45, 45, should score should be DEUDE!', async () => {
        let gameExpeted = 'DEUCE!'
        const game = new Game(0,0);
        game.point('p2');
        game.point('p2');
        game.point('p2');
        game.point('p1');
        game.point('p1');
        game.point('p1');
        
        assert.deepEqual(game.score(), gameExpeted );

    });
    it(' should win player1!', async () => {
        let gameExpeted = 'Player1 win!'
        const game = new Game(0,0);
        game.point('p2');
        game.point('p2');
        game.point('p1');
        game.point('p1');
        game.point('p1');
        game.point('p1');
        
        assert.deepEqual(game.score(), gameExpeted );

    });
    it(' should win player2!', async () => {
        let gameExpeted = 'Player2 win!'
        const game = new Game(0,0);
        game.point('p2');
        game.point('p2');
        game.point('p1');
        game.point('p1');
        game.point('p2');
        game.point('p2');
        
        assert.deepEqual(game.score(), gameExpeted );

    });
})