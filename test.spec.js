const Tennis = require('./tennis')
const assert = require('assert');
const player1= {
    name: 'Nadal',
    speed: 7,
    agility: 8,
    power: 9,
    stamina: 9,
};
const player2= {
    name: 'Djokovic',
    speed: 8,
    agility: 6,
    power: 10,
    stamina: 7,
};
describe('tennis tes', () => {

    it('start tennis, should score should be initialize to 0', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 0,
            'p2': 0 ,
            'deuce': false,
            'advantage': ''
            
        }
        const tennis = new Tennis(player1,player2)       
        assert.deepEqual(tennis.player1.name, 'Nadal' );
        assert.deepEqual(tennis.player2.name, 'Djokovic' );
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('should score should be 15, 0', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 15,
            'p2': 0,
            'deuce': false,
            'advantage': '' 
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p1');
        
        assert.deepEqual(tennis.score.print(),scoreResumeExpected );

    });
    it('should score should be 0, 15', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 0,
            'p2': 15,
            'deuce': false,
            'advantage': ''    
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');player2
        
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('should score should be 15, 15', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 15,
            'p2': 15,
            'deuce': false,
            'advantage': '' 
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p1');
        
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('should score should be 30, 15', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 30,
            'p2': 15,
            'deuce': false,
            'advantage': ''    
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p1');
        
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('should score should be 40, 40 and deuce:true', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 40,
            'p2': 40,
            'deuce': true,
            'advantage': '' 
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p2');
        tennis.point('p1');
        
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('should score should be 40, 40 and advantage= p1', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 40,
            'p2': 40,
            'deuce': false,
            'advantage': 'p1' 
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p1');
        tennis.point('p1');
        tennis.point('p1');
        
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('should score should be 40, 40 and advantage= p2', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 40,
            'p2': 40,
            'deuce': false,
            'advantage': 'p2' 
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p1');
        tennis.point('p1');
        tennis.point('p2');
        
        
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('point player1 when advantage= p2 should be deuce true', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 40,
            'p2': 40,
            'deuce': true,
            'advantage': '' 
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p1');
        tennis.point('p1'); //deuce
        tennis.point('p2'); 
        tennis.point('p1'); // deuce
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('if deuce and point player1 should be advantage= p1', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 40,
            'p2': 40,
            'deuce': false,
            'advantage': 'p1' 
            
        }
        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p1');
        tennis.point('p1'); //deuce
        tennis.point('p2'); 
        tennis.point('p1'); // deuce
        tennis.point('p1'); // p1
        
        assert.deepEqual(tennis.score.print(), scoreResumeExpected );

    });
    it('if advantage= p1 and new point p1 should be win the game, player1', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 0,
            'p2': 0,
            'deuce': false,
            'advantage': 'p1' 
            
        }
        let winnerExpected = 'p1';

        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p1');
        tennis.point('p1'); //deuce
        tennis.point('p2'); 
        tennis.point('p1'); // deuce
        tennis.point('p1'); // p1
        tennis.point('p1'); // win p1
        assert.deepEqual(tennis.score.sets[0].games[0].winBy, winnerExpected );
        assert.deepEqual(tennis.score.sets[0].games[1].pointsP1, 0 );
        assert.deepEqual(tennis.score.sets[0].games[1].pointsP2, 0 );

    });
 
    it('if advantage= p2 and new point p2 should be win the game, player2', async () => {
        let scoreResumeExpected = {
            'Set': 0, 
            'Game': 0, 
            'p1': 0,
            'p2': 0,
            'deuce': false,
            'advantage': 'p2' 
            
        }
        let winnerExpected = 'p2';

        const tennis = new Tennis(player1,player2)    
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p2');
        tennis.point('p1');
        tennis.point('p1');
        tennis.point('p1'); //deuce
        tennis.point('p2'); 
        tennis.point('p1'); // deuce
        tennis.point('p2'); // advantage p2
        tennis.point('p2'); // win p2
        assert.deepEqual(tennis.score.sets[0].games[0].winBy, winnerExpected );
        assert.deepEqual(tennis.score.sets[0].games[1].pointsP1, 0 );
        assert.deepEqual(tennis.score.sets[0].games[1].pointsP2, 0 );

    });
 
})