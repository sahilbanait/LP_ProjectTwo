const questionTotal = document.querySelector('#questions_total');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const question = document.querySelector('#questions');
const currentQuestionNumber = document.querySelector('#current_question');
const progressBar = document.querySelector('#progressFull');
const scoretext = document.querySelector('#score');
let countDownTime = document.querySelector('#timeLeft');
let scoreInt = document.querySelector('#score-int');
let option = document.getElementsByClassName('option')
const mainSection = document.querySelector('main');
const homePageSection = document.querySelector('#game-section');
const submitBtn = document.querySelector('#name-button');
let errMsg = document.querySelector('#error-meesage');
const submitForm = document.querySelector('#submitForm');
const alert = document.querySelector('.alert')


const validationForm = () => {
    const name = document.forms['submitForm']['uname'].value;
    localStorage.setItem('name', name);
    submitForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if (name === '') {
            return false
        } else {
            window.location.assign('quiz.html');
            return true
        }
    })
    console.log(name)
}

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
let isPaused = false

let quizQuestions = [
    {
        questionNumber: 1,
        question: "What type of computing technology refers to services and applications " + "that typically run on a distributed network through virtualized resources?",
        choice1: "Distributed Computing",
        choice2: "Cloud Computing",
        choice3: "Soft Computing",
        choice4: "Parallel Computing",
        answer: 2,

    }, {
        questionNumber: 2,
        question: "Which one of the following options can be considered as the Cloud?",
        choice1: "Hadoop",
        choice2: "Intranet",
        choice3: "Web Applications",
        choice4: "All the mentioned",
        answer: 1,


    }, {
        questionNumber: 3,
        question: "Cloud computing is a kind of abstraction which is based on the notion of combining physical resources and" + " represents them as _______resources to users",
        choice1: "Real",
        choice2: "Cloud",
        choice3: "Virtual",
        choice4: "none of the mentioned",
        answer: 3,


    }, {
        questionNumber: 4,
        question: "Which of the following has many features of that is now known as cloud computing?",
        choice1: "Web Service",
        choice2: "Softwares",
        choice3: "All of the mentioned",
        choice4: "Internet",
        answer: 4,


    }, {
        questionNumber: 5,
        question: "Which one of the following cloud concepts is related to sharing and pooling the resources?",
        choice1: "Polymorphism",
        choice2: "Virtualization",
        choice3: "Abstraction",
        choice4: "None of the mentioned",
        answer: 2,


    }, {
        questionNumber: 6,
        question: "Which one of the following can be considered as a utility is a dream" + " that dates from the beginning of the computing industry itself?",
        choice1: "Computing",
        choice2: "Model",
        choice3: "Software",
        choice4: "All of the mentioned",
        answer: 1,


    }, {
        questionNumber: 7,
        question: "Which of the following is an essential concept related to Cloud?",
        choice1: "Reliability",
        choice2: "Abstraction",
        choice3: "Productivity",
        choice4: "All of the mentioned",
        answer: 2,


    }, {
        questionNumber: 8,
        question: "Which one of the following is Cloud Platform by Amazon",
        choice1: "Azure",
        choice2: "AWS",
        choice3: "Cloudera",
        choice4: "ll of the mentioned",
        answer: 2,


    }, {
        questionNumber: 9,
        question: "Which one of the following a technology works behind the cloud computing platform?",
        choice1: "Virtualization",
        choice2: "SOA",
        choice3: "Grid Computing",
        choice4: "All of the above",
        answer: 4,


    }, {
        questionNumber: 10,
        question: "Which of the following is a characteristic of the SaaS applications?",
        choice1: "SaaS applications are reliable",
        choice2: "SaaS applications are not customizable",
        choice3: "SaaS applications are customizable",
        choice4: "Non-reliable",
        answer: 3,


    },

]

questionTotal.innerHTML = quizQuestions.length;
const SCORE_POINTS = 100
const MAX_QUESTION = 10
let MAX_TIME = 5
let timeLeft = MAX_TIME * 60;

let startTimer = () => {
    const min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    sec = sec < 10 ? '0' + sec : sec;
    countDownTime.innerHTML = `${min}:${sec}`;
    console.log(`${min}:${sec}`)
    if (!isPaused) {
        timeLeft--;
        setTimeout(() => {
            alert.style.display = 'Block'
            isPaused = true
        }, 500000)
        setTimeout(() => {
            window.location.assign('index.html')
        }, 550000)
    }
}

const pauseTimer = () => {
    isPaused = !isPaused
}

startGame = () => {
    startTimer();
    questionCounter = 0;
    score = 0;
    availableQuestion = [...quizQuestions];
    console.log(availableQuestion);
    populateNewQuestion();
    setInterval(startTimer, 1000);

}
populateNewQuestion = () => {

    if (availableQuestion.length === 0 || questionCounter > MAX_QUESTION) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')

    }
    questionCounter++;
    currentQuestionNumber.innerText = questionCounter

    let progressBarPercentage = questionCounter / MAX_QUESTION * 100;
    progressBar.style.width = `${progressBarPercentage}%`

    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];

    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestion.splice(questionIndex, 1);
    acceptingAnswer = true;
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswer) return;
        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer)
        let applyClass = 'Incorrect'

        if (selectedAnswer == currentQuestion.answer) {
            applyClass = 'Correct'
        }
        if (applyClass === 'Correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(applyClass);


        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(applyClass);
            populateNewQuestion();

        })


    })
})

incrementScore = (num) => {
    score += num
    scoretext.innerText = score
    localStorage.setItem('score', score);
    return score
}


startGame();







