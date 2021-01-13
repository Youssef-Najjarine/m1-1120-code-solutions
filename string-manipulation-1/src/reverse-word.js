/* exported reverseWord */
function reverseWord(word) {
  var solution = '';
  for (var i = 0; i < word.length; i++) {
    solution = word[i] + solution;
  }
  return solution;
}
