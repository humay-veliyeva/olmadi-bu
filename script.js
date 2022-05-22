const yourChoiceArea = document.querySelector("#your-choice");
const computerChoiceArea = document.querySelector("#computer-choice");

let yourScore = 0;
let computerScore = 0;

const choices = ["paper", "scissors", "rock"];

const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");


    paper.addEventListener("click",game);
    scissors.addEventListener("click",game);
    rock.addEventListener("click",game);
 


    function game(){
        let yourChoice = this.id;
        let computerChoice = choices[randomChoice()];
        console.log(computerChoice)
        yourChoiceArea.src = `/img/${yourChoice}.png`;
        computerChoiceArea.src = `/img/${computerChoice}.png`;
    
        if(yourChoice == computerChoice){
           yourScore==yourScore;
           computerScore==computerScore;
        }
        else{
            if(yourChoice == "paper"){
                if(computerChoice == "scissors"){
                    computerScore++;
                    updateScore();
                    return;
                }
                else if(computerChoice == "rock"){
                    yourScore++;
                    updateScore();
                    return;
                }
            }
    
            if(yourChoice == "scissors"){
                if(computerChoice == "paper"){
                    yourScore++;
                    updateScore();
                    return;
                }
                else if(computerChoice == "rock"){
                    computerScore++;
                    updateScore();
                    return;
                }
            }
    
            if(yourChoice == "rock"){
                if(computerChoice == "paper"){
                    computerScore++;
                    updateScore();
                    return;
                }
                else if(computerChoice == "scissors"){
                    yourScore++;
                    updateScore();
                    return;
                }
            }
        }

    }


function randomChoice() {
    let number = Math.round(Math.random()*2);
    return number;
}
function updateScore(){
    const yourScoreArea = document.querySelector("#your-score");
    const computerScoreArea = document.querySelector("#computer-score");
     yourScoreArea.innerHTML = yourScore;
     computerScoreArea.innerHTML = computerScore;
}

// Preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load",()=> {
    setTimeout(()=> {
        preloader.style.display = "none";
    },1000)
})
