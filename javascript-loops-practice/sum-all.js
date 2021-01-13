/* exported sumAll */

function sumAll(numbers) {

  var sum = 0;

  for (var i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
  }

  return sum;
}
