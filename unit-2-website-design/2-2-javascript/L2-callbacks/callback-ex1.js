// Synchronous Example

// Higher order function (HoF) filter() accepts a # array
//      return an array of odd #s

function filter(numbers, callback) {
    let results = [];
    for(const number in numbers) {
        if (callback(number)) {
            results.push(number);
        }
    }
    return results;
}

// Define callback function that will be called as the second
//      paramter for filter()
function isOdd(number) {
    return number % 2 != 0;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];

// Call filter() with isOdd() as an argument.
// isOdd() is the callback function
console.log(filter(numbers, isOdd))