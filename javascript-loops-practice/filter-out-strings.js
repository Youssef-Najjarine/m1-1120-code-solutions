/* exported filterOutStrings */

function filterOutStrings(values) {
  var solution = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      solution.push(values[i]);
    }
  }
  return solution;
}
