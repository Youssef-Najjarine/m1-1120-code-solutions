/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  let result;
  if (number < 5) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
isUnderFive(3);

function isEven(number) {
  var answer = number % 2;
  let result;
  if (answer === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
isEven(5);

function startsWithJ(string) {
  var firstChar = string[0];
  let result;
  if (firstChar === 'J') {
    result = true;
  } else {
    result = false;
  }
  return result;
}
startsWithJ('JavaScript');

function isOldEnoughToDrink(person) {
  let result;
  if (person >= 21) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
var youssef = {
  name: 'Youssef Najjarine',
  age: 24
};
isOldEnoughToDrink(youssef.age);

function isOldEnoughToDrive(person) {
  let result;
  if (person >= 16) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
isOldEnoughToDrive(bart.age);

function isOldEnoughToDrinkAndDrive(person) {
  let result;
  if (person >= 21 && person >= 16 && person <= 21 && person <= 16) {
    result = false + '-This is Illegal';
  } else {
    result = false + '-This is Illegal';
  }
  return result;
}
var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
isOldEnoughToDrinkAndDrive(homer.age);

function categorizeAcidity(pH) {
  let result;
  if (pH === 7) {
    result = 'neutral';
  } else if (pH >= 0 && pH < 7) {
    result = 'acid';
  } else if (pH > 7 && pH <= 14) {
    result = 'base';
  } else {
    result = 'invalid pH level';
  }
  return result;
}
categorizeAcidity(7);
categorizeAcidity(3);
categorizeAcidity(12);
categorizeAcidity(-5);

function introduceWarnerBro(name) {
  let result;
  if (name === 'yakko' || name === 'wakko') {
    result = 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    result = 'I\'m cute';
  } else {
    result = 'Goodnight everybody!';
  }
  return result;
}
introduceWarnerBro('yakko');
introduceWarnerBro('wakko');
introduceWarnerBro('dot');
introduceWarnerBro('youssef');
