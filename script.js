let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const compImg = document.querySelector("#comp-img");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];

  // rock  , paper  , scissor

  const randomIdx = Math.floor(Math.random() * 3);

  return options[randomIdx];
};  

const compChoiceImg = (compChoice) => {
  if (compChoice === "rock") {
    compImg.src = "./rock hai.png";
  } else if (compChoice === "paper") {
    compImg.src = "./paper hai.png";
  } else {
    compImg.src = "./scissor hai.png";
  }
} 



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

  compChoiceImg(compChoice); // update computer choice image


  console.log("computer choice = ", compChoice);

  if (userChoice === compChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor , rock
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissor
      userWin = compChoice === "scissor" ? false : true;
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
