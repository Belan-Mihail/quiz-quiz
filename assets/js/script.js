// /**
// * A function that checks if a username is entered and 
// * if it is entered then unlocks the game start button
// */

let user = document.getElementById('yname');

function checkUserName () {
    if (user.value.length != 0) {
        document.getElementById('new-game-btn').removeAttribute('disabled');
    } else {
        document.getElementById('new-game-btn').setAttribute('disabled', '');
}
};


document.addEventListener("DOMContentLoaded", checkUserName());

/**
* Add onclick to Start Game buttons with a function which new game starting
*/

document.getElementById('new-game-btn').onclick = () => {
    document.getElementById('new-game').classList.add('none');
    document.getElementById('quiz').classList.remove('none');
    createQuizStructure ();
};

/**
* Function to create the semantic structure of the quiz
*/

function createQuizStructure () {
    let quizStructure = `
    <div class="quiz-block" id="quiz-block">
        <div class="reaction">
            <p id="reaction"></p>
        </div>
        <div class="quiz-questions">
            <p id="questions"></p>
        </div>
        <div class="quiz-answers-block">
            <button class="answer" id='answerOne'></button>
            <button class="answer" id='answerTwo'></button>
            <button class="answer" id='answerThree'></button>
            <button class="answer" id='answerFour'></button>
        </div>
        <div class="quiz-score" id="quiz-score">
            <p class="scores">Correct Answers:<span id="score">0</span></p>
            <p class="scores">Incorrect Answers:<span id="incorrect">0</span></p>
        </div>
    </div>
    `;
    quiz.innerHTML = quizStructure;
    fillQuizContent('0');  
    nextQuestions();  
}

/**
* adding variable with quiz content
*/

var quizContent = [{
    ident: 0,
    question: "What is the smallest bird?",
    answers: [
        {answerText: "Hummingbird"},
        {answerText: "Sparrow"},
        {answerText: "Tit"},
        {answerText: "Condor"}
    ],
    correct: 'Hummingbird'
},
{
    ident: 1,
    question: "Who has the longest tongue?",
    answers: [
        {answerText: "Giraffe"},
        {answerText: "Chameleon"},
        {answerText: "Ant-eater"},
        {answerText: "Frog"}
    ],
    correct: 'Ant-eater'
},
{
    ident: 2,
    question: "Who is the fastest animal?",
    answers: [
        {answerText: "Leopard"},
        {answerText: "Jaguar"},
        {answerText: "Cheetah"},
        {answerText: "Antelope"}
    ],
    correct: 'Cheetah'
},
{
    ident: 3,
    question: "Where is the grasshopper's ear?",
    answers: [
        {answerText: "On the forehead"},
        {answerText: "On the back"},
        {answerText: "On the foot"},
        {answerText: "He has no ears"}
    ],
    correct: 'On the foot'
},
{
    ident: 4,
    question: "Which pharaoh had the largest pyramid built?",
    answers: [
        {answerText: "Tuttankhammu"},
        {answerText: "Khafre"},
        {answerText: "Cheops"},
        {answerText: "Ramses 3"}
    ],
    correct: 'Cheops'
},
{
    ident: 5,
    question: "According to the legend of the founders of Ancient Rome, she brought up?",
    answers: [
        {answerText: "Fox"},
        {answerText: "Goat"},
        {answerText: "Bear"},
        {answerText: "She-wolf"}
    ],
    correct: 'She-wolf'
},
{
    ident: 6,
    question: "What are the stories about the adventures of Robin Hood?",
    answers: [
        {answerText: "Annals"},
        {answerText: "Novels"},
        {answerText: "Poems"},
        {answerText: "Ballads"}
    ],
    correct: 'Ballads'
},
{
    ident: 7,
    question: "The huge power of the Mongols was created:",
    answers: [
        {answerText: "Batu"},
        {answerText: "Genghis Khan"},
        {answerText: "Tamerlane"},
        {answerText: "Suleiman"}
    ],
    correct: 'Genghis Khan'
},
{
    ident: 8,
    question: "Which country's capital is located on the Nile River?",
    answers: [
        {answerText: "Egypt"},
        {answerText: "USA"},
        {answerText: "India"},
        {answerText: "Ukraine"}
    ],
    correct: 'Egypt'
},
{
    ident: 9,
    question: "Which country's capital is Tokyo?",
    answers: [
        {answerText: "Mexico"},
        {answerText: "Thailand"},
        {answerText: "Egypt"},
        {answerText: "Japan"}
    ],
    correct: 'Japan'
},
{
    ident: 10,
    question: "Which state is the smallest in the world?",
    answers: [
        {answerText: "Monaco"},
        {answerText: "Panama"},
        {answerText: "Vatican"},
        {answerText: "Israel"}
    ],
    correct: 'Vatican'
},
{
    ident: 11,
    question: "Where is Brazil located?",
    answers: [
        {answerText: "South America"},
        {answerText: "North America"},
        {answerText: "Africa"},
        {answerText: "Asia"}
    ],
    correct: 'South America'
},
{
    ident: 12,
    question: "How many months in a year have 28 days?",
    answers: [
        {answerText: "1"},
        {answerText: "0"},
        {answerText: "2"},
        {answerText: "12"}
    ],
    correct: '12'
},
{
    ident: 13,
    question: "What does not burn in fire and does not sink in water?",
    answers: [
        {answerText: "Grass"},
        {answerText: "Tree"},
        {answerText: "Iron"},
        {answerText: "Ice"}
    ],
    correct: 'Ice'
},
{
    ident: 14,
    question: "What is so incredibly fragile that just saying its name will destroy it?",
    answers: [
        {answerText: "Glass"},
        {answetText: "Crystal"},
        {answerText: "Silence"},
        {answerText: "Plastic"}
    ],
    correct: 'Silence'
},
{
    ident: 15,
    question: "The more of it there is, the less you can see. What is it about?",
    answers: [
        {answerText: "Money"},
        {answerText: "Health"},
        {answerText: "Darkness"},
        {answerText: "Happiness"}
    ],
    correct: 'Darkness'
}
];

