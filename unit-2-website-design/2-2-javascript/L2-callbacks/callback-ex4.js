// Prompt for a username (higher order function)
function getUserName(callback) {
    const userName = prompt("Enter your name: ");
    //  greeting() is the callback function with username as the input
    callback(userName);
}

// Define greeting function
function greeting(name) {
    // Display username on the page
    document.getElementById("demo").innerHTML = 
        `<h1>Hello ${name}</h1>`;
}

// 1.   getUserName is called with callback function greeting()
// 2.   getUserName prompts for user name
// 3.   getUserName calls greeting() with user name input
// 4.   greeting() executes and displays the username
getUserName(greeting);