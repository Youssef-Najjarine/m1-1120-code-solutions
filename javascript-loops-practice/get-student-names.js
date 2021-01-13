/* exported getStudentNames */

function getStudentNames(students) {
  var solution = [];

  for (var i = 0; i < students.length; i++) {
    solution.push(students[i].name);
  }
  return solution;
}
