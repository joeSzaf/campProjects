/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
*/
function diffArray(arr1, arr2) {
  var newArr = [];

  // checks for duplicates in both arrays for values in arr1
  for (let val1 of arr1) {
    if (!arr2.includes(val1)) {
      newArr.push(val1);
    }
  }

  // checks for duplicates in both arrays for values in arr2
  for (let val2 of arr2) {
    if (!arr1.includes(val2)) {
      newArr.push(val2);
    }
  }

  return [...new Set(newArr)];
}
