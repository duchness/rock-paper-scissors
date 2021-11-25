function computerPlay() {
  //generating a random number from 0 to 2
  let play = Math.floor(Math.random() * 3);

  //assigning a value to the previous numbers
  if (play === 0) {
    return "rock";
  } else if (play === 1) {
    return "paper";
  } else play === 2;
  return "scissors";
}

// let func = sayHi; copies the function inside the variable
// let func = sayHi(); copies the result of the function inside the variable
let playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
let computerSelection = computerPlay();

//making conditionals of every output

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "a fucking tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "computer fucking wins";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "player fucking wins";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "player fucking wins";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "a fucking tie";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "computer fucking wins";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "computer fucking wins";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "player fucking wins";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "a fucking tie, fuck off already";
  }
}

for (let i = 0; i < 5; i++) {
  playRound;
}

console.log(playRound());

// this loop worked

// function anAlert() {
//   alert("fuck you");
// }

// for (let i = 0; i < 5; i++) {
//   anAlert();
// }
