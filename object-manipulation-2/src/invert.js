/* exported invert */
function invert(source) {
  var accumulator = {};
  for (const [key, value] of Object.entries(source)) {
    accumulator[value] = key;
  }
  return accumulator;
}
