#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';
import {
    getRandom, getResultGame, isCorrect, template,
} from '../src/index.js';

const getCorrectAnswer = (number) => {
    for(let i = 2, s = Math.sqrt(number); i <= s; i++)
        if(number % i === 0) return 'no';
    return number > 1 ? 'yes' : 'no';
};

const startGameEven = () => {
    console.log(template.rulesPrime);
    let i = 0;
    let countCorrectAnswer = 0;

    while (i < 3) {
        const random = getRandom(30);
        console.log(`${(template.questionQuiz)} ${random}`);

        const answerUser = readlineSync.question(template.answer);
        const correctAnswer = getCorrectAnswer(random);

        countCorrectAnswer += isCorrect(answerUser, correctAnswer) ? 1 : 0;

        i += 1;
    }

    getResultGame(countCorrectAnswer, name);
};

export default startGameEven;
