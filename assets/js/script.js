var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer-box");
var quizEl = document.getElementById("quiz");
var currentQuestionIndex = 0;

// class QuestionObject {
//   constructor(prompt, choices, correctChoice){
//     this.prompt = prompt;
//     this.choices = choices;
//     this.correctChoice - correctChoice
//   }
// }

var timeRemaining = 2;
function setQuizTimer() {
  var timerInterval = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Time is up";
      endQuiz();
    }
  }, 1000);
}

var quizQuestions = [
  {
    prompt: "This is question2",
    choices: ["answer12", "a22", "aa32", "a42"],
    correctChoice: "answer12",
  },
  {
    prompt: "This is question2",
    choices: ["answer12", "a22", "aa32", "a42"],
    correctChoice: "answer12",
  },
  // "This is question2",
  // "This is question3",
  // "This is question4",
  // "This is question5",
];

// 2D array for all quiz answer choices
var quizAnswers = [
  ["q1a1", "q1a2", "q1a3", "q1a4"],
  ["q2a1", "q2a2", "q2a3", "q2a4"],
  ["q3a1", "q3a2", "q3a3", "q3a4"],
  ["q4a1", "q4a2", "q4a3", "q4a4"],
  ["q5a1", "q5a2", "q5a3", "q5a4"],
];

// var testArray = quizAnswers[1][2];
// console.log(testArray);
//show a question and answer choices
function showQuestion() {
  //
  var currentQuestion = quizQuestions[currentQuestionIndex];
  console.log(currentQuestion);
  var promptEl = document.createElement("p");
  promptEl.textContent = currentQuestion.prompt;
  quizEl.appendChild(promptEl);
  console.log(promptEl);
  var listEl = document.createElement("ul");
  for (i = 0; i < currentQuestion.choices.length; i++) {
    var choiceEl = document.createElement("button");
    listEl.appendChild(choiceEl);
    choiceEl.textContent = currentQuestion.choices[i];
    choiceEl.addEventListener("click", checkAnswer);
  }
  quizEl.appendChild(listEl);
}

function checkAnswer(event) {
  console.log("checking");
  console.log(event);
  var selectedAnswer = event.target.textContent;
  console.log(selectedAnswer);
  var correctAnswer = quizQuestions[currentQuestionIndex].correctChoice;
  console.log(correctAnswer);
  //check if right or wrong

  // remember you have an array (array length and index relationship!)
  //   if(there are questions left){
  //   currentQuestionIndex ++
  //   quizEl.innerHTML = ""
  //   showQuestion()
  //  } else{
  //   endQuiz();
  //  }
}

function endQuiz() {
  console.log("ending");
}

startButton.addEventListener("click", function () {
  showQuestion();
  setQuizTimer();
});
