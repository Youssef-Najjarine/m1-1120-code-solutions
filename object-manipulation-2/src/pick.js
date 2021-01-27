/* exported pick */
function pick(source, keys) {
  const accumulator = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      accumulator[key] = source[key];
    }

  }
  return accumulator;
}
