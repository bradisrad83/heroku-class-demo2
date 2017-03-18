//Psuedomotherfucking code
//Define all global variables
//Create a function to reset all variables after the game is over
//Create a function to update the running score (it will run after each "click")
//Create a function for the main game, where we check to see if the score is below the random number,
//      at the random number, or above the random number, and if it is neither it adds the new score
//      into the html document.  
//create 4 seperate click functions (1 for each crystal) that when clicked run the game function.
//As usual console.log() along the way to debug/watch variables

//Global Variables
var wins = 0;
var losses = 0;
var randomNumber = Math.floor((Math.random() * 120) + 19);
var crystalValue1 = 0;
var crystalValue2 = 0;
var crystalValue3 = 0;
var crystalValue4 = 0;
var tally = 0;

//Reset Function
var resetVariables = function() {
    randomNumber = Math.floor((Math.random() * 120) + 19);
    crystalValue1 = Math.floor((Math.random() * 12) + 1);
    crystalValue2 = Math.floor((Math.random() * 12) + 1);
    crystalValue3 = Math.floor((Math.random() * 12) + 1);
    crystalValue4 = Math.floor((Math.random() * 12) + 1);
    $("#random-number").empty();
    $("#random-number").append(randomNumber);
    tally = 0;
    $("#score").empty();
    $("#score").append(tally);
}

//Update score/tally function
var tallyUpdate = function() {
    $("#score").empty();
    $("#score").append(tally);
    $("#wins").empty();
    $("#wins").append("Wins:" + " " + wins);
    $("#losses").empty();
    $("#losses").append("Losses:" + " " + losses);
}

//Game function(The brain behind the operation)var gameLogic = function() {
var gameLogic = function() {
    if (tally == randomNumber) {
        alert("You have matched the number congratulations!!!!!!!");
        wins++;
        tallyUpdate();
        resetVariables();
    } else if (tally > randomNumber) {
        alert("Your math skills are not up to par, I am sorry please try again");
        losses++;
        tallyUpdate();
        resetVariables();
    } else {
        tallyUpdate();
    }
}


//Actual Game!!!!!!
resetVariables();
$(document).ready(function() {
    $("#crystal1").click(function() {
        tally = tally + crystalValue1;
        gameLogic();
    })
    $("#crystal2").click(function() {
        tally = tally + crystalValue2;
        gameLogic();
    })
    $("#crystal3").click(function() {
        tally = tally + crystalValue3;
        gameLogic();
    })
    $("#crystal4").click(function() {
        tally = tally + crystalValue4;
        gameLogic();
    })
});
