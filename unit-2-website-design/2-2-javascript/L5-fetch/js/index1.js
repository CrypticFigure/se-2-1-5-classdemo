/*Use JS to fetch an image and display it on a webpage */

const imageURL = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_Blender.svg/3840px-Logo_Blender.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail';

console.log('Fetching Blender Logo Image');

fetch(imageURL) // Fetch the image, which is returned in the response as part of a promise with a bunch of metadata
                 // All of the promise producing code is abstracted. We need to provide the consuming code.

.then(response => {
    console.log(response);
    return response.blob(); // Remove metadata and convert the response into a blob with image data
})
.then(blob => {
    document.getElementById('blenderLogo').src = URL.createObjectURL(blob);
    console.log('Local URL: ' + URL.createObjectURL(blob));
})
.catch(error => {
    console.log('Error. Image could not be loaded.');
    console.error(error);
});