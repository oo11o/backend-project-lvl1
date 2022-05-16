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
  progressive[skipNum] = '..';
  return {
    quiz: progressive.join(' '),
    answer: String(correctNum),
  };
};

const startGameEven = (name) => {
  console.log(template.rulesProgressive);
  let i = 0;
  let countCorrectAnswer = 0;
  let isGaming = true;
  while (i < 3 && isGaming) {
    const summator = getRandom(9) + 1;
    const task = genarateProgressive(summator);
    console.log(`${(template.questionQuiz)} ${task.quiz}`);

    const answerUser = readlineSync.question(template.answer);
    countCorrectAnswer += isCorrect(answerUser, task.answer) ? 1 : isGaming = false;
    i += 1;
  }
  getResultGame(countCorrectAnswer, name);
};

export default startGameEven;
