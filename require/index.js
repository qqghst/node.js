const customModule = require('./custom-module');

const increase = customModule.increaseFunc(10, 23);
const decrease = customModule.decreaseFunc(100, 12);

console.log(`Результат increaseFunc - ${increase}`);
console.log(`Результат decreaseFunc - ${decrease}`);