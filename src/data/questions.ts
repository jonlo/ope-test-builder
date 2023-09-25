type Answer = {
	answer: string;
	correct?: boolean;
}

type Question = {
	question: string;
	answers: Answer[];
}

const questions: Question[] = [
	{
		"question": "What is the chemical symbol for gold?",
		"answers": [{ "answer": "Au", "correct": true }, { "answer": "Ag" }, { "answer": "Fe" }, { "answer": "Cu" }]
	},
	{
		"question": "What is the chemical symbol for silver?",
		"answers": [{ "answer": "Ag", "correct": true }, { "answer": "Au" }, { "answer": "Fe" }, { "answer": "Cu" }]
	},
	{
		"question": "What is the chemical symbol for iron?",
		"answers": [{ "answer": "Fe", "correct": true }, { "answer": "Ag" }, { "answer": "Au" }, { "answer": "Cu" }]
	},
	{
		"question": "What is the chemical symbol for copper?",
		"answers": [{ "answer": "Cu", "correct": true }, { "answer": "Ag" }, { "answer": "Fe" }, { "answer": "Au" }]
	},
	{
		"question": "What is the chemical symbol for carbon?",
		"answers": [{ "answer": "C", "correct": true }, { "answer": "H" }, { "answer": "O" }, { "answer": "N" }]
	},
	{
		"question": "What is the chemical symbol for hydrogen?",
		"answers": [{ "answer": "H", "correct": true }, { "answer": "C" }, { "answer": "O" }, { "answer": "N" }]
	},
	{
		"question": "What is the chemical symbol for oxygen?",
		"answers": [{ "answer": "O", "correct": true }, { "answer": "H" }, { "answer": "C" }, { "answer": "N" }]
	},
	{
		"question": "What is the chemical symbol for nitrogen?",
		"answers": [{ "answer": "N", "correct": true }, { "answer": "H" }, { "answer": "O" }, { "answer": "C" }]
	},
	{
		"question": "What is the chemical symbol for water?",
		"answers": [{ "answer": "H2O", "correct": true }, { "answer": "CO2" }, { "answer": "O2" }, { "answer": "CH4" }]
	},
	{
		"question": "What is the chemical symbol for carbon dioxide?",
		"answers": [{ "answer": "CO2", "correct": true }, { "answer": "H2O" }, { "answer": "O2" }, { "answer": "CH4" }]
	},
	{
		"question": "What is the chemical symbol for oxygen gas?",
		"answers": [{ "answer": "O2", "correct": true }, { "answer": "CO2" }, { "answer": "H2O" }, { "answer": "CH4" }]
	},
	{
		"question": "What is the chemical symbol for methane?",
		"answers": [{ "answer": "CH4", "correct": true }, { "answer": "CO2" }, { "answer": "O2" }, { "answer": "H2O" }]
	},
	{
		"question": "What is the chemical symbol for sodium?",
		"answers": [{ "answer": "Na", "correct": true }, { "answer": "K" }, { "answer": "Ca" }, { "answer": "Mg" }]
	},
	{
		"question": "What is the chemical symbol for potassium?",
		"answers": [{ "answer": "K", "correct": true }, { "answer": "Na" }, { "answer": "Ca" }, { "answer": "Mg" }]
	},
	{
		"question": "What is the chemical symbol for calcium?",
		"answers": [{ "answer": "Ca", "correct": true }, { "answer": "Na" }, { "answer": "K" }, { "answer": "Mg" }]
	},
	{
		"question": "What is the chemical symbol for magnesium?",
		"answers": [{ "answer": "Mg", "correct": true }, { "answer": "Na" }, { "answer": "K" }, { "answer": "Ca" }]
	},
	{
		"question": "What is the chemical symbol for lead?",
		"answers": [{ "answer": "Pb", "correct": true }, { "answer": "Hg" }, { "answer": "Sn" }, { "answer": "Cu" }]
	},
	{
		"question": "What is the chemical symbol for mercury?",
		"answers": [{ "answer": "Hg", "correct": true }, { "answer": "Pb" }, { "answer": "Sn" }, { "answer": "Cu" }]
	},
	{
		"question": "What is the chemical symbol for tin?",
		"answers": [{ "answer": "Sn", "correct": true }, { "answer": "Pb" }, { "answer": "Hg" }, { "answer": "Cu" }]
	},
	{
		"question": "What is the chemical symbol for silver?",
		"answers": [{ "answer": "Ag", "correct": true }, { "answer": "Au" }, { "answer": "Fe" }, { "answer": "Cu" }]
	},
	{
		"question": "What is the chemical symbol for uranium?",
		"answers": [{ "answer": "U", "correct": true }, { "answer": "Pu" }, { "answer": "Th" }, { "answer": "Np" }]
	}
]

function shuffleArray(array: Question[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i)
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}

export function getQuestions() {
	shuffleArray(questions)
	return questions;
}