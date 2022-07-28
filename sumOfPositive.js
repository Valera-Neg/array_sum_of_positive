function positiveSum(arr) {
  const newArr = arr.filter(e => e > 0)
  let initialValue = 0;
  const sum = newArr.reduce((prev, current) => prev + current, initialValue );
  return sum
}

console.log(positiveSum([1,2,3,4,5])) // -> 15
console.log(positiveSum([1,-2,3,4,5])) // -> 13
console.log(positiveSum([])) // -> 0
console.log(positiveSum([-1,-2,-3,-4,-5])) // -> 0
console.log(positiveSum([-1,2,3,4,-5])) // -> 9