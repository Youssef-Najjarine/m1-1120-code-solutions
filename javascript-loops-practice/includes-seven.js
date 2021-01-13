/* exported includesSeven */
function includesSeven(array) {
  // var result = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      // result = true;
      return true;
    }
  }
  // return result
  return false;
}
