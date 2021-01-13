/* exported filterOutNulls */

function filterOutNulls(values) {
  var solution = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      solution.push(values[i]);
    }
  }
  return solution;
}
