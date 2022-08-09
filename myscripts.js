function computerPlay () {
    let randomNumber = Math.floor(Math.random() *3)+1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return 'paper';
    }
    else if (randomNumber === 3){
        return "scissors"
    }
}
    
let playerSCore = 0;
let computerScore = 0;

function results(playerSelection, computerSelection) {
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return 'You won! ${playerSelection} beats ${computerSelection}';
    }
    else if ((playerSelection === "paper") && (computerSelection === "paper")) {
        return 'You won! ${playerSelection} beats ${computerSelection}';
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return 'You won! ${playerSelection} beats ${computerSelection}';
    }
    else if (computerSelection === playerSelection) {
        return 'It is a tie' ;
    }
    else {
        computerScore++;
        return 'You lost! ${computerSelection} beats ${playerSelection}';
    }
}

function game(selection) {
    if ((selection !== "rock") && (selection !== "paper") && (selection !== "scissors")) {
        alert("You have entered an incorrect choice!\nYou need to select either rock, paper or scissors");
    }
    else {
        return results(selection, computerPlay());
    }
}

let i = 0;

while (i < 5) {
    let result = prompt("Type rock, paper, or scissors!");
    result = result.toLowerCase();
    console.log(game(result));
    console.log('Player score : ${playerScore} & Computer score : ${computerScore}');
    i++;
}
if (playerScore > computerScore) {
    console.log("YOU ARE THE WINNER! 😄");
}
else if(playerScore < computerScore){
    console.log("The computer won!");
}
else {
    console.log("It's a draw!");
}