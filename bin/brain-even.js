#!/usr/bin/env node
import name from '../src/cli.js';
import readlineSync from "readline-sync";

const template = {
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    questionQuiz: 'Question: ',
    answer: 'Your answer: ',
    answerWrong: 'is wrong answer ;(. Correct answer was',
    answerCorrect: 'Correct!',
    gameDone: 'Congratulations,',
    gameFail: 'Next time, bro!',
}


const getRandom = () => Math.ceil(Math.random()* 100);

const getCorrectAnswer = (number) => {
    return number % 2 === 0 ? 'yes' : 'no';
}

console.log(template.rules);

let i = 0;
let countCorrectAnswer = 0;

while (i < 3) {
    const random = getRandom();
    console.log(`${(template.questionQuiz)} ${random}`);

    const answerUser = readlineSync.question(template.answer);
    const correctAnswer = getCorrectAnswer(random);

    if (correctAnswer === answerUser) {
        console.log(template.answerCorrect)
        countCorrectAnswer += 1;
    }else{
        console.log(`'${answerUser}' ${template.answerWrong} '${correctAnswer}'`);
    }
    i += 1;
}

countCorrectAnswer === 3
    ? console.log(`${template.gameDone} ${name}!`)
    : console.log(template.gameFail);
