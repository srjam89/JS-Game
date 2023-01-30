alert("Please open your console using keyboard shortcut Command+Option+J");
console.log("Welcome!");
console.log("This is a game of Rock, Paper, Scissors");
console.log("Please call the function game() to start.");

const game = function () {
  let userScore = 0;
  let computerScore = 0;
  let numberRound = 0;
  console.clear();
  console.log("The game has started!");
  for (let i = 0; i < 5; i++) {
    let playerSelection = getUserInput();
    let computerSelection = computerPlay();
    numberRound++;
    console.log(`The round is ${numberRound}`);
    let round = playRound(playerSelection, computerSelection);
    if (round.win) {
      userScore++;
    }
    if (round.lose) {
      computerScore++;
    }
    console.log(
      `You threw ${playerSelection} and the computer threw ${computerSelection}`
    );
    console.log(round.statement);
  }
  return gameOver(userScore, computerScore);
};

const gameOver = function (userScore, computerScore) {
  const scores = `You scored ${userScore}, and the computer scored ${computerScore}`;
  let result = "The game is a tie! Try again!";
  if (userScore > computerScore) {
    result = `You're the winner!`;
  } else if (userScore < computerScore) {
    result = `You lose, call the function game() to try again!`;
  }
  console.log(scores);
  console.log(result);
  return { scores, result };
};

const choices = ["rock", "paper", "scissors"];
const computerPlay = function () {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

const validateUserInput = function (userInput) {
  const input = userInput.toLowerCase().trim();
  if (choices.includes(input)) {
    return input;
  }
  alert(`${userInput} is not a valid choice. Please enter a valid choice!`);
  return getUserInput();
};

const getUserInput = function () {
  const input = prompt("Please pick your weapon: rock, paper or scissors");
  return validateUserInput(input);
};

const playRound = function (playerSelection, computerSelection) {
  const combined = `${playerSelection}${computerSelection}`;
  const result = { statement: "", win: false, lose: false };
  switch (combined) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      result.statement = `You win! ${playerSelection} beats ${computerSelection}`;
      result.win = true;
      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      result.statement = `You lose, ${computerSelection} beats ${playerSelection};`;
      result.lose = true;
      break;
    default:
      result.statement = `This round is a tie!`;
      break;
  }
  return result;
};
