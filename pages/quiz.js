const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next");
let quiztype = "python";
let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What Type of Framework is Django?",
    answers: [
      { text: "Web Framework", correct: false },
      { text: "Backend Framework", correct: true },
      { text: "Frontend Framework", correct: false },
      { text: "Full Stack Framework", correct: false },
    ],
  },
  {
    question: "What Language Type is python?",
    answers: [
      { text: "Backend Language", correct: true },
      { text: "OOP Language", correct: false },
      { text: "Frontend Language", correct: false },
      { text: "Full Stack Language", correct: false },
    ],
  },
  {
    question: "What does OOP stand for?",
    answers: [
      { text: "Olive Orange Programing", correct: false },
      { text: "Olympic Ozempic Program", correct: false },
      { text: "Objected Orientated Programming", correct: true },
      { text: "Full Stack Framework", correct: false },
    ],
  },
  {
    question: "How do check for bugs?",
    answers: [
      { text: "Check the console", correct: true },
      { text: "Check the Terminal", correct: false },
      { text: "Check the code", correct: false },
      { text: "Check GIT", correct: false },
    ],
  },
  {
    question: "What is the command to push a commit to the main/local repo?",
    answers: [
      { text: "git push ", correct: false },
      { text: "git pull", correct: false },
      { text: "git force", correct: false },
      { text: "git push origin main", correct: true },
    ],
  },
  {
    question: "What is git?",
    answers: [
      { text: "A system to commit and record changes ", correct: true },
      { text: "A amazing food to eat", correct: false },
      { text: "A system to avoid hackers and copyright", correct: false },
      { text: "A website", correct: false },
    ],
  },
];
const reactquestions = [
  {
    question: "What Type of Framework is React?",
    answers: [
      { text: "Web Framework", correct: true },
      { text: "Backend Framework", correct: false },
      { text: "Frontend Framework", correct: false },
      { text: "Full Stack Framework", correct: false },
    ],
  },
  {
    question: "What Language Type is React?",
    answers: [
      { text: "JS", correct: true },
      { text: "TS", correct: false },
      { text: "C++", correct: false },
      { text: "Basic", correct: false },
    ],
  },
  {
    question: "What does React stand for?",
    answers: [
      { text: "Just a name", correct: true },
      { text: "Reacted Racecars", correct: false },
      { text: "Restored active typescript", correct: false },
      { text: "Reacted Trains", correct: false },
    ],
  },
  {
    question: "How do you install react ?",
    answers: [
      { text: "You can install it via the terminal", correct: true },
      { text: "Install it through the web", correct: false },
      { text: "Type in $reactplzinstall in google", correct: false },
      { text: "Mannualy install each folder", correct: false },
    ],
  },
  {
    question: "How do you use classes in react?",
    answers: [
      { text: "class", correct: false },
      { text: "className", correct: true },
      { text: "classname", correct: false },
      { text: "classifier", correct: false },
    ],
  },
  {
    question: "What is jsx?",
    answers: [
      { text: "JS and Python combined", correct: false },
      { text: "The name of a hacker", correct: false },
      { text: "Javascript and XML", correct: true },
      { text: "C++ and Python", correct: false },
    ],
  },
];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function selectQuiz(e) {
  const SelectedQuiz = e.currentTarget;
  quiztype = SelectedQuiz.dataset.quiz.toLowerCase();
  console.log(quiztype);
  document.getElementById("quiztype").innerHTML = quiztype.charAt(0).toUpperCase() + quiztype.slice(1);
  startQuiz(); // Restart the quiz with the new quiz type
}

// Showing the question and its styles
function showQuestion() {
  resetState();
  let currentQuestion;
  if (quiztype === "python") {
    currentQuestion = questions[currentQuestionIndex];
  } else if (quiztype === "react") {
    currentQuestion = reactquestions[currentQuestionIndex];
  } else if (quiztype === "javascript") {
    currentQuestion = javascriptquestions[currentQuestionIndex];
  }
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add(
      "flex", "items-center", "w-full", "py-4", "pl-5", "m-2", "ml-0", "space-x-2", "border-2",
      "cursor-pointer", "border-black/10", "rounded-xl", "bg-black/5", "hover:border-black/40", "text-black"
    );
    answerButtonsElement.appendChild(btn);
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

document.querySelectorAll('button[data-quiz]').forEach(button => {
  button.addEventListener('click', selectQuiz);
});

// Selecting the different answers
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  console.log("Selected Answer:", selectedBtn.innerHTML);
  console.log("Is Correct:", isCorrect);
  if (isCorrect) {
    selectedBtn.classList.add("bg-green-500", "text-white");
    score++;
  } else {
    selectedBtn.classList.add("bg-red-500", "text-white");
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("bg-green-500", "text-white");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Score: ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Take Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
