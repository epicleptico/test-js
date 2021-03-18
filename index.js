// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code
 function logPlayers() {
    data.getPlayers().forEach((x, i) => {
        const {name, lastname, position} = x;
        console.log(`PLAYER ${i + 1}`);
        console.log(`NAME: ${name}`);
        console.log(`LASTNAME ${lastname}`);
        console.log(`POSITION: ${position}`);
    }); 
 }



/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered A-Z
 */

// Your code
function logPlayersNames() {
    console.log([...data.getPlayers().map(({name}) => name).sort((a,b) => a.localeCompare(b))]);
}


/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals 
 * Output example -> Goals per match: 2.61
 */

// Your code
function logAverageResultsForOneMatch() {
    // If the scoringChanv
    console.log(`Goals per match: ${data.getPlayers()
        .map(({scoringChance}) => scoringChance / 100) // If the scoringChance is per 100 games, we need to get the chance for 1 match.
        .reduce((acc, x) => acc + x)}`);
}



/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name
 */

// Your code
function logPlayerPositionByName(playerName) {
    const playerPosition = data.getPlayers().filter(({name}) => name == playerName).map(({position}) => position).shift();
    console.log(!!playerPosition ? `Player position of ${playerName} is '${playerPosition}'` : `There is no player with the name ${playerName}`);
}

/* ------------------------------------------------------------------ */
//                  TEST OUTPUT LOGIC
/* ------------------------------------------------------------------ */

let testNumber = 1;

const logTest = (testFn) => {
    console.log(`\n----------------\nTest ${testNumber++}\n----------------\n\n`);
    testFn();
    console.log(`\n`);
}


logTest(logPlayers);
logTest(logPlayersNames);
logTest(logAverageResultsForOneMatch);
logTest(() => {
    logPlayerPositionByName(`Joe`);
    logPlayerPositionByName(`Timo`);
    logPlayerPositionByName(`Bernd`);
})