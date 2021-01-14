/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var left = string.slice(0, firstIndex);
  var middle = string.slice(firstIndex + 1, secondIndex);
  var right = string.slice(secondIndex + 1);
  return left + string[secondIndex] + middle + string[firstIndex] + right;

}
