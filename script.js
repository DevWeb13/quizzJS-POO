class Question {
	constructor(text, choices, answer) {
		this.text = text;
		this.choices = choices;
		this.answer = answer;
	}
	isCorrectAnswer(choice) {
		// Si la (bonne) réponse est égal au choix => true;
		return this.answer === choice;
	}
}

let questions = [
	new Question(
		"Quelle est le prénom de l'entraineur de Rocky ?",
		["Donald", "Mickey", "Dingo", "L'autre"],
		"Mickey"
	),
	new Question(
		"Dans quel film Rocky combat-il 'Barracuda' de 'L'agence tous risques' ?",
		["Le 1", "Le 2", "Le 3", "Le 123"],
		"Le 3"
	),
	new Question(
		"De quel nationalité est le boxeur qui combat Rocky dans le 4 ?",
		["Russe", "Croate", "Roumain", "Clando"],
		"Russe"
	),
	new Question(
		"Quelle est le prénom de Rocky ?",
		["Apollo", "Rocca", "Rocco", "Vraiment conne comme question:->"],
		"Vraiment conne comme question:->"
	),
];

class Quiz {
	constructor(questions) {
		this.score = 0;
		this.questions = questions;
		this.currentQuestionIndex = 0;
	}
	// Permet d'afficher la question actuelle
	getCurrentQuestions() {
		return this.questions[this.currentQuestionIndex];
	}
	// Vérifie la réponse de l'utilisateur
	guess(answer) {
		if (this.getCurrentQuestions().isCorrectAnswer(answer)) {
			this.score++;
		}
		// Passe à la question suivante
		this.currentQuestionIndex++;
	}
	hasEnded() {
		return this.currentQuestionIndex >= this.questions.length;
	}
}

// Affichage
const display = {
	elementShown(id, text) {
		let element = document.getElementById(id);
		element.innerHTML = text;
	},

	endQuiz() {
		let endQuizHTML = /* html */ `
      <h1>Quiz terminé !</h1>
      <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
      
    `;
		this.elementShown("quiz", endQuizHTML);
	},

	question() {
		this.elementShown("question", quiz.getCurrentQuestions().text);
	},

	choices() {
		let choices = quiz.getCurrentQuestions().choices;
		function guessHandler(id, guess) {
			document.getElementById(id).onclick = function () {
				quiz.guess(guess);
				quizApp();
			};
		}
		for (let i = 0; i < choices.length; i++) {
			this.elementShown("choice" + i, choices[i]);
			guessHandler("guess" + i, choices[i]);
		}
	},

	progress() {
		let currentQuestionNumber = quiz.currentQuestionIndex + 1;
		this.elementShown(
			"progress",
			"Question " + currentQuestionNumber + " sur " + quiz.questions.length
		);
	},
};

// Game logic
const quizApp = () => {
	if (quiz.hasEnded()) {
		// END
		display.endQuiz();
	} else {
		// Question
		display.question();
		// Choice
		display.choices();
		// Progress
		display.progress();
	}
};

// Créate Quiz
let quiz = new Quiz(questions);
quizApp();
