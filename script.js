let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];

  // rock  , paper  , scissors

  const randomIdx = Math.floor(Math.random() * 3);

  return options[randomIdx];
};

const drawgame = () => {
    console.log("It's a tie!");
    msg.innerText = "It's a tie! .. play again";

};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
  } else {
      compScore++;
    compScorePara.innerText = compScore;
      console.log("You Lost !");
      msg.innerText = `You Lost ! Your ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  //generate computer choice

  const compChoice = genCompChoice();

  console.log("computer choice = ", compChoice);

  if (userChoice === compChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors , rock
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock , paper
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
