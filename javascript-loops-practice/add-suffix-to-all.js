/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var solution = [];
  for (var i = 0; i < words.length; i++) {
    solution.push(words[i] + suffix);
  }
  return solution;

}
