/*
    Splitting & Slicing CSV Data
    Data from: data.giss.nasa.gov/gistemp/
    Values are temp differences from mean (14 deg-C)
    Mean from: earthobservatory.nasa.gov
*/

async function getData() {
    const response = await fetch('../data/test.csv');   // .. moves you up one folder level
    const data = await response.text();                 // CSV in TEXT format
    console.log(data);
}
getData();