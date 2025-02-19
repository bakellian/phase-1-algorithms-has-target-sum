function hasTargetSum(array, target) {
//   iterate through each number in the array
for (let i = 0; i < array.length; i++) {
  //   for the current number identify a complimentary number that will add up to the targer. (comp number === target - current number)
  const complimentary = target - array[i]
  //iterate throug the rest of the array
  for (let j = i + 1; j < array.length; j++) {
    //check if any number is our compliment
    if (array[j] === complimentary) return true
  }
}
//if we reach the end of the array return false 
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
hasTargetSum([3, 8, 12, 4, 11, 7], 10)
iterate through each number in the array
  for the current number identify a complimentary number that will add up to the targer. (comp number === target - current number)
    iterare throug the rest of the array and check is any number is our compliment 
    if yes return true

if end of array is reached - return false 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
