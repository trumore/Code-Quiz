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

const myQuestions = [
  {
    question: "What steps would you follow to push files from your local machine to your Git Repo?",
    answers: {
      a: "Lather, Rinse, Repeat",
      b: "Git Add, Git Commit, Git Push",
      c: "Git Clone, Git Pull, Git Stash",
      d: "Stop, Drop, Roll"
    },
    correctAnswer: "b"
  },
  {    question: "What does HTML stand for?",
  answers: {
    a: "Hypertext Markup Language",
    b: "Hypertext Media Link",
    c: "Hide The Meatballs Later",
    d: "Hyperlink To Media Link"
  },
  correctAnswer: "a"
},
{     question: "What is CSS used for?",
  answers: {
  a: "Nothing, its just some letters",
  b: "Creating a basic text only page",
  c: "Stylizing an HTML document",
  d: "Cleaning System Software"
},
  correctAnswer: "c" 
},
{     question: "Which of these is not an example of a Bootstrap component?",
answers: {
a: "Badges",
b: "Buttons",
c: "Mousetraps",
d: "Cards"
},
correctAnswer: "c" 
},
{     question: "Facebook is a good example of a webpage with an obvious Grid Layout",
answers: {
a: "True",
b: "False"
},
correctAnswer: "a" 
},
{     question: "Within a Bootstrap grid, the sum total of all columns within a row must add up to:",
answers: {
a: "8",
b: "10",
c: "12",
d: "14"
},
correctAnswer: "c" 
},
{
  question: "In Javascript, which of these is not considered one of the nouns of programming?",
  answers: {
  a: "Numbers",
  b: "Space Bar",
  c: "Booleans",
  d: "Strings"
  },
  correctAnswer: "b" 
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
