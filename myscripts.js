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
  console.log ("Aye you win!");
    
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
console.log() 