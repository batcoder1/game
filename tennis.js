'use strict'
class Skils {
    constructor(speed, agility, power, stamina){
        this.speed = speed,
        this.agility = agility,
        this.power = power,
        this.stamina = stamina

    }
}
class Player {
    constructor(id, name, speed, agility, power, stamina){
        this.id = id,
        this.name = name;
        this.skils = new Skils(speed, agility, power, stamina)
        
    }
}
class Game {
    constructor(){
        this.winBy = ''
        this.pointsP1 = 0, 
        this.pointsP2 = 0 
    }
}
class Set {
    constructor(){
        this.winBy = '';
        this.games = []
    }
}

class Score {
    constructor(){

        this.sets = []
        this.deuce = false;
        this.advantage = ''
        
    }

    print() {
        let currentSet = this.sets.length - 1;
        let currentGame = this.sets[currentSet].games.length -1;
        let currentPointsP1 = this.sets[currentSet].games[currentGame].pointsP1;
        let currentPointsP2 = this.sets[currentSet].games[currentGame].pointsP2;

        
        let scoreResume = {

            'Set': currentSet, 
            'Game': currentGame, 
            'p1': currentPointsP1,
            'p2': currentPointsP2,
            'deuce': this.deuce,
            'advantage': this.advantage
        }
        return scoreResume
        
       
    }
    
}
class Tennis {
    
    constructor(player1, player2){
        this.score = new Score();
        this.score.sets.push(new Set());
        this.score.sets[0].games.push(new Game());
        this.player1 = new Player('p1', player1.name, player1.speed, player1.agility, player1.power, player1.stamina);
        this.player2 = new Player('p2', player2.name, player2.speed, player2.agility, player2.power, player2.stamina);
    };
    
    point(playerID) {

        let currentSet = this.score.sets.length -1;
        let currentGame = this.score.sets[currentSet].games.length -1 ;
        let currentPointsP1 = this.score.sets[currentSet].games[currentGame].pointsP1;
        let currentPointsP2 = this.score.sets[currentSet].games[currentGame].pointsP2;
        
        let assignPointToPlayer =  (id, currentPointsP1, currentPointsP2) => {
            if (currentPointsP1 == 30) {
                if (currentPointsP2 == 40) {
                    this.score.deuce = true;
                }
                currentPointsP1 = currentPointsP1 + 10;
            }
            else {
                if (currentPointsP1 == 40) {
                    if (this.score.advantage != id && this.score.advantage != '') {
                        this.score.deuce = true;
                        this.score.advantage = '';
                    }
                    else {
                        if (this.score.advantage == id){
                            this.score.advantage = '';
                            //win game
                            this.score.sets[currentSet].games[currentGame].winBy = id;
                        
                            // advance one game
                            this.score.sets[currentSet].games.push(new Game());
                            

                        } else {

                            this.score.deuce = false;
                            this.score.advantage = id;
                        }
                    }
                }
                else {
                    currentPointsP1 = currentPointsP1 + 15;
                }
            }
            return currentPointsP1;
        }

        let setPoints = (playerID , currentPoints) => {
            if (playerID == 'p1'){
                this.score.sets[currentSet].games[currentGame].pointsP1 = currentPoints;
            } else {
                this.score.sets[currentSet].games[currentGame].pointsP2 = currentPoints;

            }

        }
        let currentPoints = 0;
        if (playerID == 'p1'){
            currentPoints= assignPointToPlayer(playerID , currentPointsP1, currentPointsP2);
            
        } else{
            currentPoints= assignPointToPlayer(playerID , currentPointsP2, currentPointsP1);

        }
           
        setPoints(playerID, currentPoints)
     /*    console.log(  this.score.sets[currentSet].games[currentGame].pointsP1,   this.score.sets[currentSet].games[currentGame].pointsP2, this.score.deuce, this.score.advantage)
        if (this.score.sets[currentSet].games[currentGame].winBy !== ''){
            console.log('WINNER: '+ this.score.sets[currentSet].games[currentGame].winBy);
        } */
        return this.score


    }
}

module.exports = Tennis;
 