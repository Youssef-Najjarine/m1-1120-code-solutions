/* exported reverse */
function reverse(array) {
  var solution = [];
  for (var i = 0; i < array.length; i++) {
    solution.unshift(array[i]);
  }
  return solution;
}
