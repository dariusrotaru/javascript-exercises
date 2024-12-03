const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  sumA = array.reduce((acc, x) => acc+ x, 0);
  return sumA;
};

const multiply = function(array) {
  multiplyA = array.reduce((acc, x) => acc * x, 1);
  return multiplyA;
};

const power = function(a, b) {
  let powerResult = 1;
	for(let i = 1; i <= b; i++){
    powerResult = powerResult * a;
  }
  return powerResult;
};

const factorial = function(a) {
	let factorialResult = 1;
  if(a === 0)
  {
    return factorialResult;
  }
  for(let i = 1; i <= a; i++){
    factorialResult *= i;
  }
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
