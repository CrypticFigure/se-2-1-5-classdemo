/*Use JS to fetch image data using async and await
(condense .then code and make it more readable)

-- "Async" function always retunrs a promise
-- "Await" can only be used inside "async" function
-- "Await" pauses function until resolved or rejected
*/

const imageURL = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_Blender.svg/3840px-Logo_Blender.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail';
console.log('Fetching Blender Logo Image');

async function getImage(url) {
    // Await result of fetch and store it in a variable (this is the response)
    const response = await fetch(url);
    const blob = await response.blob(); // Convert response to a blob

    // Convert blob to HTML URL
    document.getElementById('blenderLogo').src = URL.createObjectURL(blob);
    console.log('Local URL: ' + URL.createObjectURL(blob));
}

getImage(imageURL)
    .then(resolve => {
        console.log('Image loaded');                // Promise fulfilled
    })
    .catch(error => {
        console.log('Image could not be loaded');   // Promise rejected
        console.error(error);
    })