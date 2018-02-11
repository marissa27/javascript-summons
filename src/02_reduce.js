/*--REDUCE

  Return the sum of all the elements in an array
  plus an optional initial value.

  For example: reduce([1, 2, 3], 10) returns 16
*/

var reduce;

reduce = function(arr, initial) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (initial) {
    return arr.reduce(reducer) + initial;
  } else {
    return arr.reduce(reducer);
  }
};



/*--Mocha Testing--*/


module.exports = reduce;
