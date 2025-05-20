// Create a function name getComputerChoice
// This will randomly return one of the strings "Rock, Paper or Scissors"
// Make Rock, Paper, and scissors in a list. Then get a random number between 0-2.

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}
//Create a function name getHumanChocie, this will get the user's input.
//User's input should range from 0-2. 

function getHumanChoice(){
    let human = prompt("Let's play a game. Rock, Papers, or Scissors? Please enter your answer.");
    return human;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
         return "You Win! Rock beats Scissors.";
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "You Lose! Paper beats Rock."
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return "You Lose! Rock beats Scissors.";

    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You Win! Scissors beats Paper.";
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "You Lose! Scissors beats Paper.";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You Win! Paper beats Rock.";
    }

}


function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore){
        return "Human Wins!";

    } else if (computerScore > humanScore){
        return "Computer Wins!";
    } else {
        return "It's a tie!";
    }
}

console.log(playGame());