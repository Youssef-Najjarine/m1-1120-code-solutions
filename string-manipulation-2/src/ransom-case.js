/* exported ransomCase */
function ransomCase(string) {
  var solution = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      solution += string[i].toLowerCase();
    } else {
      solution += string[i].toUpperCase();
    }
  }
  return solution;

}
