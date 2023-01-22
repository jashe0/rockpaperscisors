    const computerOptions = ["rock", "paper", "scissors"];
                

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
            return "It's a tie!"
        } else if (result == "Player"){
            return "You win! " + (playerSelection) + " beats " +(computerSelection)
        } else {
            return "You lose! " + (computerSelection) + " beat " +(playerSelection)
        }
                
            
    }

    function getPlayerChoice() {
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
    } 

    function game() {
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
    
    game()      
            
