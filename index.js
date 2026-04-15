//#region Input validation
function getPlayerAgreement(promote)
{
    let playerAgreement = prompt(promote);
    let validAgreement = validatePlayerAgreement(playerAgreement, promote);
    if (validAgreement === "2" || validAgreement === "n" || validAgreement === "no") 
    {
        alert("Bye");
        return;
    }
    else return "yes";
}

function validatePlayerAgreement(playerAgreement, promote)
{
    let isValidAgreement = false;
    while (!isValidAgreement)
    {
        if (playerAgreement === null || playerAgreement === undefined) return "no";
        playerAgreement = playerAgreement.trim().toLowerCase();
        switch (playerAgreement) 
        {
            case "1": case "2": case "y": 
            case "n": case "yes": case "no":
            isValidAgreement = true;
            return playerAgreement;
            default:
                playerAgreement = prompt("Invalid chocie, please try again.\n" + promote);
                break;
        }
    }
}

function getPlayerChoice()
{
    let playerChoice = prompt("Please make a choice:\n1.Rock\n2.Scissors\n3.Paper\n0.Exit");
    let validChoice = validatePlayerChoice(playerChoice);
    return validChoice;
}

function validatePlayerChoice(playerChoice)
{
    let isvalidChoice = false;
    while (!isvalidChoice)
    {
        if (playerChoice === null || playerChoice === undefined) return "exit";
        playerChoice = playerChoice.trim().toLowerCase();
        switch (playerChoice) 
        {
            case "1": case "2": case "3": case "0": 
            case "rock": case "scissors": case "paper": case "exit":
            case "Rock": case "Scissors": case "Paper": case "Exit":
            case "ROCK": case "SCISSORS": case "PAPER": case "EXIT":
            isvalidChoice = true;
            return playerChoice;
            default:
                playerChoice = prompt("Invalid chocie, please try again.\n1.Rock\n2.Scissors\n3.Paper\n0.Exit");
                break;
        }
    }
}
//#endregion

//#region Gane Flow Logic Handling
function getComputerChoice()
{
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3)
    {
        return "rock";
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3)
    {
        return "scissors";
    }
    else return "paper";
}

function getWinner(playerChoice, computerChoice)
{
    if 
    (((playerChoice === "1" || playerChoice === "rock") && computerChoice === "scissors") || 
     ((playerChoice === "2" || playerChoice === "scissors") && computerChoice === "paper") ||
     ((playerChoice === "3" || playerChoice === "paper") && computerChoice === "rock"))
    {
        return "player wins";
    }
    else if  
    (((playerChoice === "1" || playerChoice === "rock") && computerChoice === "paper") || 
     ((playerChoice === "2" || playerChoice === "scissors") && computerChoice === "rock") ||
     ((playerChoice === "3" || playerChoice === "paper") && computerChoice === "scissors"))
     {
        return "computer wins";
     }
     else return "draw";
}

function getFinalWinner()
{
    let playerScore = 0;
    let computerScore = 0;
    let isPlaying = true;

    while (isPlaying)
    {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        if (playerChoice === "exit" || playerChoice === "Exit" || playerChoice === "EXIT" || playerChoice === "0")
        {
            break; 
        }
    
        switch(getWinner(playerChoice, computerChoice))
        {
            case "player wins":
                playerScore++;
                alert("You won this round.")
                console.log("Player wins")
                break;
            case "computer wins":
                computerScore++;
                alert("Computer won this round.")
                console.log("Comp wins")
                break;
            case "draw":
                alert("Draw. Re-fight.")
                console.log("Draw");
                break;
        }

        console.log(playerScore);
        console.log(computerScore);

        if (playerScore === 3 || computerScore === 3) isPlaying = false;
    }

    if (playerScore === 3) return "player won";
    else if (computerScore === 3) return "computer won"
    else return "exit";
}
//#endregion

if (getPlayerAgreement("Do you wanna play Rock - Scissors - Paper?\n1.Yes\n2.No") === "yes")
{
    let isPlaying = true;
    while (isPlaying)
    {
        let result = getFinalWinner();
        if (result === "player won") 
        {
            alert("Congratulations! You won the match!");
            if (getPlayerAgreement("Get another domination?\n1.Why not?\n2.No thanks") !== "yes") isPlaying = false;
        }
        else if (result === "computer won")
        {
            alert("Computer won the match.");
            if (getPlayerAgreement("Wanna re-match?\n1.Revenge\n2.Nah!") !== "yes") isPlaying = false;
        }
        else 
        {
            alert("Bye");
            isPlaying = false;
        }
    }
}