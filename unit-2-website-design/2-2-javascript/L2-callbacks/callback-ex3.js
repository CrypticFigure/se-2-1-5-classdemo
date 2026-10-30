// This program will demonstrate why asynchronous functions are necessary.

// process() is implemented as a callback function so that it's
//      execution occurs asynchronously

function download(url, callback) {

    // script to download picture
    console.log(`Downloading ${url}`);

    // setTimeout() simulates network download delay
    setTimeout(() => {
        
        // Process picture after download
        callback(url)
    }, 2000);       // Network delay of 2 seconds
}

// function to process the picture after downloading
function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.hths.mcvsd.org/o/hths/article/2253921'

download(url, process)