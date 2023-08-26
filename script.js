const playerChoice = document.querySelectorAll(".choice");
const result = document.querySelector('.result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resetButton = document.querySelector('.reset');

let computerPoint = 0;
let playerPoint = 0;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const indexChoice = Math.floor(Math.random() * choice.length);
  return choice[indexChoice];
}

function playRound(computerSelection, playerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === 'paper') {
        computerPoint++;
        computerScore.textContent = computerPoint;
        return `You lose! ${computerSelection} beats the ${playerSelection}`;
      } else if (computerSelection === 'scissor') {
        playerPoint++;
        playerScore.textContent = playerPoint;
        return `You win! ${playerSelection} beats the ${computerSelection}`;
      } else {
        return 'Draw';
      }

    case "paper":
      if (computerSelection === 'scissor') {
        computerPoint++;
        computerScore.textContent = computerPoint;
        return `You lose! ${computerSelection} beats the ${playerSelection}`;
      } else if (computerSelection === 'rock') {
        playerPoint++;
        playerScore.textContent = playerPoint;
        return `You win! ${playerSelection} beats the ${computerSelection}`;
      } else {
        return 'Draw';
      }

    case "scissor":
      if (computerSelection === 'rock') {
        computerPoint++;
        computerScore.textContent = computerPoint;
        return `You lose! ${computerSelection} beats the ${playerSelection}`;
      } else if (computerSelection === 'paper') {
        playerPoint++;
        playerScore.textContent = playerPoint;
        return `You win! ${playerSelection} beats the ${computerSelection}`;
      } else {
        return 'Draw';
      }

    default:
      return "Wrong choice!";
  }
}


// let i = 1;
// while (i <= 5) {
//   const computerSelection = getComputerChoice();
//   const playerSelectionMe = prompt("Rock/Paper/Scissor :").toLowerCase();
//   console.log(playRound(computerSelection, playerSelectionMe));
//   i++;
// }

playerChoice.forEach((button) => {
  button.addEventListener("click", (e) => {
    const computerSelection = getComputerChoice();
    const buttonValue = e.target.firstChild.textContent;
    const winner = playRound(computerSelection, buttonValue.toLowerCase())
    result.innerText = winner;
  });
});

resetButton.addEventListener('click', () => {
  window.location.reload();
});