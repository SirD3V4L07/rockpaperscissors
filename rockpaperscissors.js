let userAnswer = "NoAnswer";
let computerAnswer = "NoAnswer";
let winner = null;


function getUserAnswer() {
    do {
        userAnswer = prompt("What is your choice?");
        
        if (userAnswer != "Rock" && userAnswer != "Paper" && userAnswer != "Scissors") {
            alert("Invalid option! Try again.");
        }
    } while (userAnswer != "Rock" && userAnswer != "Paper" && userAnswer != "Scissors");
    
    console.log("User answer is " + userAnswer);
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


function getOutcome() {
    /* First checks for draw, which takes care of 3 out of 9 possible outcomes */

    if (userAnswer == computerAnswer) {
        alert("Draw! Try again.");
        console.log("Entered draw state");
    } else {

        /* Checks for the remaining possible outcomes */
        switch (userAnswer) {
            case "Rock": switch (computerAnswer) {
                case "Paper": alert("You lose!"); break;
                case "Scissors": alert("You win!"); break;
            }; break;
            
            case "Paper": switch (computerAnswer) {
                case "Rock": alert("You win!"); break;
                case "Scissors": alert("You lose!"); break;
            }; break;

            case "Scissors": switch (computerAnswer) {
                case "Rock": alert("You lose!"); break;
                case "Paper": alert("You win!"); break;
            }; break;
        }
    }
    
}

console.log("Choose an option!");
console.log("1: Rock; 2: Paper; 3: Scissors;");
getUserAnswer();   
getComAnswer();    
getOutcome(); 