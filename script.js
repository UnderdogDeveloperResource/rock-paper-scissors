const validChoices = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;

window.addEventListener('load', initialize);

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
    
    let roundResult = "";
    if(isWin === undefined) {
        roundResult = "It's a Tie!";
    }
    else {
        roundResult =  isWin 
            ? `You Win! ${playerSelection} beats ${computerSelection}`
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    console.log(roundResult);
    updateRoundScore(roundResult);
    updateRunningScore();
}

function updateRoundScore(result) {
    const scoreCard = document.querySelector('#roundScore');
    scoreCard.textContent = result;
}

function updateRunningScore() {
    const runningScore = document.querySelector("#runningScore");
    runningScore.textContent = `Player Round Wins: ${playerWins}. Computer Round Wins: ${computerWins}`;

    if(playerWins >= 5 || computerWins >= 5) {
        if(computerWins > playerWins)  {
            runningScore.textContent = "GAME OVER! You Lose!";
        }
        else if(playerWins > computerWins) {
            runningScore.textContent = "GAME OVER! You Win!";
        }
        else {
            // Rare edge case: both player and computer tie every round
            runningScore.textContent = "It's a tie!";
        }
    }
}

function announce(msg) {
    console.log(msg);
}

function initialize() {
    playerWins = 0;
    computerWins = 0;

    // Add event listeners
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {           

        btn.addEventListener('click', () => {                        
            // Get player selections
            var playerChoice = btn.textContent;                
            var computerChoice = getComputerChoice();

            announce(`You chose: ${playerChoice}`);
            announce(`The computer chose: ${computerChoice}`);

            playRound(playerChoice, computerChoice);
        });
    });
}