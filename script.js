let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randIx];
}

const drawGame = () => {
    console.log("Game was Draw");
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win");
    } else {
        console.log("You Lose");
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
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})