var timeEl = document.querySelector("#time");
var startbutton = document.querySelector("#start-button");
var currentQuestion = 0; //integer, current question index from questionsArray
var choices = document.querySelector(".choices");
var timeLeft = 60;
var box = document.querySelector(".box");
var questionText = document.querySelector(".box h2");
var feedback = document.querySelector(".feedback");
var initials;
var submitButton = document.querySelector("#submit");
var saveScoreEl = document.querySelector(".saveScoreEl");
var timerInterval;
var score;

//var score = 0;
var questionsArray = [
    q1 = {
        question: "name a string instrument",
        choices: ["violin", "trombone", "saxophone", "oboe"],
        right: 0,
    },
    q2 = {
        question: "Name a brass instrument",
        choices: ["cello", "flute", "trumpet", "bass"],
        right: 2,
    },
    q3 = {
        question: "Name a woodwind instrument",
        choices: ["bassoon", "viola", "tuba", "french horn"],
        right: 0,
    },
    q4 = {
        question: "Who leads the orchestra?",
        choices: ["The Leader", "A Musician", "Whoever you want", "the Conductor"],
        right: 3,
    },

];

function gameOver(){
    score = timeLeft;
    choices.textContent = "";
    questionText.textContent = "Quiz Complete!";
    saveScoreEl.style.display = "block";
    clearInterval(timerInterval);
   
}

function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            // Stops execution of action at set interval
            //clearInterval(timerInterval);
            gameOver();
        }

    }, 1000);
};

function displayQuestion(current) {    //change choices and questiontext
    console.log("current question is " + questionsArray[current].question);
    questionText.textContent = questionsArray[current].question;
    displayChoices(current);

};

function displayChoices(current) {
    var button;
    var i = 0;
    console.log("these are your choices!");
    choices.textContent = ""; //remove all text context 
    for (var i = 0; i < questionsArray[current].choices.length; i++) {
        button = document.createElement("button");
        button.className = "button";
        button.textContent = questionsArray[current].choices[i];
        choices.appendChild(button);
    };
};

function compareAnswer(event) {
    console.log("you clicked an answer!");
    var answer = event.target;
    if (answer.matches("button")) {
        console.log(event.target);
    }
};

function nextQuestion(event) {
    //compare answer to correct
    var correctIndex = questionsArray[currentQuestion].right;
    console.log(currentQuestion);

    if (event.target.matches("button")) {
        if (event.target.textContent == questionsArray[currentQuestion].choices[correctIndex]) {
            feedback.textContent = "Correct!";
        }
        else {
            feedback.textContent = "Wrong!";
            timeLeft = timeLeft - 10; 
        };
    };

    if (currentQuestion < questionsArray.length - 1) {
        currentQuestion++;
        console.log(currentQuestion);
        displayQuestion(currentQuestion);
    }
    else if (currentQuestion == questionsArray.length - 1) {//game is over
        console.log("end of questions");
        gameOver();

        // score = timeLeft;
        // choices.textContent = "";
        // questionText.textContent = "Quiz Complete!";
        // saveScoreEl.style.display = "block";
        // clearInterval(timerInterval);
       

    };

};

function startGame() {
    console.log("you started the game!");
    startbutton.remove(); //remove start button
    console.log(currentQuestion);
    displayQuestion(currentQuestion);
    startTimer();
};

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(score);
    initials = document.querySelector("#initials").value;
    localStorage.setItem(initials, JSON.stringify(score));
    console.log(initials);
    console.log("submit button was clicked!!!!")
    window.location.assign("./assets/highscores.html");
});

startbutton.addEventListener("click", startGame);

choices.addEventListener("click", nextQuestion);

