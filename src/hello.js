import readlineSync from 'readline-sync';
import template from './cli.js';

const name = readlineSync.question(`${template.question} `);
console.log(`Hello, ${name}!`);

export default name;
