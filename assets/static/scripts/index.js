let questionTotal = document.getElementById('questions_total');
let currentQuestion = document.getElementById('current_question');
let progressBar = document.getElementById('progressBar');
let progress = document.getElementById('progress');
let homepageSection = document.getElementById('homepage-section');
let homeButton = document.getElementById('navItem-two');
let contentSection = document.getElementById('content-section');
let submitBtn = document.getElementById('name-button');
let nameInput = document.querySelector('#name-input').value;
let errmsg = document.getElementById('error-meesage');

window.onload = () => {
    const quizQuestions = [
        {
            questionNumber: 1,
            question: "What type of computing technology refers to services and applications " + "that typically run on a distributed network through virtualized resources?",
            choices: {1: "Distributed Computing", 2: "Cloud Computing", 3: "Soft Computing", 4: "Parallel Computing"},
            answer: 2,
            percentageBar: 10

        }, {
            questionNumber: 2,
            question: "Which one of the following options can be considered as the Cloud?",
            choices: {1: "Hadoop", 2: "Intranet", 3: "Web Applications", 4: "All the mentioned"},
            answer: 1,
            percentageBar: 20

        }, {
            questionNumber: 3,
            question: "Cloud computing is a kind of abstraction which is based on the notion of combining physical resources and" + " represents them as _______resources to users",
            choices: {1: "Real", 2: "Cloud", 3: "Virtual", 4: "none of the mentioned"},
            answer: 3,
            percentageBar: 30

        }, {
            questionNumber: 4,
            question: "Which of the following has many features of that is now known as cloud computing?",
            choices: {1: "Web Service", 2: "Softwares", 3: "All of the mentioned", 4: "Internet"},
            answer: 4,
            percentageBar: 40

        }, {
            questionNumber: 5,
            question: "Which one of the following cloud concepts is related to sharing and pooling the resources?",
            choices: {1: "Polymorphism", 2: "Virtualization", 3: "Abstraction", 4: "None of the mentioned"},
            answer: 2,
            percentageBar: 50

        }, {
            questionNumber: 6,
            question: "Which one of the following can be considered as a utility is a dream" + " that dates from the beginning of the computing industry itself?",
            choices: {1: "Computing", 2: "Model", 3: "Software", 4: "All of the mentioned"},
            answer: 1,
            percentageBar: 60

        }, {
            questionNumber: 7,
            question: "Which of the following is an essential concept related to Cloud?",
            choices: {1: "Reliability", 2: "Abstraction", 3: "Productivity", 4: "All of the mentioned"},
            answer: 2,
            percentageBar: 70

        }, {
            questionNumber: 8,
            question: "Which one of the following is Cloud Platform by Amazon",
            choices: {1: "Azure", 2: "AWS", 3: "Cloudera", 4: "ll of the mentioned"},
            answer: 2,
            percentageBar: 80

        }, {
            questionNumber: 9,
            question: "Which one of the following a technology works behind the cloud computing platform?",
            choices: {1: "Virtualization", 2: "SOA", 3: "Grid Computing", 4: "All of the above"},
            answer: 4,
            percentageBar: 90


        }, {
            questionNumber: 10,
            question: "Which of the following is a characteristic of the SaaS applications?",
            choices: {
                1: "SaaS applications are reliable",
                2: "SaaS applications are not customizable",
                3: "SaaS applications are customizable",
                4: "Non-reliable"
            },
            answer: 3,
            percentageBar: 10


        },

    ]
    questionTotal.innerHTML = quizQuestions.length;

    //Callback Listeners
    homeButton.addEventListener('click', homeBtnClick);
    submitBtn.addEventListener('click', submitBtnClick);


}

function homeBtnClick() {
    homepageSection.style.display = 'block';
    contentSection.style.display = 'none'
}

function submitBtnClick() {

    if (nameInput.value == null) {
        errmsg.style.display = 'block';


    } else {
        homepageSection.style.display = 'none';

    }


}

