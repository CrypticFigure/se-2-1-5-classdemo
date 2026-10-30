// Nesting callbacks leads to hard-to-read code

// Nested callbacks by simulating fetching of data, process,
    // saving, and confirming

// setTimeout() calls simulate the time required to complete task

// Step 1: Fetch data from server
function fetchDataFromServer(ipAddress, callback) {
    setTimeout(() => {
        const data = {id: 1, name: 'Sample Data'};
        console.log(`Data fetched from the server ${ipAddress}: `, data);
        callback(data);
    }, 1000);
}

// Step 2: Process the data
function processServerData(data, callback) {
    setTimeout(() => {
        data.processed = true; // Add 'processed' key to the object with value of true
        console.log('Data processed: ', data);
        callback(data);
    }, 1000);
}

// Step 3: Save the data
function saveDataToServer(data, callback) {
    setTimeout(() => {
        const date = new Date();
        data.lastSaved = date; // Add 'lastSaved' key to the object with value of the date
        console.log('Data saved to server: ', data);
        callback(data);
    }, 1000);
}

// Step 4: Send confirmation email
function sendConfirmationToClient(data, callback) {
    setTimeout(() => {
        data.clientConfirmaiton = true; // Add 'clientConfirmation' key to the object with value of true
        console.log('Confirmation sent: ', data);
        callback(data);
    }, 1000);
}

const serverAddress = '114.102.9.1';

fetchDataFromServer(serverAddress, (data) => {
    processServerData(data, (processedData) => {
        saveDataToServer(processedData, (savedData) => {
            sendConfirmationToClient(savedData, (confirmationData) => {
                console.log('All operations complete: ', confirmationData);
            })
        })
    })
})