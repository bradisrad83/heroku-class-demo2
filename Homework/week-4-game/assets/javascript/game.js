//Psuedomotherfucking code
//At the beginning of each game assign(reset) a random number for the Answer, and each crystal and resets
//Click functions:
//			each click returns a value
//math function: add number selected to our runningn total
//check to see if we are above the number

//Global Variables
var wins = 0;
var losses = 0;
var randomNumber = 0;
var crystalValue1 = 0;
var crystalValue2 = 0;
var crystalValue3 = 0;
var crystalValue4 = 0;
var tally = 0;

//Reset Function
var resetVariables = function() {
    randomNumber = Math.floor((Math.random() * 90) + 15);
    console.log(randomNumber);
    crystalValue1 = Math.floor((Math.random() * 10) + 1);
    crystalValue2 = Math.floor((Math.random() * 15) + 1);
    crystalValue3 = Math.floor((Math.random() * 20) + 1);
    crystalValue4 = Math.floor((Math.random() * 10) + 1);
    // console.log(crystalValue1);
    // console.log(crystalValue2);
    // console.log(crystalValue3);
    // console.log(crystalValue4);
    $("#random-number").append(randomNumber);
}

//Score checker function
var scoreChecker = function() {

}


resetVariables();
