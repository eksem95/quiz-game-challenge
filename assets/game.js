var timeEl = document.querySelector("#time");
var startbutton = document.querySelector("#start-button");
var currentQuestion = 0; //integer, current question index from questionsArray
var choices = document.querySelector(".choices");
var timeEl=document.querySelector("#time");
var timeLeft = 60;
var questionText= document.querySelector(".box h2")

//var score = 0;
var questionsArray = [
    q1 = {question: "this is question 1",
    choices: ["a", "b", "c", "d"],
    right: "a",
    },
    q2 = {question: "this is question 2",
    choices: ["a", "b", "c", "d"],
    right: "a",
    },
    q3 = {question: "this is question 3",
    choices: ["a", "b", "c", "d"],
    right: "a",
    },
    q4 = {question: "this is question 4",
    choices: ["a", "b", "c", "d"],
    right: "a",
    },

];

function displayChoices(current) {
    var button;
    var i = 0;
    console.log("these are your choices!");
    choices.textcontent=""; //remove all text context 
    //for(var i= 0; i < questionsArray[current].choices.length; i++) {
        button = document.createElement("button");
        button.textContent = questionsArray[current].choices[i];
        choices.appendChild(button);
    //};
    //createElement: add button 
    //button textContent: questionsArray[current].choices[i] 
    //append button
};

function displayQuestion(current) {
    
    console.log("current question is " + questionsArray[current].question);
    questionText.textContent = questionsArray[current].question;
    displayChoices(current);
    //change choices and questiontext
};
   


function playGame() {
    
    console.log("you started the game!");
    startbutton.remove(); //remove start button
    displayQuestion(currentQuestion);
    //display each question
    //compare answer
    //
};

startbutton.addEventListener("click", playGame);

//single process to process a click on an answer