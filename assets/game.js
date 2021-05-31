var timeEl = document.querySelector("#time");
var startbutton = document.querySelector("#start-button");
var choices; //the box we append after the question in .box that holds all our choice answers
var currentQuestion = 0; //integer, current question index from questionsArray

//var score = 0;
var questionsArray = [
    q1 = {
        question: "this is a question",
        choices: ["a", "b", "c", "d"],
        right: "a",
    },
    q2 = {question: "this is a question",
    choices: ["a", "b", "c", "d"],
    right: "a",},
    q3 = {question: "this is a question",
    choices: ["a", "b", "c", "d"],
    right: "a",},
    q4 = {question: "this is a question",
    choices: ["a", "b", "c", "d"],
    right: "a",},
    q5 = {question: "this is a question",
    choices: ["a", "b", "c", "d"],
    right: "a",},

];
function displayQuestion() {
    //<box.h2=question //replace h2 with current question
    //create/append choices;

function playGame() {
    console.log("you started the game!");
    startbutton.remove(); //remove start button?

    
    //display each question
    //compare answer
    //
};

startbutton.addEventListener("click", playGame);

//single process to process a click on an answer