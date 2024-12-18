const correctAnswers = {
    q1: "b",
    q2: "a",
    q3: "b",
    q4: "c",
    q5: "b",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "c",
    q10: "b",
};
document.getElementById("submit-quiz").addEventListener("click", function () {
    const form = document.getElementById("quiz-form");
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let userAnswers = {};
    for (let question in correctAnswers) {
        let answer = form.elements[question];
        if (answer) {
            let selected = Array.from(answer).find(input => input.checked);
            if (selected) {
                userAnswers[question] = selected.value;
                if (selected.value === correctAnswers[question]) {
                    score++;
                }
            } else {
                userAnswers[question] = "Pas répondu";
            }
        }
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `Vous avez obtenu ${score} / ${totalQuestions}.`;

    const correctAnswersList = document.getElementById("correct-answers");
    correctAnswersList.innerHTML = "";
    for (let question in correctAnswers) {
        let userAnswer = userAnswers[question];
        let correct = correctAnswers[question];
        let questionResult = document.createElement("li");
        questionResult.innerHTML = `
            Question ${question.slice(1)} :
            <strong>Votre réponse :</strong> ${userAnswer} -
            <strong>Réponse correcte :</strong> ${correct}
        `;
        correctAnswersList.appendChild(questionResult);
    }
});
