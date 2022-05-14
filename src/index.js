const getRandom = (count = 100) => Math.floor(Math.random() * count);

const template = {
  rulesEvenGame: 'Answer "yes" if the number is even, otherwise answer "no".',
  rulesCalcGame: 'What is the result of the expression?',
  rulesGcdGame: 'Find the greatest common divisor of given numbers.',
  rulesProgressive: 'What number is missing in the progression?',
  rulesPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  questionQuiz: 'Question:',
  answer: 'Your answer: ',
  answerWrong: 'is wrong answer ;(. Correct answer was',
  answerWrongGcd: 'Let\'s try again, Sam!',
  answerCorrect: 'Correct!',
  gameDone: 'Congratulations,',
  gameFail: 'Let\'s try again,',
};

const getResultGame = (countCorrectAnswer, name) => {
  const result = countCorrectAnswer === 3
    ? `${template.gameDone} ${name}!`
    : `${template.gameFail} ${name}!`;
  console.log(result);
};



const isCorrect = (answerUser, correctAnswer) => {
  if (correctAnswer === answerUser) {
    console.log(template.answerCorrect);
    return true;
  }
  console.log(`'${answerUser}' ${template.answerWrong} '${correctAnswer}'`);
  return false;
};

export {
  getRandom, getResultGame, isCorrect, template,
};
