var numbers = [25, 47, 69];
var maximumValue = Math.max(25, 47, 69);
console.log('numbers: ', numbers);
console.log('MaximumValue: ', maximumValue);

var heroes = ['Superman', 'Arnold Schwarzenegger', 'Hulk', 'Batman'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'Brave New World',
    author: 'Aldous Huxley'
  }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.slice(1);
console.log('Library: ', library);

var fullName = 'Youssef Najjarine';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
