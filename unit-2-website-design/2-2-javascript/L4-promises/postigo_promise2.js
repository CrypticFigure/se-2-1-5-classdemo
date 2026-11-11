/*
    Name: Sebastian Postigo
    Program Name: Odd Data Promise
    Date: 11/11/26
    Objective: Promise resolves only if data is an odd number
*/

const value = data => {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {  // if not a number, reject with according error
            reject('Error. Not a number.');
        } else {    // if it is a number
            if (data % 2 === 0) {   // reject with error, 'even', if data is even
                reject('even');
            } else {    // if data is an odd number, resolve promise
                resolve('odd');
            }
        }
    });
}

// Test values for odd, even, and non-number inputs
const testValue = 4;
// const testValue = 5;
// const testValue = 'non-number';

// Test call with even number
value(testValue)
.then((fromResolve) => {    // Logs resolve statement of promise
    console.log(`The number is ${fromResolve}`);
})
.catch((error) => { // Catches and logs promise errors
    console.log('Rejected: ', error);
});