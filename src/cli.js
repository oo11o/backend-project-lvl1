import readlineSync from 'readline-sync';

const template = {
    welcome: 'Welcome to the Brain Games',
    question: 'May I have your name?'
}

console.log(template.welcome);
const name = readlineSync.question(`${template.question} `);
console.log(`Hello, ${name}!`);

export default name;
