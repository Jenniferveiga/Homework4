//VARIABLE IDs
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");

var questionsHeader = document.getElementById("questionsHeader")
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerReply = document.getElementById("answerReply");

var finalResultIs = document.getElementById("finalResultIs");
var questionsPage = document.getElementById("questionsPage");
var questionButton = document.getElementsByClassName("questionButton");

//VARIABLE TO HIDE/SHOW PAGES
var quizPage = document.querySelector(".quizPage");
var finalResultPage = document.querySelector(".finalResultPage");


// QUIZ QUESTION ARRAY
var quizQuestions = [
    {
    "questionsHeader" : "Which of the symbols below is used for typing single line comments in Javascript?",
    "one" : "1. //",
    "two" : "2. /!",
    "three" : "3. /-",
    "four" : "4. *!",
    "correct" : "1. //",
    },{
    "questionsHeader" : "What is an undefined value in JavaScript?",
    "one" : "1. Variable are missing",
    "two" : "2. Variable used in the code doesn't exist",
    "three" : "3. Property is not assigned correctly",
    "four" : "4. Variable and Property need to linked",
    "correct" : "2. Variable used in the code doesn't exist",
    },{
    "questionsHeader" : "What are types of Pop up boxes available in JavaScript?",
    "one" : "1. Comment",
    "two" : "2. console.log",
    "three" : "3. Undefined",
    "four" : "4. alert",
    "correct" : "4. alert",
    },{
    "questionsHeader" : "What are looping structures in JavaScript?",
    "one" : "1. to-do loops",
    "two" : "2. do-while loops",
    "three" : "3. only-do loops",
    "four" : "4. do loops",
    "correct" : "2. do-while loops",
    },{
    "questionsHeader" : "What are JavaScript Data Types?",
    "one" : "1. Number",
    "two" : "2. Boolean",
    "three" : "3. String",
    "four" : "4. all of the above",
    "correct" : "4. all of the above",
    },
]

//CODING QUIZ PAGE 
questionsPage.style.display = "none";
finalResultPage.style.display = "none";

submitButton.addEventListener("click", beginQuiz);

// TIMER FUNCTION 
var secondsLeft = 80;
var startScore = 0;
var timer = document.getElementById("timer");

timer.textContent = "Time: " + startScore;

function beginQuiz() {
finalResultPage.style.display = "none";
quizPage.style.display = "none";
questionsPage.style.display = "block";

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || quizQuestions.length === questionIndex+1) {
        clearInterval(timerInterval);
        viewFinalScore();
        }
    }, 1000);
}

// VIEW QUESTIONS
var questionIndex = 0;
var previousQuestionIndex = quizQuestions.length -1;

function viewQuestions() {
    var q = quizQuestions[questionIndex];

    questionsHeader.innerHTML = q.questionsHeader;
    choice1.innerHTML = q.one;
    choice1.setAttribute("data-answer", q.one);
    choice2.innerHTML = q.two;
    choice2.setAttribute("data-answer", q.two);
    choice3.innerHTML = q.three;
    choice3.setAttribute("data-answer", q.three);
    choice4.innerHTML = q.four;
    choice4.setAttribute("data-answer", q.four);
}

// EVENT LISTENERS
viewQuestions();
choice1.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
    checkAnswer(event);
})

// CHECK CORRECT ANSWER
function checkAnswer(event) {
    event.preventDefault();

    var answer = event.currentTarget.dataset.answer;
    var correctAnswer = null;

    if (quizQuestions[questionIndex].correct === answer) {
        correctAnswer = answer;
    }
    if (answer === correctAnswer) {
        answerReply.textContent = "Correct";
    } else {
    answerReply.textContent = "Wrong";
    }
    if (quizQuestions.length === questionIndex+1){
        showFinalScore();
        return;
    }
    questionIndex++;
    viewQuestions();
}

// GO TO COMPLETED PAGE AND VIEW FINAL SCORE

function showFinalScore() {
    quizPage.style.display = "none";
    questionsPage.style.display = "none";
    answerReply.style.display = "none";
    finalResultPage.style.display = "block";

    if (startScore === 0 || quizQuestions.length -1) {
        finalResultIs.textContent = "Your final score is " + secondsLeft;
    }
}

