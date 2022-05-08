#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';
import {
  getRandom, getResultGame, isCorrect, template,
} from '../src/index.js';

const getCorrectAnswer = (values1, values2) => {
  while (values1 != 0 && values2 != 0) {
    if (values1 > values2) {
      values1 %= values2;
    } else {
      values2 %= values1;
    }
  }
  return values1 + values2;
};

const startGameEven = () => {
  console.log(template.rulesCalcGame);

  let i = 0;
  let countCorrectAnswer = 0;

  while (i < 3) {
    const values1 = getRandom(30);
    const values2 = getRandom(30);

    console.log(`${(template.questionQuiz)} ${values1} ${values2}`);

    const answerUser = readlineSync.question(template.answer);
    const correctAnswer = getCorrectAnswer(values1, values2);
    countCorrectAnswer += isCorrect(correctAnswer, Number(answerUser)) ? 1 : 0;
    i += 1;
  }

  getResultGame(countCorrectAnswer, name);
};

export default startGameEven;
