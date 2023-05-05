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

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
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
//process:




// b) Create the function that makes the test pass.





















// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe('leastToG', () => {
  it('takes an object of studyMinutesWeek1 and 2 and returns an array for each value, sorted least to greatet', () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }  
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65 }
  expect(leastToG(studyMinutesWeek1)).toEqual([sunday: 100, monday: 10, tuesday: 45, wednesday: 60, thursday: 20, friday: 15, saturday: 65 ])
  expect(leastToG(studyMinutesWeek2)).toEqual([sunday: 100, monday: 10, tuesday: 45, wednesday: 60 thursday: 20, friday: 15, saturday: 65])
})
})





// b) Create the function that makes the test pass.




















// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
