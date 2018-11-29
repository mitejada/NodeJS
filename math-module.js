const string = require('./strings-module.js')

const sum = (num1, num2) => {
  return num1 + num2
};


const multiple = (num1, num2) => {
  return num1 * num2
};

const divide = (num1, num2) => {
  return num1 / num2
}

const square = (num1) => {
  return num1 * num1
}

module.exports = {
  sum: sum,
  multiple: multiple,
  divide: divide,
  square: square,
  string: string
}
