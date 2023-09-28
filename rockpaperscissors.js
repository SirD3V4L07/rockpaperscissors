let userAnswer = "NoAnswer";
let computerAnswer = "NoAnswer";
let playerRoundScore = 0;
let comRoundScore = 0;
let playAgain = null;
let playerMatchCount = 0;
let comMatchCount = 0;

/**
 * NODES
 */
const rockButtonNode = document.querySelector("#rock");
const paperButtonNode = document.querySelector("#paper");
const scissorsButtonNode = document.querySelector("#scissors");
const roundResultNode = document.querySelector("#round-result");
const playerRoundScoreNode = document.querySelector("#player-round-score");
const computerRoundScoreNode = document.querySelector("#computer-round-score");
const gameScoreNode = document.querySelector("#game-score");



/**
 * EVENT LISTENERS
 */
rockButtonNode.addEventListener("click", function(){game("Rock");});
paperButtonNode.addEventListener("click", function(){game("Paper");});
scissorsButtonNode.addEventListener("click", function(){game("Scissors");});

function game(userAnswer) {
    /**
     * Generate COM answer
     * Display round's result
     * Display total rounds score
     * Once 5 rounds are reached, display game outcome
     * Display games won and lost
     * Display "choose an option to start a new game"
     * Start a new game if an option is clicked again
     */
    
    getOutcome(userAnswer, getComAnswer());
    updateScores();

}

function updateScores() {
    playerRoundScoreNode.innerHTML = `Player Score: ${playerRoundScore}`;
    computerRoundScoreNode.innerHTML = `COM Score: ${comRoundScore}`;
    gameScoreNode.innerHTML = `Game Score: <br> 
        Player: ${playerMatchCount} <br> 
        COM: ${comMatchCount}`;
}

function getComAnswer() {
    computerAnswer = Math.floor(Math.random() * 3) + 1;
    if (computerAnswer == 1)  {
            computerAnswer = "Rock";
        } else if (computerAnswer == 2) {
            computerAnswer = "Paper";
        } else if (computerAnswer == 3) {
            computerAnswer = "Scissors";
        }
    console.log("Computer answer is " + computerAnswer);
    return computerAnswer;

 }


function getOutcome(userChoice, computerChoice) {
    /* First checks for draw, which takes care of 3 out of 9 possible outcomes */
    
    if (userChoice == computerChoice) {
        displayRoundResult("Draw! Try again.");
        console.log("Entered draw state");
    } else {
        /* Checks for the remaining possible outcomes */
        switch (userChoice) {
            case "Rock": switch (computerChoice) {
                case "Paper": {displayRoundResult("You lose!"); comRoundScore += 1; break;}
                case "Scissors": {displayRoundResult("You win!"); playerRoundScore += 1; break;}
            }; break;
            
            case "Paper": switch (computerChoice) {
                case "Rock": {displayRoundResult("You win!"); playerRoundScore += 1; break;}
                case "Scissors": {displayRoundResult("You lose!"); comRoundScore += 1; break;}
            }; break;

            case "Scissors": switch (computerChoice) {
                case "Rock": {displayRoundResult("You lose!"); comRoundScore += 1; break;}
                case "Paper": {displayRoundResult("You win!"); playerRoundScore += 1; break;}
            }; break;
        }
    }    
}

function displayRoundResult (resultString) {
    roundResultNode.textContent = resultString;
}
