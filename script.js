    let playerScore = 0;
    let computerScore = 0;
    const computerOptions = ["rock", "paper", "scissors"];
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton =  document.querySelector('.scissors');          
    const outcomeDiv = document.querySelector('.outcome'); 
    const runningScoreDiv = document.querySelector('.running-score');
    const playerScoreSpan = document.querySelector('.player-score');
    const computerScoreSpan = document.querySelector('.computer-score')

    function resetGame(){
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
            
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again!";
        outcomeDiv.appendChild(playAgainButton);
            
        playAgainButton.addEventListener('click', () => {
            location.reload();
        })
    }

    function getComputerChoice() {
        const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]
        return computerChoice
    }    
        
    function checkRoundWinner (playerSelection, computerSelection){
        if (playerSelection == computerSelection){
            return "Tie"
        }
        else if(
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")
        ){
            return "Player";
        } else {
            return "Computer"
        }
    }

    function playRound(playerSelection,computerSelection) {                 
        const p = document.createElement('p');
        const result = checkRoundWinner(playerSelection,computerSelection)
        if (result == "Tie"){
            p.innerText = "It's a tie!"
        } else if (result == "Player"){            
            p.innerText = "You win! " + (playerSelection) + " beats " +(computerSelection)
            playerScore ++;
            checkFinalWinner(playerScore, computerScore);
        } else {            
            p.innerText = "You lose! " + (computerSelection) + " beat " +(playerSelection)
            computerScore ++;
            checkFinalWinner(playerScore, computerScore);
        }
        outcomeDiv.appendChild(p)       
            
    }

    const checkFinalWinner = (playerScore,computerScore) => {
        const h2 = document.createElement('h2');
        if(playerScore === 5){
            h2.classList.add('player-won');
            h2.innerText = `You won ${playerScore} to ${computerScore}`;
            resetGame();
        } else if (computerScore === 5){            
            h2.classList.add('computer-won');
            h2.innerText = `You lost ${playerScore} to ${computerScore}`;            
            resetGame();
        }
        outcomeDiv.append(h2);
    }

    const updateScores = (playerScore,computerScore) => {
        playerScoreSpan.innerText = `Player Score:  ${playerScore}`;
        computerScoreSpan.innerText = `Computer Score:  ${computerScore}`;
    }

    rockButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'rock'
        playRound(playerSelection,computerSelection);  
        updateScores(playerScore,computerScore);     
    } 
    );

    paperButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'paper'
        playRound(playerSelection,computerSelection);
        updateScores(playerScore,computerScore);  
    } 
    );

    scissorsButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'scissors'
        playRound(playerSelection,computerSelection);
        updateScores(playerScore,computerScore);     
    } 
    );
    
            
