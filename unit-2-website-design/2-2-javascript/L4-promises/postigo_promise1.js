/*
    Name: Sebastian Postigo
    Program Name: Greeting Promise
    Date: 11/11/26
    Objective: Refactor greeting function to return promise object
*/

function greeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('hello world');
            resolve();
        }, 2000); // 2 second timeout
    });
}

greeting();