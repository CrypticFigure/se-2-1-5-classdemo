// Asynchronous programming example

console.log('Function One');

setTimeout(() => {                  // Delay function two by 2 seconds
    console.log('Function Two')     // Param 1 - callback function
}, 2000);                           // Param 2 = wait time in ms

console.log('Function Three');