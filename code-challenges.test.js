// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

//const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe('newFib', () => {
//   it('takes a number of 6 and 10 and returns an array with the Fibonacci Sequence', () => {
//     const fibLength1 = 6
//     // Expected output: [1, 1, 2, 3, 5, 8]
//     const fibLength2 = 10
//     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     expect(newFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//   expect(newFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// })
// })

//RED - Good failure
// FAIL  ./code-challenges.test.js
// newFib
// ✕ takes a number of 6 and 10 and returns an array with the Fibonacci Sequence (1 ms)

// ● newFib › takes a number of 6 and 10 and returns an array with the Fibonacci Sequence

// ReferenceError: newFib is not defined

//   27 |     const fibLength2 = 10
//   28 |     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// > 29 |     expect(newFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//      |     ^
//   30 |   expect(newFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   31 | })
//   32 | })

//   at Object.expect (code-challenges.test.js:29:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.157 s
// Ran all test suites.
// error Command failed with exit code 1.

//PseudoCode
//input: a number (6)
//Output: an array within the fibonacci sequence
//process:Create a function newFibo, add the parameter of an array. 
//Create conditional statement declaring that if number is greater than 2, return fibo sequence
//create a variable that adds the same amount of index locations as much as the number
//create else statement to return "try again"



//that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.




// b) Create the function that makes the test pass.

// const newFibo = (number) => {
//   if (number > 2)
//   return []
// } else {
//   number <
// }



















// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// describe('leastToG', () => {
//   it('takes an object of studyMinutesWeek1 and 2 and returns an array for each value, sorted least to greatet', () => {
//     const studyMinutesWeek1 = {
//       sunday: 90,
//       monday: 30,
//       tuesday: 20,
//       wednesday: 15,
//       thursday: 30,
//       friday: 15,
//       saturday: 60
//     }  
//     const studyMinutesWeek2 = {
//       sunday: 100,
//       monday: 10,
//       tuesday: 45,
//       wednesday: 60,
//       thursday: 20,
//       friday: 15,
//       saturday: 65 }
//   expect(leastToG(studyMinutesWeek1)).toEqual("[sunday: 100, monday: 10, tuesday: 45, wednesday: 60, thursday: 20, friday: 15, saturday: 65 ]")
//   expect(leastToG(studyMinutesWeek2)).toEqual("[sunday: 100, monday: 10, tuesday: 45, wednesday: 60 thursday: 20, friday: 15, saturday: 65]")
// })
// })


//RED- Good failure - had to turn arrays into strings for the test to have good failure
// FAIL  ./code-challenges.test.js
//   leastToG
//     ✕ takes an object of studyMinutesWeek1 and 2 and returns an array for each value, sorted least to greatet

//   ● leastToG › takes an object of studyMinutesWeek1 and 2 and returns an array for each value, sorted least to greatet

//     ReferenceError: leastToG is not defined

//       124 |       friday: 15,
//       125 |       saturday: 65 }
//     > 126 |   expect(leastToG(studyMinutesWeek1)).toEqual("[sunday: 100, monday: 10, tuesday: 45, wednesday: 60, thursday: 20, friday: 15, saturday: 65 ]")
//           |   ^
//       127 |   expect(leastToG(studyMinutesWeek2)).toEqual("[sunday: 100, monday: 10, tuesday: 45, wednesday: 60 thursday: 20, friday: 15, saturday: 65]")
//       128 | })
//       129 | })

//       at Object.expect (code-challenges.test.js:126:3)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.136 s, estimated 1 s
// Ran all test suites.

// b) Create the function that makes the test pass.




















// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []


describe('newSum', () => {
  it('takes an array, adds the numbers inside, returns the sum', () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = "[]"
    // Expected output: [] 
  expect(newsSum(accountTransactions1)).toEqual([100, 83, 60, 51])
  expect(newSum(accountTransactions2)).toEqual([250, 161, 261, 165])
  expect(newSum(accountTransactions3)).toEqual([[]])
  })
})


//RED- Good Failure
// FAIL  ./code-challenges.test.js
// newSum
//   ✕ takes an array, adds the numbers inside, returns the sum (1 ms)

// ● newSum › takes an array, adds the numbers inside, returns the sum

//   ReferenceError: newsSum is not defined

//     198 |     const accountTransactions3 = "[]"
//     199 |     // Expected output: [] 
//   > 200 |   expect(newsSum(accountTransactions1)).toEqual([100, 83, 60, 51])
//         |   ^
//     201 |   expect(newSum(accountTransactions2)).toEqual([250, 161, 261, 165])
//     202 |   expect(newSum(accountTransactions3)).toEqual([[]])
//     203 |   })

//     at Object.expect (code-challenges.test.js:200:3)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.161 s
// Ran all test suites.
// error Command failed with exit code 1.

//b) Create the function that makes the test pass.

//Pseudo Code:
//input
//output
//process: take an array and iterate across it, allowing the numbers to accumulate.
//Add one index inside the string to the next index.
//iterate across the array by using a for loop
//create new variable that keeps the new value
//take the sum
//return an array

const newSum = (array) => {
  for(let i=0; i < array.length; i++)
  const newArray { accountTransactions1.
  }
}
console.log(newSum())