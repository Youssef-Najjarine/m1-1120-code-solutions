/* exported capitalizeWords */

function capitalizeWords(string) {
  var words = string.split(' ');
  var solution = [];
  for (var i = 0; i < words.length; i++) {
    const word = words[i];
    solution.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return solution.join(' ');
}
