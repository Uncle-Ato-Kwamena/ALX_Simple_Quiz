function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct answer! great job 😊.";
    } else {
        document.getElementById('feedback').textContent = "incorrect answer 😞. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
