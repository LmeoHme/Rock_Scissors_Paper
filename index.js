//#region Input validation
function getPlayerAgreement()
{
    let playerAgreement = prompt("Do you wanna play Rock - Scissors - Paper?\n1.Yes\n2.No");
    let validAgreement = validatePlayerAgreement(playerAgreement);
    if (validAgreement === "2" || validAgreement === "n" || validAgreement === "no") 
    {
        alert("Bye");
        return;
    }
    else return "yes";
}

function validatePlayerAgreement(playerAgreement)
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
                playerAgreement = prompt("Invalid chocie, please try again.\n1.Yes\n2.No");
                break;
        }
    }
}

function getPlayerChoice()
{
    let playerChoice = prompt("Please make a choice:\n1.Rock\n2.Scissors\n3.Paper\n0.Exit");
    let valicChoice = validatePlayerChoice(playerChoice);
    if (valicChoice === "exit" || valicChoice === "Exit" || valicChoice === "EXIT" || valicChoice === "0")
    {
        alert("Bye");
        return;
    }
    else return valicChoice;
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
    
}

if (getPlayerAgreement() === "yes")
{
    let playerScore = 0;
    let computerScore = 0;
    let isPlaying = true;
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();



    // console.log(playerChoice);
    // console.log(computerChoice);
    // while (isPlaying)
    // {

    // }


}