// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice == 0){
      if (computerChoice == 0){
        return 0; //draw
      } else if (computerChoice == 1){
        return 1; //comp win
      } else if (computerChoice == 2){
        return 2; //human win
      }
    } else if (humanChoice == 1){
      if (computerChoice == 0){
        return 2; //human win
      } else if (computerChoice == 1){
        return 0; //draw
      } else if (computerChoice == 2){
        return 1; //comp win
      }
    } else if (humanChoice == 2){
      if (computerChoice == 0){
        return 1; //comp win
      } else if (computerChoice == 1){
        return 2; //human win
      } else if (computerChoice == 2){
        return 0; //draw                                
      }
    }
  }
  
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
  // return 0, 1, 2 (rock, paper, scissors)
}
// const humanSelection = getHumanChoice();

function returnChoice(choice) {
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playGame(total_play) {
  for (let round = 1; round <= total_play; round ++){
    const computerSelection = getComputerChoice();
    // console.log(computerSelection);
  
    const prompt = require("prompt-sync")();
    let humanSelection = parseInt(prompt("Please enter your choice (0:rock, 1:paper, 2:scissors): "));
    // console.log(humanSelection);
    let compChoice = returnChoice(computerSelection)
    let humanChoice = returnChoice(humanSelection)
    console.log(`You play ${humanChoice}, Computer play ${compChoice}`);
      
    let result = playRound(humanSelection, computerSelection);
    if (result == 1){
      computerScore ++;
      console.log(`Computer wins!`);
    } else if (result == 2){
      humanScore ++;
      console.log(`Human wins!`);
    } else {
      console.log(`Its a draw!`)
    }

  }
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);  

}

playGame(5);

