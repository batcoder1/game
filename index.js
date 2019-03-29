
const Tennis = require('./tennis')

let p1= {
    name: 'Nadal',
    speed: 6,
    agility: 6,
    power: 8,
    stamina: 10,
};
let p2= {
    name: 'Djokovic',
    speed: 4,
    agility: 6,
    power: 10,
    stamina: 10,
};
function startGame() {

    const tennis = new Tennis(p1,p2) 
    
    //skill weights
    const weights = [0.10, 0.20, 0.30, 0.40 ]

    const mediaPonP1 = (p1.speed * weights[0] + p1.agility * weights[1] +
    p1.power * weights[2] + p1.stamina  *weights[3])/ 4;

    const mediaPonP2 = (p2.speed * weights[0] + p2.agility * weights[1] +
    p2.power * weights[2] + p2.stamina * weights[3])/ 4;
    const base = 10
    const probabilityBase = base/2;
    probabilityBySkils = probabilityBase + (mediaPonP1 - mediaPonP2)*0.1;
  //  console.log(`medias : ${mediaPonP1} ${mediaPonP2} ${probabilityBySkils}`)
    
    while (tennis.score.sets[0].games.length < 6) {
        
        let ruleta = Math.round(Math.random()*base*1000);
       // console.log(`probabilityBySkils : ${probabilityBySkils} ${ruleta}`)

        let winnerPointPlayer = 'p1'
        if (ruleta > probabilityBySkils*1000) {
            winnerPointPlayer = 'p2'
        }

        tennis.point(winnerPointPlayer)
    }
    const winByp1 =tennis.score.sets[0].games.filter(game => game.winBy === 'p1')
    const winByp2 =tennis.score.sets[0].games.filter(game => game.winBy === 'p2')
    const matchWinner = (winByp1.length > winByp2.length)? p1.name:p2.name
    console.log(`RESULT MATCH: (${winByp1.length}, ${winByp2.length}) => WINNER: '${matchWinner} `)
    
    return matchWinner;
}
function Play1000Matchs(){

    let superchampion = []
    for (let index = 0; index < 1000; index++) {
        let winner =startGame();
        superchampion.push(winner)
    }
    console.log(`${p1.name} wins ${superchampion.filter(champ => champ === p1.name).length} times` )
    console.log(`${p2.name} wins ${superchampion.filter(champ => champ === p2.name).length} times` )
}
Play1000Matchs();
 