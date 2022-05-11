#!/usr/bin/env node
import name from '../src/cli.js';

import readlineSync from "readline-sync";
const name = readlineSync.question(`${template.question} `);
console.log(`Hello, ${name}!`);