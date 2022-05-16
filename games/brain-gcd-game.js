import readlineSync from 'readline-sync';

import {
  getRandom, getResultGame, isCorrect, template,
} from '../src/index.js';

const getCorrectAnswer = (values1, values2) => {
  let number1 = values1;
  let number2 = values2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return String(number1 + number2);
};

const startGameEven = (name) => {
  console.log(template.rulesCalcGame);

  let i = 0;
  let countCorrectAnswer = 0;
  let isGaming = true;

  while (i < 3 && isGaming) {
    const values1 = getRandom(30);
    const values2 = getRandom(30);

    console.log(`${(template.questionQuiz)} ${values1} ${values2}`);

    const answerUser = readlineSync.question(template.answer);
    const correctAnswer = getCorrectAnswer(values1, values2);
    countCorrectAnswer += isCorrect(answerUser, correctAnswer) ? 1 : isGaming = false;
    i += 1;
  }

  getResultGame(countCorrectAnswer, name);
};

export default startGameEven;
