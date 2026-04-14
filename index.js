function getPlayerAgreement()
{
    let playerAgreement = prompt("Do you wanna play Rock - Scissors - Paper?\n1.Yes\n2.No");
    let validAgreement = validatePlayerAgreement(playerAgreement);
    if (validAgreement === "2" || validAgreement === "n" || validAgreement === "no") 
        {
            alert("Bye");
            return;
        }
    else return;
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
                playerAgreement = prompt("Invalid chocie, please try again");
                break;
        }
    }
}

function getPlayerChoice()
{
    let playerChoice = prompt("Please make a choice:\n1.Rock\n2.Scissors\n3.Paper\n0.Exit");
    let valicChoice = validatePlayerChoice(playerAgreement);
    if (validAgreement === "2" || validAgreement === "n" || validAgreement === "no") 
        {
            alert("Bye");
            return;
        }
    else return;

}

