/*
    Splitting & Slicing CSV Data
    Data from: data.giss.nasa.gov/gistemp/
    Values are temp differences from mean (14 deg-C)
    Mean from: earthobservatory.nasa.gov
*/

async function getData() {
    const response = await fetch('../data/test.csv');   // .. moves you up one folder level
    const data = await response.text();                 // CSV in TEXT format
    // console.log(data);

    // \n - new line character
    // split('\n') - will separate the table into an array of individual rows
    // slice(start, end) - return a new array starting at the index "start" up to "end"

    const table = data.split('\n').slice(1);    // Split by line and remove the first row
    // console.log(table);

    table.forEach(row => {
        const columns = row.split(','); // split each row into columns at each comma
        const year = columns[0];        // assign the year (type: string)
        const temp = columns[1];        // global temp deviation (str)
        const nhTemp = columns[2];      // northern hemi. temp deviation (str)
        const shTemp = columns[3];      // souther hemi. temp deviation (str)

        console.log(year, temp, nhTemp, shTemp);
        // parseFloat() all string values to work with them numerically
    })
}

getData();