// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.choice-button')

buttons.forEach(button =>{
  button.addEventListener('click', function(){
    console.log(button.value);
    playRound(button.value);
  })
})

function returnChoice(choice) {
  switch (parseInt(choice)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function returnMatch(result) {
  if (result == 1){
    computerScore ++;
    return `Computer wins!`;
  } else if (result == 2){
    humanScore ++;
    return `Player wins!`;
  } else {
    return `Its a draw!`;
  }
}

function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

function playRound(humanSelection) {
    let compSelection = getComputerChoice();
    let compChoice = returnChoice(compSelection)
    let humanChoice = returnChoice(humanSelection)
    let playChoice = `You play ${humanChoice}, Computer plays ${compChoice}`;
    // your code here!
    // 0, 1, 2 => rock, paper, scissors
    let output = "";
    let result = "";
    if (humanSelection == 0){
      if (compSelection == 0){
        output = 0; //draw
      } else if (compSelection == 1){
        output = 1; //comp win
      } else if (compSelection == 2){
        output = 2; //human win
      }
    } else if (humanSelection == 1){
      if (compSelection == 0){
        output = 2; //human win
      } else if (compSelection == 1){
        output = 0; //draw
      } else if (compSelection == 2){
        output = 1; //comp win
      }
    } else if (humanSelection == 2){
      if (compSelection == 0){
        output = 1; //comp win
      } else if (compSelection == 1){
        output = 2; //human win
      } else if (compSelection == 2){
        output = 0; //draw                                
      }
    }
    result = returnMatch(output);
    if (humanScore == 5 || computerScore == 5){
      result += '<br><b>Reload the page to play again.</b>';
      disableButtons();
    }

    // update result in the html
    document.getElementById('play-choice').innerHTML = playChoice
    document.getElementById('result').innerHTML = result
    document.getElementById('result-playerscore').innerHTML = `<b>Player:</b> ${humanScore}`;
    document.getElementById('result-computerscore').innerHTML = `<b>Computer:</b> ${computerScore}`;
  }
  
  
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
  // return 0, 1, 2 (rock, paper, scissors)
}



// function playGame(total_play) {
//   for (let round = 1; round <= total_play; round ++){
//     const computerSelection = getComputerChoice();
//     // console.log(computerSelection);
  
//     const prompt = require("prompt-sync")();
//     let humanSelection = parseInt(prompt("Please enter your choice (0:rock, 1:paper, 2:scissors): "));
//     // console.log(humanSelection);
//     let compChoice = returnChoice(computerSelection)
//     let humanChoice = returnChoice(humanSelection)
//     console.log(`You play ${humanChoice}, Computer play ${compChoice}`);
      
//     let result = playRound(humanSelection, computerSelection);
//     if (result == 1){
//       computerScore ++;
//       console.log(`Computer wins!`);
//     } else if (result == 2){
//       humanScore ++;
//       console.log(`Human wins!`);
//     } else {
//       console.log(`Its a draw!`)
//     }

//   }
//   console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);  

// }

// playGame(5);

