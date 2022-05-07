import name from "./cli.js";
import readlineSync from "readline-sync";

const getRandom = (count = 100) => Math.floor(Math.random() * count);

const template = {
    rulesEvenGame: 'Answer "yes" if the number is even, otherwise answer "no".',
    rulesCalcGame: 'What is the result of the expression?',
    questionQuiz: 'Question: ',
    answer: 'Your answer: ',
    answerWrong: 'is wrong answer ;(. Correct answer was',
    answerCorrect: 'Correct!',
    gameDone: 'Congratulations,',
    gameFail: 'Next time, bro!',
};

const getResultGame = (countCorrectAnswer, name) => {
    const result = countCorrectAnswer === 3
        ? `${template.gameDone} ${name}!`
        : template.gameFail;
    console.log(result);
}

const isCorrect = (correctAnswer, answerUser) => {
    if (correctAnswer === answerUser) {
        console.log(template.answerCorrect);
        return true;
    }
    console.log(`'${answerUser}' ${template.answerWrong} '${correctAnswer}'`);
    return false;
}

export { getRandom, getResultGame, isCorrect, template }