/**
* adding function wich fill quiz content
*/

function fillQuizContent(ident) {
    document.getElementById('questions').innerText = quizContent[ident].question;
    document.getElementById('answerOne').innerText = quizContent[ident].answers[0].answerText;   
    document.getElementById('answerTwo').innerText = quizContent[ident].answers[1].answerText;   
    document.getElementById('answerThree').innerText = quizContent[ident].answers[2].answerText;   
    document.getElementById('answerFour').innerText = quizContent[ident].answers[3].answerText;   
     
}

/**
* variable needed for subsequent iteration of the quizContent array
*/

var ident = 1;

/**
* a variable that will store the user's responses
*/
var userAnswer = '';

/**
* a function inside which iterates through the quizContent array 
* and fills in subsequent questions when you click on the answer
*/

function nextQuestions() {
    
    let buttons = document.getElementsByClassName('answer');
    for (button of buttons) {

        button.addEventListener('click', function() {

            userAnswer = this.innerText;
            checkAnswers();
            if (ident < 16) {
                fillQuizContent(ident);
                ident++;
            }
        })
    }
};


/**
* a function that will check the answers
*/

function checkAnswers() {
    if (quizContent[0].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[1].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[2].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[3].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you is correct`;
    } else if (quizContent[4].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[5].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[6].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[7].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[8].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[9].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[10].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[11].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[12].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[13].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
    } else if (quizContent[14].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else if (quizContent[15].correct.includes(this.userAnswer)) {
        document.getElementById('reaction').innerText = `Great job ${user.value} you are correct`;
        document.getElementById('reaction').style.color = "#005400";
    } else {
        document.getElementById('reaction').innerText = `Bad day... ${user.value} you are wrong`;
        document.getElementById('reaction').style.color = "#bb2424";
    }
}

//function to increase points for correct answers
function incrementCorrectAnswers() {
    let oldScore = document.getElementById('score').innerText;
    document.getElementById('score').innerText = ++oldScore;
}

//function to increase points for incorrect answers
function incrementIncorrectAnswers() {
    let oldScore = document.getElementById('incorrect').innerText;
    document.getElementById('incorrect').innerText = ++oldScore;
}