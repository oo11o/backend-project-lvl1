#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  getRandom, getResultGame, isCorrect, template,
} from '../src/index.js';

const genarateProgressive = (summator, length = 10) => {
  const startNum = getRandom(15);
  const skipNum = getRandom(9);
  const progressive = [startNum];
  for (let i = 1; i < length; i += 1) {
    progressive.push(progressive[i - 1] + summator);
  }
  const correctNum = progressive[skipNum];
  progressive[skipNum] = '...';
  return {
    quiz: progressive.join(' '),
    answer: correctNum,
  };
};

const startGameEven = () => {
  console.log(template.rulesProgressive);
  let i = 0;
  let countCorrectAnswer = 0;

  while (i < 3) {
    const summator = getRandom(9) + 1;
    const task = genarateProgressive(summator);
    console.log(`${(template.questionQuiz)} ${task.quiz}`);

    const answerUser = readlineSync.question(template.answer);
    countCorrectAnswer += isCorrect(task.answer, Number(answerUser)) ? 1 : 0;
    i += 1;
  }
  getResultGame(countCorrectAnswer, name);
};

export default startGameEven;
