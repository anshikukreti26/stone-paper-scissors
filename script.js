let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");

const genCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randIx];
}

const drawGame = () => {
    msg.innerText = "Game Draw";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You Lose ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate Computer Choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //Draw Condition
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})