/*--UNIQUE

  Write a function that takes an array and returns
  a new sorted array containing all of the unique elements
  of the original array.

  For example: unique([1, 2, 2, 3]) returns [1, 2, 3];
*/

var unique;

unique = function(arr) {
  return arr.sort(compareNumbers).filter(function(el, i, arr) {
    return i == arr.indexOf(el);
  });
};

function compareNumbers(a, b) {
  return a - b;
}

/*--Mocha Testing--*/


module.exports = unique;
