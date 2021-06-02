var timeEl = document.querySelector("#time");
var startbutton = document.querySelector("#start-button");
var currentQuestion = 0; //integer, current question index from questionsArray
var choices = document.querySelector(".choices");
var timeEl=document.querySelector("#time");
var timeLeft = 60;
var questionText= document.querySelector(".box h2");
var feedback = document.querySelector(".feedback");

//var score = 0;
var questionsArray = [
    q1 = {question: "this is question 1, except its really really really really really really really really long",
    choices: ["a", "b", "c", "d"],
    right: 0,
    },
    q2 = {question: "this is question 2",
    choices: ["a", "b", "c", "d"],
    right: 1,
    },
    q3 = {question: "this is question 3",
    choices: ["a", "b", "c", "d"],
    right: 2,
    },
    q4 = {question: "this is question 4",
    choices: ["a", "b", "c", "d"],
    right: 3,
    },

];

function displayQuestion(current) {
    
    console.log("current question is " + questionsArray[current].question);
    questionText.textContent = questionsArray[current].question;
    displayChoices(current);
    //change choices and questiontext
};
   
function displayChoices(current) {
    var button;
    var i = 0;
    console.log("these are your choices!");
    choices.textcontent=""; //remove all text context 
    for(var i= 0; i < questionsArray[current].choices.length; i++) {
        button = document.createElement("button");
        button.className = "button"; 
        button.textContent = questionsArray[current].choices[i];
        choices.appendChild(button);
    };
    
};

function compareAnswer(event) {
    console.log("you clicked an answer!");
    var answer =event.target;
    if(answer.matches("button")) {
    console.log(event.target);
    }
};

function nextQuestion(event) {
    //compare answer to correct
    var correctIndex = questionsArray[currentQuestion].right;
    if(event.target.matches("button")){
        console.log(event.target);
        if (event.target.textContent == questionsArray[currentQuestion].choices[correctIndex]) {
            feedback.textContent="Correct!"
        }
        else{
            feedback.textContent="Wrong!"
        };
    currentQuestion++;
    displayQuestion(currentQuestion);

    };
};

function startGame() {
    console.log("you started the game!");
    startbutton.remove(); //remove start button
    displayQuestion(currentQuestion);
};

startbutton.addEventListener("click", startGame);

choices.addEventListener("click", nextQuestion); 