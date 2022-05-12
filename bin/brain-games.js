#!/usr/bin/env node
import readlineSync from 'readline-sync';
import template from '../src/cli.js';

const name = readlineSync.question(`${template.question} `);
console.log(`Hello, ${name}!`);

export default name
