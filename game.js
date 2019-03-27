'use strict'

class Game {
   
    
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2
    };
    
    point(player) {
        if (player === 'p1') {
            this.player1 = this.player1 +15;
        } else {
            if (player === 'p2') {
                this.player2 = this.player2 +15;
            }
        }

    }
    score() {
        let score = {
            player1: this.player1,
            player2: this.player2
        }
        if (this.player1 === 45 &&
         this.player2 === 45) {
             console.log('entra')
            score = 'DEUCE!'
        }
        if (this.player1 > 45){
            score = 'Player1 win!';
            this.player1 = 0;
            this.player2 = 0;
        }
        if (this.player2 > 45){
            score = 'Player2 win!';
            this.player1 = 0;
            this.player2 = 0;
        }

        return score;
    }
}



module.exports = Game;