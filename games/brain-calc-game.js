#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  getRandom, getResultGame, isCorrect, template,
} from '../src/index.js';

const operators = ['+', '-', '*'];

const getCorrectAnswer = ($values1, $values2, operator) => {
  let result = 0;
  switch (operator) {
    case 0: result = $values1 + $values2; break;
    case 1: result = $values1 - $values2; break;
    case 2: result = $values1 * $values2; break;
    default: result = NaN;
  }
  return String(result);
};

const startGameEven = (name) => {
  console.log(template.rulesCalcGame);

  let i = 0;
  let countCorrectAnswer = 0;
  let isGaming = true;

  while (i < 3  && isGaming) {
    const values1 = getRandom(10);
    const values2 = getRandom(10);
    const operator = getRandom(3);

    console.log(`${(template.questionQuiz)} ${values1} ${operators[operator]} ${values2}`);

    const answerUser = readlineSync.question(template.answer);
    const correctAnswer = getCorrectAnswer(values1, values2, operator);

    countCorrectAnswer += isCorrect(correctAnswer, answerUser) ? 1 : isGaming = false; 0;
    i += 1;
  }

  getResultGame(countCorrectAnswer, name);
};

export default startGameEven;
