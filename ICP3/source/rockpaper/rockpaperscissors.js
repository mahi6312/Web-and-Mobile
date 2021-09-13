//initial player and computer score
let player = 0;
let computer = 0;
let playerNumber;
let computerNumber;
let gameStatusText = "";
let gameStatus="";
// get player score
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");

// get buttons with id
let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let sessiorButton = document.getElementById("sessiorButton");

// output elements
let outputTextContainer = document.getElementById("outputTextContainer");
let computerChoice = document.getElementById("computerChoice");
let playerChoice = document.getElementById("playerChoice");
let resultText = document.getElementById("resultText");
// computer choice text
let computerChoiceText = "";
let playerChoiceText = "";

//display initial score of player and computer by calling function updateScore();
function updateScore(){
    playerScore.textContent = player;
    computerScore.textContent = computer;
}
updateScore();

function displayText(){
    outputTextContainer.style.display="block";
    //computer choice text
    if(computerChoiceText==="Rock"){
        computerChoice.style.color="red";
    }else if (computerChoiceText==="Paper"){
        computerChoice.style.color="green";
    }
    else if(computerChoiceText==="Scissors"){
        computerChoice.style.color = "blueviolet";
    }
    computerChoice.textContent = computerChoiceText;
    // player choice text
    if(playerChoiceText==="Rock"){
        playerChoice.style.color="red";
    }else if (playerChoiceText==="Paper"){
        playerChoice.style.color="green";
    }
    else if(playerChoiceText==="Scissors"){
        playerChoice.style.color = "blueviolet";
    }
    //game status text
    playerChoice.textContent = playerChoiceText;
    if(gameStatus === "tie"){
        resultText.style.color="Brown";
    }
    else if(gameStatus==="won"){
        resultText.style.color="Green";
    }
    else{
        resultText.style.color="red";
    }
    resultText.textContent = gameStatusText;
}


// dont display output text initially
outputTextContainer.style.display="none";
// assigning number to rock paper and sessior
// rock is 1
// paper is 2
// sessior is 3


// onclick rock button function
rockButton.onclick = ()=>{
    outputTextContainer.style.display="none";
    playerNumber = 1;
    playerChoiceText = "Rock";
    computerNumber = Math.floor(Math.random()*3)+1; // this random function generates only 1 or 2 or 3
    if(playerNumber===computerNumber){
        computerChoiceText = "Rock";
        gameStatusText = "Game is a Tie !!"
        gameStatus = "tie";
    }
    else if (playerNumber===1 && computerNumber==2){
        computerChoiceText = "Paper";
        gameStatusText = "Computer Won !!"
        gameStatus = "lose";
        computer=computer+1;
    }
    else if(playerNumber===1 && computerNumber===3){
        computerChoiceText = "Scissors";
        gameStatusText = "Player Won !!";
        gameStatus = "won";
        player = player + 1;
    }
    displayText();
    updateScore();
}

// onclick paper button function
paperButton.onclick = ()=>{
    outputTextContainer.style.display="none";
    playerNumber = 2;
    playerChoiceText = "Paper";
    computerNumber = Math.floor(Math.random()*3)+1; // this random function generates only 1 or 2 or 3
    if(playerNumber===computerNumber){
        computerChoiceText = "Paper";
        gameStatusText = "Game is a Tie !!";
        gameStatus = "tie";
    }
    else if (playerNumber===2 && computerNumber==3){
        computerChoiceText = "Scissors";
        gameStatusText = "Computer Won !!";
        gameStatus = "lose";
        computer=computer+1;
    }
    else if(playerNumber===2 && computerNumber===1){
        computerChoiceText = "Rock";
        gameStatusText = "Player Won !!";
        gameStatus = "won";
        player = player + 1;
    }
    displayText();
    updateScore();
}


// onclick sessior button function
sessiorButton.onclick = ()=>{
    outputTextContainer.style.display="none";
    playerNumber = 3;
    playerChoiceText = "Scissors";
    computerNumber = Math.floor(Math.random()*3)+1; // this random function generates only 1 or 2 or 3
    if(playerNumber===computerNumber){
        computerChoiceText = "Scissors";
        gameStatusText = "Game is a Tie !!";
        gameStatus = "tie";
    }
    else if (playerNumber===3 && computerNumber===1){
        computerChoiceText = "Rock";
        gameStatusText = "Computer Won !!";
        gameStatus = "lose";
        computer=computer+1;
    }
    else if(playerNumber===3 && computerNumber===2){
        computerChoiceText = "Paper";
        gameStatusText = "Player Won !!";
        gameStatus = "won";
        player = player + 1;
    }
    displayText();
    updateScore();
}