console.log("🦆 Linkin' duck");

//DOM DISPLAYS
const playerScoreDigit = document.querySelector("#playerScore");
const cpuScoreDigit = document.querySelector("#cpuScore");
const roundResultDisplay = document.querySelector("#roundResultDisplay");
const buttons = document.querySelectorAll(".buttons button");

//GAME LOGIC
let playerScore = 0;
let cpuScore = 0;

const getComputerChoice = () => {
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  return computerChoice;
};

const playRound = (player, cpu) => {
  let finalResult = player + cpu;

  if (player === cpu) roundResultDisplay.textContent = "It's a tie";
  else if (
    finalResult === "RockScissors" ||
    finalResult === "ScissorsPaper" ||
    finalResult === "PaperRock"
  ) {
    roundResultDisplay.textContent = `You win! ${player} defeats ${cpu}`;
    playerScore++;
    playerScoreDigit.textContent = playerScore;
  } else {
    roundResultDisplay.textContent = `You lost! ${cpu} defeats ${player}`;
    cpuScore++;
    cpuScoreDigit.textContent = cpuScore;
  }
};

const game = (player, cpu) => {
  if (playerScore < 5 && cpuScore < 5) playRound(player, cpu);

  if (playerScore === 5) {
    roundResultDisplay.textContent = "Congratulations! You won the game"
    return;
  } else if (cpuScore === 5) {
    roundResultDisplay.textContent = "You lost! Wanna try again?"
    return;
  }
};

//ACTIVATING THE GAME
for (const button of buttons) {
  button.addEventListener("click", function () {
    game(button.value, getComputerChoice());
  });
}
