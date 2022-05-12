#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  getRandom, getResultGame, isCorrect, template,
} from '../src/index.js';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const startGameEven = (name) => {
  console.log(template.rulesEvenGame);

  let i = 0;
  let countCorrectAnswer = 0;

  while (i < 3) {
    const random = getRandom();
    console.log(`${(template.questionQuiz)} ${random}`);
    const answerUser = readlineSync.question(template.answer);
    const correctAnswer = getCorrectAnswer(random);
    countCorrectAnswer += isCorrect(answerUser, correctAnswer) ? 1 : 0;
    i += 1;
  }

  getResultGame(countCorrectAnswer, name);
};

export default startGameEven;
