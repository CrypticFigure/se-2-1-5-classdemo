// Define promise
let promiseToCleanRoom = new Promise((resolve, reject) => {

    // Part 1: What promise must do (async)
    const success =  Math.random() > 0.5; // 50/50 chance of cleaning

    // Part 2: Fulfill or Reject
    if (success) {
        resolve('clean');   // Passed to .then()
    } else {
        reject('not clean');    // Passed to .catch()
    }
});

// Part 3: Call .then() or .catch() when promise is settled
promiseToCleanRoom.then((fromResolve) => {
    console.log(`The room is ${fromResolve}`);
}).catch((fromReject) => {
    console.log(`The room is ${fromReject}`);
});

// Console log the promise state
console.log(promiseToCleanRoom);