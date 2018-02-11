/*--MEDIAN

  Write a function that finds the median of a given array of integers.
  If the array has an odd number of integers, return the middle item
  from the sorted array. If the array has an even number of integers,
  return the average of the middle two items from the sorted array.

  For example: median([1, 3, 5]) returns 3
*/

var median;

median = function(arr) {
  const reducer = (acc, val) => acc + val;

  if (!arr.length) {
    return arr
  } else if (arr.length % 2 === 0) {
    return (arr.reduce(reducer) / arr.length).toFixed();
  } else {
    let sortedArr = arr.sort(numberSort);
    let middle = (arr.length / 2).toFixed() - 1;
    return sortedArr[middle]
  }
};

function numberSort(a, b) {
  return a - b;
}

/*--Mocha Testing--*/


module.exports = median;
