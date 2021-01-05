/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];

  for (var currentNumber = 1; currentNumber < 11; currentNumber++) {
    numbers.push(currentNumber);
  }
  return numbers;
}
console.log('getNumbersToTen() \n', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];

  for (var currentNumber = 2; currentNumber < 22; currentNumber += 2) {
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty() \n', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var repeated = '';
  var count = 1;
  while (times > count) {
    repeated += word;
    times--;
  }
  return repeated;
}
console.log('repeatWord(\'javascript\', 30)', repeatWord('javascript', 30));

function logEachCharacter(string) {
  var i = 0;
  for (i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log('logEachCharacter(\'javascript\')');
console.log(logEachCharacter('javaScript'));

function doubleAll(numbers) {
  var doubled = [];
  var i = 0;
  for (i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([5, 7, 9, 11])\n', doubleAll([5, 7, 9, 11]));

function getKeys(object) {
  var keys = [];
  var key;
  for (key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('getKeys({isbn: 978 - 1449365035, title: Speaking JS, author: Dr.Axel Rauschmayer})');
console.log(getKeys({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' }));

function getValues(object) {
  var values = [];
  var key;
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('getValues({isbn: 978 - 1449365035, title: Speaking JS, author: Dr.Axel Rauschmayer})');
console.log(getValues({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' }));
