/* exported getKeys */
function getKeys(object) {
  var solution = [];
  for (const prop in object) {
    solution.push(prop);
  }
  return solution;
}
