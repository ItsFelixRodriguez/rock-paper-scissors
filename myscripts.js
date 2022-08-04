var choice = ["Rock", "Paper","Scissor"];



function rps() {
    let randChoice = choice[Math.floor(Math.random() * Math.length)];
    
}

function getComputerChoice(){
    rps();
    return randChoice;
}