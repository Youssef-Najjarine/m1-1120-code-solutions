/* exported omit */
function omit(source, keys) {
  const accumulator = {};
  for (const key of Object.keys(source)) {
    if (!keys.includes(key)) {
      accumulator[key] = source[key];
    }

  }
  return accumulator;
}
