var timeEl = document.querySelector("#time");
var startbutton = document.querySelector("#start-button");
var currentQuestion = 0; //integer, current question index from questionsArray
var box = document.querySelector(".box");
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

function displayChoices() {
    console.log("these are your choices!")
};

function displayQuestion(current) {
    
    console.log("current question is " + questionsArray[current].question);
    console.log(box);
    questionText.textContent = questionsArray[current].question;
    //change choices and questiontext
};
   


function playGame() {
    
    console.log("you started the game!");
    startbutton.remove(); //remove start button?
    displayQuestion(currentQuestion);
    //display each question
    //compare answer
    //
};

startbutton.addEventListener("click", playGame);

//single process to process a click on an answer