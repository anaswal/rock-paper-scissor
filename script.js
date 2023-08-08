function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const indexChoice = Math.floor(Math.random() * choice.length);
  return choice[indexChoice];
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(computerSelection, playerSelection) {
  if (computerSelection == "paper") {
    return `You lose! ${computerSelection} beats the ${playerSelection}`;
  } else if (computerSelection == "scissor") {
    return `You win! ${playerSelection} beats the ${computerSelection}`;
  } else {
    return `Draw`;
  }
}

const playerSelectionMe = "rock";

const result = playRound(computerSelection, playerSelectionMe);
console.log(result);
