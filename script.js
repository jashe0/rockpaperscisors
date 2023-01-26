    const computerOptions = ["rock", "paper", "scissors"];
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton =  document.querySelector('.scissors');           
    const outcomeDiv = document.querySelector('.outcome'); 

    function getComputerChoice() {
        const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]
        return computerChoice
    }    
        
    function checkWinner (playerSelection, computerSelection){
        if (playerSelection == computerSelection){
            return "Tie"
        }
        else if(
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")
        ){
            return "Player"
        } else {
            return "Computer"
        }
    }

    function playRound(playerSelection,computerSelection) {                
        const result = checkWinner(playerSelection,computerSelection)
        if (result == "Tie"){
            const p = document.createElement('p');
            p.innerText = "It's a tie!"
            outcomeDiv.appendChild(p)
            /**return "It's a tie!"**/
        } else if (result == "Player"){
            /**return "You win! " + (playerSelection) + " beats " +(computerSelection)**/
            const p = document.createElement('p');
            p.innerText = "You win! " + (playerSelection) + " beats " +(computerSelection)
            outcomeDiv.appendChild(p)
        } else {
            /**return "You lose! " + (computerSelection) + " beat " +(playerSelection)**/
            const p = document.createElement('p');
            p.innerText = "You lose! " + (computerSelection) + " beat " +(playerSelection)
            outcomeDiv.appendChild(p)

        }
                
            
    }

    /** function getPlayerChoice() {
        let validatedInput = false;
        while(validatedInput == false){
                const playerChoice = prompt("Rock, paper or scissors?");
                        if (playerChoice == null){
                            continue;
                        } 
                        const choiceInLower = playerChoice.toLowerCase();
                        if (computerOptions.includes(choiceInLower)){
                            validatedInput = true;
                            return choiceInLower;
                        }
        }
    } **/

    rockButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'rock'
        playRound(playerSelection,computerSelection);
    } 
    );

    paperButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'paper'
        playRound(playerSelection,computerSelection);
    } 
    );

    scissorsButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'scissors'
        playRound(playerSelection,computerSelection);
    } 
    );


    /**function game() {
                let playerScore = 0;
                let computerScore = 0;
                console.log("Welcome!")
                for (let i = 0; i < 5; i++) {
                const playerSelection = getPlayerChoice();
                const computerSelection =  getComputerChoice();
                console.log(playRound(playerSelection,computerSelection));
                if (checkWinner(playerSelection,computerSelection)=="Player"){
                    playerScore ++;
                } else if (checkWinner(playerSelection, computerSelection)=="Computer") {
                    computerScore++;
                }
                }    
                 console.log("Game over")
                if(playerScore > computerScore){
                    console.log("Player won the game!");
                }else if (playerScore < computerScore){
                    console.log("Computer won the game!");
                }else{
                    console.log("It was a tie!"); 
                }        
            }   
    game()**/      
            
