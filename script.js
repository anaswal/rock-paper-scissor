const playerChoice = document.querySelectorAll(".choice");
const result = document.querySelector('.result');

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const indexChoice = Math.floor(Math.random() * choice.length);
  return choice[indexChoice];
}

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
