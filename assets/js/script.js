

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
    `
    quiz.innerHTML = quizStructure;    
}

/**
* Add onclick to Start Game buttons with a function which new game starting
*/

document.getElementById('new-game-btn').onclick = () => {
    document.getElementById('new-game').classList.add('none');
    document.getElementById('quiz').classList.remove('none');
    createQuizStructure ();
}