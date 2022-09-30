console.log("🦆 Linkin' duck");

let playerScore = 0;
let cpuScore = 0;

getComputerChoice = () => {
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  return computerChoice;
};

let playRound = (playerSelection, computerSelection) => {
  computerSelection = getComputerChoice();
  playerSelection = prompt("pick your weapon").toLocaleLowerCase();

  let resultString = playerSelection + computerSelection;
  if (playerSelection === computerSelection) {
    console.log("it's a tie");
  } else if (
    resultString === "rockscissors" ||
    resultString === "paperrock" ||
    resultString === "scissorspaper"
  ) {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    playerScore++;
  } else {
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
    cpuScore++;
  }
};

game = () => {
  for (let i = 0; playerScore < 5 && cpuScore < 5; i++) {
    playRound();
  }

  if (playerScore === 5) {
    console.log("You won the game!");
  } else {
    console.log("You lose the game");
  }
};

game();
