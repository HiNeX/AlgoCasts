// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    let r = ''

    if (n % 3 === 0) r += 'fizz'
    if (n % 5 === 0) r += 'buzz'

    return r ? r : n
}

module.exports = fizzBuzz;
