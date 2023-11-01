const validChoices = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {    
    const rand = Math.floor(Math.random() * validChoices.length);        
    return validChoices[rand];
}

function evaluatePlay(playerSelection, computerSelection) {
    // Normalize input
    playerSelectionFormatted = playerSelection.toLowerCase();
    computerSelectionFormatted = computerSelection.toLowerCase();

    let isWin = undefined;
    switch(playerSelectionFormatted) {        
        case "rock":            
            if(computerSelectionFormatted === "paper") {
                isWin = false;
                computerWins++;
            }
            else if(computerSelectionFormatted === "scissors" ) { 
                isWin = true;            
                playerWins++;
            }
            break;        
        case "paper":
            if(computerSelectionFormatted === "scissors") {
                isWin = false;
                computerWins++;
            }
            else if(computerSelectionFormatted === "rock" ) { 
                isWin = true;            
                playerWins++;
            }
            break;        
        case "scissors":
            if(computerSelectionFormatted === "rock") {
                isWin = false;
                computerWins++;
            }            
            else if(computerSelectionFormatted === "paper" ) { 
                isWin = true;            
                playerWins++;
            }
            break;
        default:
            console.log("player selection is invalid");
    }

    return isWin;
}

function playRound(playerSelection, computerSelection) {
    let isWin = evaluatePlay(playerSelection, computerSelection);    
    
    if(isWin === undefined) {
        return "It's a Tie!";
    }
    
    return isWin 
        ? `You Win! ${playerSelection} beats ${computerSelection}`
        : `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
    reset();    
    let currentRound = 0;    

    // Begin the game
    while(currentRound < 5) {   
        announce(`Round ${currentRound + 1} begins!`);
        // Get player selections
        var playerSelection = prompt("Make a selection: Rock, Paper, or Scissors")        
        var computerSelection = getComputerChoice();

        // Announce plays
        announce(`You chose: ${playerSelection}`);
        announce(`The computer chose: ${computerSelection}`);
        
        // Evaluate the plays
        var roundResults = playRound(playerSelection, computerSelection);
        console.log(roundResults);

        // Move onto the next round
        currentRound++;
    }

    // Determine Winner
    if(computerWins > playerWins) console.log("You Lose!");
    else if(playerWins > computerWins) console.log("You Win!");
    else {
        // Extremely rare edge case: both player and computer tie every round
        console.log("It's a tie!");
    }
}

function announce(msg) {
    console.log(msg);
}

function reset() {
    playerWins = 0;
    computerWins = 0;
}