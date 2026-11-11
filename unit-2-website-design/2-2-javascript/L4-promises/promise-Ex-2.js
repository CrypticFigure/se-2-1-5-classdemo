// 1. new Promise(executor) -> start async operations
const fetchUserData = new Promise((resolve, reject) => {
    console.log('1. Promise is [PENDING] - Initializing async operations');

    // Simulate an asynchronous network request using setTimeout
    setTimeout(() => {
        const success = Math.random() > 0.5; // 50% chance of success

        // Resolve or reject the result
        if (success) {
            resolve({id: 172, name: 'Kenneth', role: 'Developer'});
        } else {
            reject(new Error('Network connection timed out'));
        }
    }, 1000); // 1 second delay
});

// 2. Handlers added to the microtask queue (list of jobs needed to execute the promise)
fetchUserData
    // If the promise is fulfilled:
    .then((userData) => {
        console.log('2a. Promise is fulfilled');
        console.log('Recieved Data: ', userData);
        return userData.role;   // Return a new promise containing the string 'Developer'
    })
    // Example of chaining the result of the fulfilled promise to a new promise
    .then((role) => {
        console.log(`3. User role is ${role}`);
    })
    // Triggered if the promise is rejected
    .catch((error) => {
        console.log('2b. Promise is rejected');
        console.error('Error: ', error.message);
    })
    // Executes regardless of whether the promise was fulfilled or rejected
    .finally(() => {
        console.log('4. Operations complete. Perform necessary cleanup actions');
    });

console.log('0. This script will run BEFORE the promise is handled');