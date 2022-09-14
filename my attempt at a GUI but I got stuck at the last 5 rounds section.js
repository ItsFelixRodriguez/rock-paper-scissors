document.querySelector('#Rock').onclick = function() {
    userChoice = "Rock";
    playRound();
}
document.querySelector('#Paper').onclick = function() {
    userChoice = "Paper";
    playRound();
}
document.querySelector('#Scissors').onclick = function() {
    userChoice = "Scissors";
    playRound()
}

const resultDisplay = document.querySelector('#result')
const score = document.querySelector('#score')
const tally = document.querySelector('#tally')

let playerScore = 0 ;
let computerScore = 0; 



function playRound () {
var playerSelection = `${userChoice}`; 
console.log (playerSelection);
function getComputerChoice () {
let randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber === 1) {
        return "Rock";
    }
else if (randomNumber === 2) {
        return 'Paper';
    }
else if (randomNumber === 3){
        return "Scissors"
    }
}
computerSelection = getComputerChoice ();
console.log (computerSelection);

resultDisplay.textContent = `You Chose ${userChoice} & The Computer Chose ${computerSelection}`
if ((userChoice === computerSelection)){
score.textContent = "A tie!";
} else if ((userChoice === 'Rock') && (computerSelection === 'Scissors') || (userChoice === 'Paper') && (computerSelection === 'Rock') || (userChoice === 'Scissors') && (computerSelection === 'Paper')){
playerScore++;
score.textContent = `You Win the Round! ${userChoice} beats ${computerSelection}`;
} else if  ((userChoice === 'Scissors')&& (computerSelection === 'Rock') || (userChoice === 'Rock') && (computerSelection === 'Paper') || (userChoice === 'Paper') && (computerSelection === 'Scissors')) {
computerScore++;
score.textContent =  `You lose the Round! ${computerSelection} beats ${playerSelection}`;
}

for (let i = 0; i < 5; i++){
    tally.textContent = `Player score: ${playerScore} & Computer Score: ${computerScore}`;
}
if (playerScore > computerScore) {
    tally.append = "YOU ARE THE WINNER! 😄";
}
else if(playerScore < computerScore){
    tally.append = "The computer won!";
}
else {
    tally.append ="It's a draw!";
}  
}