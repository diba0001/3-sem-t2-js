"use strict"; 

let userGuess; 
let computerGuess; 
let result; 

const rock = document.QuerySelector(".rock")
const paper = document.QuerySelector(".paper")
const scissors = document.QuerySelector(".scissors")

rock.addEventlistener("click", rockClicked)
paper.addEventlistener("click", paperClicked)
scissors.addEventlistener("click", scissorsClicked)

function rockClicked(){
    /* console.log("Rock Clicked");  */
    userGuess = "rock"
    computerGuesses();
}
function paperClicked(){
    /* console.log("Paper Clicked");  */
     userGuess = "paper"
     computerGuesses();
}
function scissorsClicked(){
    /* console.log("Scissors Clicked");  */
     userGuess = "scissors"
     computerGuesses();
}

function computerGuesses(){
    computerGuess = "Rock"; 
    console.log("Computer Guesses")
}

function determineWinner() {
if(userGuess === "rock" && computerGuess ==="rock"){
    result="draw"
}
if(userGuess === "rock" && computerGuess ==="paper"){
    result="computer"
}
if(userGuess === "rock" && computerGuess ==="scissors"){
    result="user"
}


if(userGuess === "paper" && computerGuess ==="rock"){
    result="user"
}
if(userGuess === "paper" && computerGuess ==="paper"){
    result="draw"
}
if(userGuess === "paper" && computerGuess ==="scissors"){
    result="computer"
}

if(userGuess === "scissors" && computerGuess ==="rock"){
    result="computer"
}
if(userGuess === "scissors" && computerGuess ==="paper"){
    result="user"
}
if(userGuess === "scissors" && computerGuess ==="scissors"){
    result="draw"
}

console.log("result", result); 

}