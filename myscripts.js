let getComputerChoice = [{choice: 'Rock', value: 0 }, {choice: 'Paper', value: 1},{choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay () {
    let result = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
    return result;
}
function playRound (playerSelection, computerSelection) {
let playerSelectionL = prompt ("Choose Your Weapon");
return playerSelectionL.toLocaleUpperCase;
}