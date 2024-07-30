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
const javascriptquestions = [
  {
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answers: [
      { text: "To determine the data type of a variable", correct: true },
      { text: "To convert a variable to a string", correct: false },
      { text: "To check if a variable is defined", correct: false },
      { text: "To create a new variable", correct: false },
    ],
  },
  {
    question: "Which of the following is a correct way to declare a variable in JavaScript?",
    answers: [
      { text: "var myVar;", correct: true },
      { text: "variable myVar;", correct: false },
      { text: "v myVar;", correct: false },
      { text: "declare myVar;", correct: false },
    ],
  },
  {
    question: "What is the output of `console.log(typeof null);`?",
    answers: [
      { text: "\"null\"", correct: false },
      { text: "\"object\"", correct: true },
      { text: "\"undefined\"", correct: false },
      { text: "\"string\"", correct: false },
    ],
  },
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "What does the `isNaN` function do?",
    answers: [
      { text: "Checks if a value is a number", correct: false },
      { text: "Checks if a value is not a number", correct: true },
      { text: "Converts a value to a number", correct: false },
      { text: "Converts a value to a string", correct: false },
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Django", correct: false },
      { text: "Laravel", correct: false },
      { text: "Flask", correct: false },
    ],
  },
  {
    question: "What is the purpose of the `setTimeout` function in JavaScript?",
    answers: [
      { text: "To execute a function after a specified delay", correct: true },
      { text: "To execute a function repeatedly at specified intervals", correct: false },
      { text: "To stop the execution of a function", correct: false },
      { text: "To create a new thread", correct: false },
    ],
  },
  {
    question: "Which of the following is not a primitive data type in JavaScript?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Object", correct: true },
      { text: "Boolean", correct: false },
    ],
  },
  {
    question: "What is the output of `console.log(2 + '2');`?",
    answers: [
      { text: "4", correct: false },
      { text: "\"22\"", correct: true },
      { text: "\"4\"", correct: false },
      { text: "22", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    question: "What is a closure in JavaScript?",
    answers: [
      { text: "A function having access to its own scope, the scope of the outer function, and the global scope", correct: true },
      { text: "A function that is immediately invoked", correct: false },
      { text: "A function that is called after a specified delay", correct: false },
      { text: "A function that is used to close a file", correct: false },
    ],
  },
  {
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.toObject()", correct: false },
    ],
  },
];
const djangoquestions = [
  {
    question: "What is Django?",
    answers: [
      { text: "A high-level Python web framework", correct: true },
      { text: "A JavaScript library", correct: false },
      { text: "A CSS framework", correct: false },
      { text: "A database management system", correct: false },
    ],
  },
  {
    question: "Which architectural pattern does Django follow?",
    answers: [
      { text: "Model-View-Controller (MVC)", correct: false },
      { text: "Model-View-Template (MVT)", correct: true },
      { text: "Model-View-Presenter (MVP)", correct: false },
      { text: "Model-View-ViewModel (MVVM)", correct: false },
    ],
  },
  {
    question: "Which command is used to start a new Django project?",
    answers: [
      { text: "django-admin startproject", correct: true },
      { text: "django-admin startapp", correct: false },
      { text: "django-admin createproject", correct: false },
      { text: "django-admin createapp", correct: false },
    ],
  },
  {
    question: "What is the purpose of Django's ORM?",
    answers: [
      { text: "To interact with the database using Python code", correct: true },
      { text: "To manage static files", correct: false },
      { text: "To handle HTTP requests", correct: false },
      { text: "To create HTML templates", correct: false },
    ],
  },
  {
    question: "Which file is used to define URL patterns in a Django project?",
    answers: [
      { text: "urls.py", correct: true },
      { text: "views.py", correct: false },
      { text: "models.py", correct: false },
      { text: "settings.py", correct: false },
    ],
  },
  {
    question: "Which of the following are features of Django?",
    answers: [
      { text: "Built-in admin interface", correct: true },
      { text: "Automatic database table creation", correct: true },
      { text: "Client-side rendering", correct: false },
      { text: "Built-in support for WebSockets", correct: false },
    ],
  },
  {
    question: "What is the purpose of Django's 'settings.py' file?",
    answers: [
      { text: "To configure the project's settings", correct: true },
      { text: "To define URL patterns", correct: false },
      { text: "To create database models", correct: false },
      { text: "To handle HTTP requests", correct: false },
    ],
  },
  {
    question: "Which command is used to apply migrations in Django?",
    answers: [
      { text: "python manage.py migrate", correct: true },
      { text: "python manage.py makemigrations", correct: false },
      { text: "python manage.py runserver", correct: false },
      { text: "python manage.py createsuperuser", correct: false },
    ],
  },
  {
    question: "Which of the following are Django template tags?",
    answers: [
      { text: "{% if %}", correct: true },
      { text: "{% for %}", correct: true },
      { text: "{% while %}", correct: false },
      { text: "{% switch %}", correct: false },
    ],
  },
  {
    question: "What is the purpose of Django's 'views.py' file?",
    answers: [
      { text: "To define the logic for handling HTTP requests", correct: true },
      { text: "To configure the project's settings", correct: false },
      { text: "To define URL patterns", correct: false },
      { text: "To create database models", correct: false },
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
  } else if (quiztype == "django"){
    currentQuestion = djangoquestions[currentQuestionIndex];
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
