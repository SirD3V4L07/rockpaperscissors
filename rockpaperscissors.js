let userAnswer = "NoAnswer";
let computerAnswer = "NoAnswer";
let playerRoundScore = 0;
let comRoundScore = 0;
let playAgain = null;
let playerMatchCount = 0;
let comMatchCount = 0;



function getUserAnswer() {
    do {
        userAnswer = prompt("What is your choice?");
        convertUserAnswer(userAnswer);
        
        if (userAnswer != "Rock" && userAnswer != "Paper" && userAnswer != "Scissors") {
            alert("Invalid option! Try again.");
        }
    } while (userAnswer != "Rock" && userAnswer != "Paper" && userAnswer != "Scissors");
    
    console.log("User answer is " + userAnswer);
}

function convertUserAnswer(userChoice) {
    /* Convert first character to uppercase */
    let firstCharacter = userChoice.slice(0,1);
    firstCharacter = firstCharacter.toUpperCase();

    /* Convert remaining characters to lowercase */
    let remainingCharacters = userChoice.slice(1, userChoice.length);
    remainingCharacters = remainingCharacters.toLowerCase();

    /* Put together final result, capitalized string */
    userChoice = firstCharacter + remainingCharacters;
    userAnswer = userChoice;
}

function convertPlayAgainAnswer() {
    /* Convert first character to uppercase */
    let firstCharacter = playAgain.slice(0,1);
    firstCharacter = firstCharacter.toUpperCase();

    /* Convert remaining characters to lowercase */
    let remainingCharacters = playAgain.slice(1, playAgain.length);
    remainingCharacters = remainingCharacters.toLowerCase();

    /* Put together final result, capitalized string */
    playAgain = firstCharacter + remainingCharacters;
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
}


function getOutcome(userChoice, computerChoice) {
    /* First checks for draw, which takes care of 3 out of 9 possible outcomes */

    if (userChoice == computerChoice) {
        alert("Draw! Try again.");
        console.log("Entered draw state");
    } else {

        /* Checks for the remaining possible outcomes */
        switch (userChoice) {
            case "Rock": switch (computerChoice) {
                case "Paper": {alert("You lose!"); comRoundScore += 1; break;}
                case "Scissors": {alert("You win!"); playerRoundScore += 1; break;}
            }; break;
            
            case "Paper": switch (computerChoice) {
                case "Rock": {alert("You win!"); playerRoundScore += 1; break;}
                case "Scissors": {alert("You lose!"); comRoundScore += 1; break;}
            }; break;

            case "Scissors": switch (computerChoice) {
                case "Rock": {alert("You lose!"); comRoundScore += 1; break;}
                case "Paper": {alert("You win!"); playerRoundScore += 1; break;}
            }; break;
        }
    }
    
}

function game() {
    let roundCounter = 1;    
    
    
    console.log("=== NEW GAME ===");
    playerRoundScore = 0;
    comRoundScore = 0;

    do {
        console.log("Round " + roundCounter + "!");
        console.log("Choose an option!");
        console.log("| Rock | - | Paper | - | Scissors |");
        getUserAnswer();   
        getComAnswer();    
        getOutcome(userAnswer, computerAnswer); 
        console.log("Current score:");
        console.log("Player: " + playerRoundScore);
        console.log("COM: " + comRoundScore);
        roundCounter += 1;
    } while (roundCounter < 6);

    /**
     * Resolve match winner
     */

    if (playerRoundScore > comRoundScore) {
        console.log("YOU WIN THE MATCH!");
        alert("YOU WIN THE MATCH!");
        playerMatchCount += 1;
    } else if (comRoundScore > playerRoundScore) {
        console.log("YOU LOSE");
        alert("YOU LOSE!");
        comMatchCount += 1;
    } else {
        console.log("It's a draw!");
    }

    console.log("Matches Won:");
    console.log("Player: " + playerMatchCount);
    console.log("COM: " + comMatchCount);


}


do {
    game();    

    do {
        playAgain = prompt("Would you like to play again? (Yes/No)");
        convertPlayAgainAnswer();
        
        if (playAgain != "Yes" && playAgain != "No") {
            alert("Invalid option! Try again.");
        }
    } while (playAgain != "Yes"  && playAgain != "No");

    
} while (playAgain == "Yes");

console.log("Thanks for playing!");