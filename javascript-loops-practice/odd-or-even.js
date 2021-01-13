/* exported oddOrEven */
function oddOrEven(numbers) {
  var solution = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      solution.push('even');
    } else {
      solution.push('odd');
    }
  }
  return solution;
}
