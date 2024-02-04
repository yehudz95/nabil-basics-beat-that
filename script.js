var gameMode = "gameStart";
var roundNumber = 1;
var button = document.getElementById("submit-button");
var d1Roll;
var d2Roll;
var chosenNumber1;
var chosenNumber2;
var outputMsg = ``;
var p1Score = 0;
var p2Score = 0;

function getDiceRoll() {
  var rolledDice = Math.floor(Math.random() * 6 + 1);
  return rolledDice;
}

function main(input) {
  //start game
  if (gameMode == "gameStart") {
    button.innerText = "Roll";
    outputMsg = `Round ${roundNumber} is starting. Player 1 press roll to begin.`;
    gameMode = "p1Roll";
    button.innerText = "Roll";
  }

  //Player1 rolls dice
  else if (gameMode == "p1Roll") {
    d1Roll = getDiceRoll().toString();
    d2Roll = getDiceRoll().toString();

    if (d1Roll == d2Roll) {
      chosenNumber1 = Number(d1Roll + d2Roll);
      outputMsg = `You rolled ${d1Roll} for both dices. Your number is: ${chosenNumber1}`;
      button.innerText = "Roll";
      gameMode = "p2Roll";
    } else {
      gameMode = "p1Choose";
      outputMsg = `You rolled:<br> Dice One: ${d1Roll}<br> Dice Two: ${d2Roll}<br>Choose which dice goes first:<br>Enter 1 for Dice One, Enter 2 for Dice Two.`;
      button.innerText = "Choose";
    }
  }

  //Player 1 decides which dice to use first
  else if (gameMode == "p1Choose") {
    if (input != 1 && input != 2) {
      outputMsg = "Invalid input. Enter 1 for Dice One, Enter 2 for Dice Two.";
    } else {
      if (input == 1) {
        chosenNumber1 = Number(d1Roll + d2Roll);
        button.innerText = "Roll";
        outputMsg = `Player 1. Your number is ${chosenNumber1}.<br>Player 2. Press Roll to roll your dice.`;
      } else if (input == 2) {
        chosenNumber1 = Number(d2Roll + d1Roll);
        button.innerText = "Roll";
        outputMsg = `Player 1. Your number is ${chosenNumber1}.<br>Player 2. Press Roll to roll your dice.`;
      }
      gameMode = "p2Roll";
    }
  }
  //   //Player 2 rolls dice
  else if (gameMode == "p2Roll") {
    d1Roll = getDiceRoll().toString();
    d2Roll = getDiceRoll().toString();

    if (d1Roll == d2Roll) {
      chosenNumber2 = Number(d1Roll + d2Roll);
      outputMsg = `You rolled ${d1Roll} for both dices. Your number is: ${chosenNumber2}`;
      button.innerText = "Roll";
      gameMode = "results";
    } else {
      gameMode = "p2Choose";
      outputMsg = `You rolled:<br> Dice One: ${d1Roll}<br> Dice Two: ${d2Roll}<br>Choose which dice goes first:<br>Enter 1 for Dice One, Enter 2 for Dice Two.`;
      button.innerText = "Choose";
    }
  }

  //   //Player 2 decides which dice to use first
  else if (gameMode == "p2Choose") {
    if (input != 1 && input != 2) {
      outputMsg = "Invalid input. Enter 1 for Dice One, Enter 2 for Dice Two.";
    } else {
      if (input == 1) {
        chosenNumber2 = Number(d1Roll + d2Roll);
        button.innerText = "Results";
        outputMsg = `Player 2. Your number is ${chosenNumber2}.<br> Press Results to continue.`;
      } else if (input == 2) {
        chosenNumber2 = Number(d2Roll + d1Roll);
        button.innerText = "Results";
        outputMsg = `Player 2. Your number is ${chosenNumber2}.<br> Press Results to continue.`;
      }
      gameMode = "results";
    }
  }
  //   //Winner
  else if (gameMode == "results") {
    if (chosenNumber1 > chosenNumber2) {
      outputMsg = `Player 1 played ${chosenNumber1}, Player 2 played ${chosenNumber2}.<br>
  Player 1 wins.`;
    } else {
      outputMsg = `Player 1 played ${chosenNumber1}, Player 2 played ${chosenNumber2}.<br>
  Player 2 wins.`;
    }
  }
  //   //Score
  else if (gameMode == "score") {
  }
  //   //Restart
  else if (gameMode == "restart") {
  }
  return outputMsg;
}
