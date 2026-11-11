/*
    Name: Sebastian Postigo
    Program Name: Promise Server Call Refactor
    Date: 11/11/26
    Objective: Refactor nested callback code with promises
*/

// Step 1: Fetch data from server
function fetchDataFromServer(ipAddress) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Create and resolve data object if ipAddress is valid
            if (ipAddress) {
                const data = {id: 1, name: 'Sample Data'};
                console.log(`Data fetched from the server ${ipAddress}: `, data);
                resolve(data);
            } else { // Reject if ip is invalid
                reject('No Valid IP for Server Call');
            }
        }, 1000); // 1 second delay
    });
}

// Step 2: Process the data
function processServerData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) { // Only process if data is valid
                data.processed = true; // Add 'processed' key to the object with value of true
                console.log('Data processed: ', data);
                resolve(data);
            } else { // Reject if data is invalid
                reject('Data is Invalid');
            }
        }, 1000);
    })
}

// Step 3: Save the data
function saveDataToServer(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const date = new Date();
            data.lastSaved = date; // Add 'lastSaved' key to the object with value of the date
            console.log('Data saved to server: ', data);
            resolve(data);
        }, 1000);
    })
}

// Step 4: Send confirmation email
function sendConfirmationToClient(data) {
    return new Promise((resolve) => {
            setTimeout(() => {
            data.clientConfirmaiton = true; // Add 'clientConfirmation' key to the object with value of true
            console.log('Confirmation sent: ', data);
            resolve(data);
        }, 1000);
    })
}

// Test server addresses for valid and invalid calls
const serverAddress = '114.102.9.1';
// const serverAddress = null;

// Use .then() to chain returned promises for all functions
fetchDataFromServer(serverAddress)
.then(processServerData)
.then(saveDataToServer)
.then(sendConfirmationToClient)
.catch((error) => { // catch and log reject errors
    console.log('Request failed. Error: ', error);
});