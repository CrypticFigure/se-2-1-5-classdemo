/*
    Name: Sebastian Postigo
    Program Name: Cook Pizza Promise
    Date: 11/11/26
    Objective: Cooking pizza promise that only resolves without anchovies
*/

const orderPizza = topping => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (topping === 'anchovies') { // Reject if topping is anchovies
                reject(new Error("Error: We don't serve pizza with anchovies."));
            } else { // resolve with chosen topping if not anchovies
                resolve(`Your ${topping} pizza is ready!`);
            }
        }, 2000); // 2 second cooking delay
    });
}

// Test toppingChoices for resolving and rejecting promises
// const toppingChoice = 'anchovies';
const toppingChoice = 'mushroom';

// Call function to test promise
orderPizza(toppingChoice)
.then(fromResolve => { // Promise resolves and logs message
    console.log(fromResolve);
})
.catch((error) => { // Catches and logs 'anchovies' error
    console.log(error.message);
});