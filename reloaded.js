// RPS Reloaded JS Scripts

let playerScore = 0 ;
let computerScore = 0; 

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3)+1;
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

function playRound () {
 
    var playerSelection = window.prompt("Choose your Weapon!", " ");
    playerSelection = playerSelection.toLowerCase();
    console.log (playerSelection);
    function getComputerChoice () {
        let randomNumber = Math.floor(Math.random()*3)+1;
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
   computerSelection = getComputerChoice ();
   console.log (computerSelection);
if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
    playerScore ++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;

} 
else if ((playerSelection === 'paper') && (computerSelection === 'rock')){
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
   
}
 else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
    playerScore++
    return `You Win! ${playerSelection} beats ${computerSelection}`;
    
}
 else if (computerSelection === playerSelection) {
    return "A tie!";
}
 else {
    computerScore ++
    return `You lose! ${computerSelection} beats ${playerSelection}`;
 }
}
function game (selection) {
    if ((selection !== 'rock') && (selection !== 'paper') & (selection !== 'scissors')){
        alert("You have entered some bullshit, you need to select either rock, paper or scissors");
    } else {
        return playRound (playerSelection, computerSelection());
    }
    for (let i = 0; i < 5; i++){
        playRound ()
        console.log(game);
        console.log( `Player score: ${playerScore} & Computer Score: ${computerScore}`);
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
}
