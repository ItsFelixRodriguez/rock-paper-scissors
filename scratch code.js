// This is everything that I came up with on my own for the rock paper scissors 
//game on my own. I am moving it here and starting blank bc I keep getting stuck
var choice = ["Rock", "Paper","Scissor"];

console.log("Play me in Rock Paper Scissors??");

function getComputerChoice(min,max){
   return Math.floor(Math.random() *(max-min*1)+min)
}
const rndChoice = getComputerChoice(1,4)
console.log(rndChoice);
if (rndChoice == 1) {
    console.log ( "Rock");
} else if (rndChoice == 2){
    console.log ("Paper");
} else  {
    console.log("Scissors")
}
function playRound(playerSelection, computerSelection) {
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


//let playerSelection = prompt("Choose Your Weapon");
//var playerSelectionUp = playerSelection.toUpperCase();

//if (playerSelectionUp = 'ROCK' || rndChoice == 1) {
  //console.log ( "You chose" + " "+ playerSelectionUp + " "+ "Your Opponent Chose" + " "+ "ROCK");
  //console.log ( "A TIE, Go Again")

//}else if (playerSelectionUp = 'PAPER') {
 //   console.log ( "hmmm" + " "+ playerSelectionUp + " "+ "interesting")
//}
//else if (playerSelectionUp = 'SCISSORS') {
//    console.log ('bitch');
//}


 //function playerSelection () {
  //let play  prompt ("Please choose your weapon")
//}

//function rps() {
 //   randChoice = choice[Math.floor(Math.random() * Math.length)];
   // return randChoice;
//}
//console.log(rps)

//return choice[Math.floor(Math.random() * Math.length)];   
//Console.log() 
//

let getComputerChoice = [{choice: 'Rock', value: 0 }, {choice: 'Paper', value: 1},{choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;

function computerPlay () {
    let result = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
    return result;
}

function playerChoice () {
let playerSelection = prompt("Choose Your Weapon");
const playerSelectionUp = playerSelection.toUpperCase();
return playerSelectionUp;
}

function playRound () {
console.log (computerSelection);
console.log(playerPick);
}
//const playerSelection = "Rock";
//const computerSelection = computerPlay ();
//console.log(playRound(playerSelection, computerSelection));
//const playerSelection = "rock";
//const computerSelection = result;
//const playerPick = playerSelectionUp;
//console.log(playRound(playerSelection, computerSelection));

let getComputerChoice = [{choice: 'ROCK', value: 0 }, {choice: 'PAPER', value: 1},{choice: 'SCISSORS', value: 2}];
let playerScore = 0;
let compScore = 0;

function computerPlay () {
    let computerChoice = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
    return computerChoice;
}

function getPlayerChoice () {
    let playerChoice = prompt("Choose your weapon!")
    let playerChoiceUp = playerChoice.toUpperCase ();
    return playerChoiceUp;
}

function playRound  (playerChoiceUp, computerChoice)  {
switch (playerChoiceUp + computerChoice){
    case 'SCISSORSPAPER' :
    case 'ROCKSCISSORS' :
    case 'PAPERROCK' :
        console.log('You chose' + ' '+ userChoice + ' '+ 'and the Computer chose' + ' ' + computerChoice + ' ' + 'You win!') 
        break
    case 'paperscissors' :
    case 'scissorsrock' :
    case 'rockpaper' :
        console.log('You chose' + ' ' +userChoice + ' ' +'and the Computer chose' + ' ' +computerChoice + ' '+ 'You lose!')
        break    
    case 'scissorsscissors' :
    case 'rockrock' :
    case 'paperpaper' :
        console.log ('You chose' + ' ' + userChoice + ' ' + 'and the Computer chose' +' ' + computerChoice + ' ' + 'A draw!') 
        break 
        }
}
