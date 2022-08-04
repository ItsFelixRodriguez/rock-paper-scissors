var choice = ["Rock", "Paper","Scissor"];

console.log("Hello World");

function getComputerChoice(min,max){
   return Math.floor(Math.random() *(max-min*1)+min)
}
const rndChoice = getComputerChoice(1,4)
console.log(rndChoice);
if (rndChoice == 1) {
    console.log ( "Rock");
} else if (rndChoice == 2){
    console.log ("Paper");
} else if (rndChoice== 3) {
    console.log("Scissors")
}

//function rps() {
 //   randChoice = choice[Math.floor(Math.random() * Math.length)];
   // return randChoice;
//}
//console.log(rps)

//return choice[Math.floor(Math.random() * Math.length)];   
console.log() 