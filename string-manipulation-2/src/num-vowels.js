/* exported numVowels */

function numVowels(string) {
  var vowels = 0;
  for (var i = 0; i < string.length; i++) {
    const letter = string[i];
    if (['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())) {
      vowels++;
    }
  }
  return vowels;
}
