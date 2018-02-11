/*--INDEX WORDS

  Write a function that takes an array containing a list of words
  and returns an object mapping out the first letter of each word
  to an array of the words starting with that letter.

  For example: indexWords(["apple", "car", "cat"]) returns {a: ["apple"], c: ["car", "cat"]}
*/

var indexWords;

indexWords = function(arr) {
  var sortedArr = arr.sort();
  var solveArr = sortedArr.reduce(function(acc, word) {
  var key = word[0];

  if(!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(word)

  return acc
 }, {});
  return solveArr
};

/*--Mocha Testing--*/


module.exports = indexWords;
