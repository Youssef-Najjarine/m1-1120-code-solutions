/* exported getValues */
function getValues(object) {
  var solution = [];
  for (const prop in object) {
    solution.push(object[prop]);
  }
  return solution;
}
