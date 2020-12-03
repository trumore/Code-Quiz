// identifying variables to reference the HTML//
var quizEl = document.getElementById("quiz");
var startPageEl = document.getElementById("startpage");
var startQuiz = document.querySelector("#startbtn");
var endQuiz = document.getElementById("endbtn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("button-group");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var timeLeft = 120;
var scoreLine = document.getElementById("score");
var score = 0;
var i = 0;
var questionText = document.getElementById("questionText");
var answerList = document.getElementById("answers");
var score = 0;

startQuiz.addEventListener("click", function () {
  console.log("started");
  startPageEl.classList.add("d-none");
  quizEl.classList.remove("d-none");
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "You have: " + timeLeft + " seconds remaining";

    if (timeLeft === 0) {
      clearInterval(timerEl);
      showScore();
    }
  }, 1000);
  beginQuestions();
});

function beginQuestions() {
  questionText.textContent = "";
  questionText.textContent = myQuestions[i].question;
  console.log(myQuestions[i].question);
  answer();
}

function cycleQuestions() {
  questionText.textContent = "";
  buttonA.textContent = "";
  buttonB.textContent = "";
  buttonC.textContent = "";
  buttonD.textContent = "";
  i++;
  questionText.textContent = myQuestions[i].question;
  answer();
}

function answer() {
  buttonA.textContent = myQuestions[i].answers.a;
  console.log(myQuestions[i].answers.a);
  buttonB.textContent = myQuestions[i].answers.b;
  buttonC.textContent = myQuestions[i].answers.c;
  buttonD.textContent = myQuestions[i].answers.d;
}

buttonA.addEventListener("click", function () {
  if (event.target.textContent === myQuestions[i].correctAnswer) {
    score + 10;
    cycleQuestions();
  } else {
    timeLeft -= 10;
    cycleQuestions();
  }
});
buttonB.addEventListener("click", function () {
  if (event.target.textContent === myQuestions[i].correctAnswer) {
    score + 10;
    cycleQuestions();
  } else {
    timeLeft -= 10;
    cycleQuestions();
  }
});
buttonC.addEventListener("click", function () {
  if (event.target.textContent === myQuestions[i].correctAnswer) {
    score + 10;
    cycleQuestions();
  } else {
    timeLeft -= 10;
    cycleQuestions();
  }
});
buttonD.addEventListener("click", function () {
  if (event.target.textContent === myQuestions[i].correctAnswer) {
    score + 10;
    cycleQuestions();
  } else {
    timeLeft -= 10;
    cycleQuestions();
  }
});

scoreLine.textContent = "Your Score is " + score;
//questions//

var myQuestions = [
  {
    question:
      "What steps would you follow to push files from your local machine to your Git Repo?",
    answers: {
      a: "Lather, Rinse, Repeat",
      b: "Git Add, Git Commit, Git Push",
      c: "Git Clone, Git Pull, Git Stash",
      d: "Stop, Drop, Roll",
    },
    correctAnswer: b,
  },
  {
    question: "What does HTML stand for?",
    answers: {
      a: "Hypertext Markup Language",
      b: "Hypertext Media Link",
      c: "Hide The Meatballs Later",
      d: "Hyperlink To Media Link",
    },
    correctAnswer: "a",
  },
  {
    question: "What is CSS used for?",
    answers: {
      a: "Nothing, its just some letters",
      b: "Creating a basic text only page",
      c: "Stylizing an HTML document",
      d: "Cleaning System Software",
    },
    correctAnswer: "c",
  },
  {
    question: "Which of these is not an example of a Bootstrap component?",
    answers: {
      a: "Badges",
      b: "Buttons",
      c: "Mousetraps",
      d: "Cards",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Facebook is a good example of a webpage with an obvious Grid Layout",
    answers: {
      a: "True",
      b: "False",
      c: "whats Facebook?",
      d: "all of the above",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Within a Bootstrap grid, the sum total of all columns within a row must add up to:",
    answers: {
      a: "8",
      b: "10",
      c: "12",
      d: "14",
    },
    correctAnswer: "c",
  },
  {
    question:
      "In Javascript, which of these is not considered one of the nouns of programming?",
    answers: {
      a: "Numbers",
      b: "Space Bar",
      c: "Booleans",
      d: "Strings",
    },
    correctAnswer: "b",
  },
];
