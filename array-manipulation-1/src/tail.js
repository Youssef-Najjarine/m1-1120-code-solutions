/* exported tail */
function tail(array) {
  var solution = [];
  for (var i = 1; i < array.length; i++) {
    solution.push(array[i]);
  }
  return solution;
}
