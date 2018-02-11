/*--FACTORS

  Write a function that returns an array
  containing all of the factors of a number.

  For example: factors(10) returns [1, 2, 5, 10]
*/

var factors;

factors = function(num) {
  var factors = [];

  for (var i = 0; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors || null;
};

/*--Mocha Testing--*/


module.exports = factors;
