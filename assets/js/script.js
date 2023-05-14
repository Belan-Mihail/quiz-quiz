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
}


/**
* adding variable with quiz content
*/

var quizContent = [{
    ident: 0,
    question: "What is the smallest bird?",
    answers: [
        {answerText: "Hummingbird"},
        {answertText: "Sparrow"},
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
        {answertText: "Chameleon"},
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
        {answertText: "Jaguar"},
        {answerText: "Cheetah"},
        {answerText: "Antelope"}
    ],
    correct: 'Cheetah'
},
{
    ident: 3,
    question: "Who is the fastest animal?",
    answers: [
        {answerText: "Leopard"},
        {answertText: "Jaguar"},
        {answerText: "Cheetah"},
        {answerText: "Antelope"}
    ],
    correct: 'Cheetah'
},
{

}];