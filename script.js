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
		"Quelle est le prénom de l'entraineur de Rocky?",
		["Donald", "Mickey", "Dingo", "L'autre"],
		"Mickey"
	),
	new Question(
		"Dans quel film Rocky combat-il 'Barracuda' de 'L'agence tous risques'?",
		["Le 1", "Le 2", "Le 3", "Le 123"],
		"Le 3"
	),
	new Question(
		"De quel nationalité est le boxeur qui combat Rocky dans le 4,",
		["Russe", "Croate", "Roumain", "Clando"],
		"Russe"
	),
	new Question(
		"Quelle est le prénom de Rocky?",
		["Apollo", "Rocca", "Rocco", "Vraiment conne comme question:->"],
		"Vraiment conne comme question:->"
	),
];
