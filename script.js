// identifying variables to reference the HTML//
var quizEl = document.getElementById("quiz");
var startQuiz = document.getElementById("startbtn");
var endQuiz = document.getElementById("endbtn");
var timerEl = document.getElementById("timer");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var timerInterval;
var timeLeft = 120;
var score = 0;


//questions//

var quizQuestions = [
  {
    question:
  }
]

// timer element//

timer interval = setInterval(function() {
  timeLeft--;
  timerEl.textContent = "You  have: " + timeLeft + " remaining";

  if (timeLeft ===0){
    clearInterval(timerEl);
    showScore();
  }
}, 1000);
