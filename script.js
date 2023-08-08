function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const indexChoice = Math.floor(Math.random() * choice.length);
  return choice[indexChoice];
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(computerSelection, playerSelection) {
  switch (playerSelection) {
    case "rock":
      return computerSelection === "paper"
        ? `You lose! ${computerSelection} beats the ${playerSelection}`
        : computerSelection === "scissor"
        ? `You win! ${playerSelection} beats the ${computerSelection}`
        : "Draw!";

    case "paper":
      return computerSelection === "scissor"
        ? `You lose! ${computerSelection} beats the ${playerSelection}`
        : computerSelection === "rock"
        ? `You win! ${playerSelection} beats the ${computerSelection}`
        : "Draw!";
    case "scissor":
      return computerSelection === "rock"
        ? `You lose! ${computerSelection} beats the ${playerSelection}`
        : computerSelection === "paper"
        ? `You win! ${playerSelection} beats the ${computerSelection}`
        : "Draw!";
    default:
      return "Wrong choice!";
  }
}

const playerSelectionMe = prompt("Rock/Paper/Scissor :").toLowerCase();

const result = playRound(computerSelection, playerSelectionMe);
console.log(result);
