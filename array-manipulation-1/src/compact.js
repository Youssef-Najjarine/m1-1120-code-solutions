/* exported compact */

function compact(array) {
  var solution = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      solution.push(array[i]);
    }

  }
  return solution;
}
