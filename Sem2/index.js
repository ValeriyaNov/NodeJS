//import calculateResultSum from './calc.js';
const calc = require('./calc.js');
require('colors');
const total = calc([2.1, 2.2, 3.1], 0.9);
const text = 'Total sum:' + total + 'rub';
console.log((total > 50) ? text.red : text.green);