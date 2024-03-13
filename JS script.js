var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];
const questionEl= document.querySelector (".question")
let index= 0
let timeLeft = 60;
let timerInt;
const timerEl= document.querySelector("#timer")
const answersEl= document.querySelector(".answers")
var user= document.getElementById("user") 
user.style.display = "none"
var startbutton= document.getElementById("start-button")
startbutton.addEventListener("click",function(){
    user.style.display = "block"
    startbutton.style.display = "none" 
    timerEl.textContent= timeLeft
    timerInt= setInterval(countDown, 1000)
    showQuestion()
})
function showQuestion () {
questionEl.textContent= questions[index] .title
answersEl.innerHTML=""
for(let i = 0; i < questions[index].choices.length; i++) {
    const btn= document.createElement("button")
    btn.textContent= questions[index] .choices[i]
    btn.onclick= checkAnswer
    answersEl.append(btn)
}
}
function checkAnswer(event){
if(event.target.textContent!== questions[index].answer) {
timeLeft -=10
}
else{}
index ++ 
if(index=== questions.length) {
    endQuestionQuiz()
}
else{showQuestion()}
}
function countDown(){
timeLeft --
timerEl .textContent= timeLeft
if(timeLeft <= 0) {
    timeLeft =0
    timerEl .textContent= timeLeft
    endQuestionQuiz()
}
}
