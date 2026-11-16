/*
    This script file will demonstrate how to create a scatter plot
    Data from: https://data.giss.nasa.gov/gistemp/ (Nozal annual means 1880-pres)
    Values are temperature differences from the mean of 14 deg-C
    Mean form: https://earthobservatory.nasa.gov/world-of-change/global-temperatures
*/

async function getData() {
    const response = await fetch('../data/global-mean-temp.csv') // .. to move up one folder
    const data = await response.text();
    // console.log(data);

    const xYears = [];  // x-axis labels = years
    const yTemps = [];   // y-axis labels = global temperatures
    const yNHtemps = [];     // y-axis = Northern Hemisphere temps
    const ySHtemps = [];// y-axos = Southern Hemisphere temps

    // \n - new line character
    // split('\n) - will separate the table into an array of individual rows
    // slice(start, end) - returns a new array starting at index 'start' up to but not including 'end'

    const table = data.split('\n').slice(1);
    // console.log(table);

    table.forEach(row => {
        const columns = row.split(',');         // split each row into columns using the commas
        const year = parseFloat(columns[0]);    // assign year value
        xYears.push(year);                      // push year value into array xYears

        const yTemp = parseFloat(columns[1]);   // Convert global value from a string to a float
        yTemps.push(yTemp + 14);                // Add 14 to convert the difference to a temp value (deg-C)

        const nhTemp = parseFloat(columns[2]);   // Convert global value from a string to a float
        yNHtemps.push(nhTemp + 14);                /// Add 14 to convert the difference to a temp value (deg-C)

        const shTemp = parseFloat(columns[3]);   // Convert global value from a string to a float
        ySHtemps.push(shTemp + 14);                /// Add 14 to convert the difference to a temp value (deg-C)

        console.log(year, yTemp, nhTemp, shTemp);
    });

    return {xYears, yTemps, yNHtemps, ySHtemps}; // Use {} to return multiple values as an obj
}

async function createChart() {
    const data = await getData();   // Wait until getData() processes the data
    const lineChart = document.getElementById('lineChart');     // Get the html element that will hold the chart
    const degSymbol = String.fromCharCode(176); // Display the temp degree symbol

    const myChart = new Chart(lineChart, {  // Construct the chart    
        type: 'line',
        data: {                         // Define data
            labels: data.xYears,        // x-axis labels
            datasets: [                 
                {
                    label:    `Combined Global Land-Surface Air and Sea-Surface Water Temperature in ${degSymbol}C`,     // Dataset label for legend
                    data:     data.yTemps,     // Reference to array of y-values
                    fill:     false,           // Fill area under the linechart (true = yes, false = no)
                    backgroundColor:  'rgba(255, 0, 132, 0.2)',    // Color for data marker
                    borderColor:      'rgba(255, 0, 132, 1)',      // Color for data marker border
                    borderWidth:      1   // Data marker border width
                },
                {
                    label:    `Combined N. H. Land-Surface Air and Sea-Surface Water Temperature in ${degSymbol}C`,     // Dataset label for legend
                    data:     data.yNHtemps,     // Reference to array of y-values
                    fill:     '-1',           // Fill area under the linechart (true = yes, false = no)
                    backgroundColor:  'rgba(0, 102, 255, 0.2)',    // Color for data marker
                    borderColor:      'rgba(0, 102, 255, 1)',      // Color for data marker border
                    borderWidth:      1,   // Data marker border width
                    tension: 0.5 // Smoothness of line. 0 = straight, 1 = smooth
                },
                {
                    label:    `Combined S. H. Land-Surface Air and Sea-Surface Water Temperature in ${degSymbol}C`,     // Dataset label for legend
                    data:     data.ySHtemps,     // Reference to array of y-values
                    fill:     false,           // Fill area under the linechart (true = yes, false = no)
                    backgroundColor:  'rgba(0, 153, 51, 0.2)',    // Color for data marker
                    borderColor:      'rgba(0, 153, 51, 1)',      // Color for data marker border
                    borderWidth:      1,   // Data marker border width
                }
        ]
        },
        options: {                        // Define display chart display options 
            responsive: true,             // Re-size based on screen size
            maintainAspectRatio: false,
            scales: {                     // Display options for x & y axes
                x: {                      // x-axis properties
                    title: {
                        display: true,
                        text: 'Year',     // x-axis title
                        font: {                   // font properties
                            size: 14
                        },
                    },
                    ticks: {                      // x-axis tick mark properties
                        callback: function(val,index) {
                            // Control the labeling of the tick marks.
                            return index % 5 === 0 ? this.getLabelForValue(val) : '';
                        },
                    min: 0,                     // starting value      
                    font: {
                        size: 14  
                    },
                    },
                    grid: {                       // x-axis grid properties
                        color: '#6c767e'
                    }
                },
                y: {                              // y-axis properties
                    title: {
                        display: true,                          
                        text: 'Global Mean Temperatures (°C)',     // y-axis title
                        font: {
                            size: 14
                        },
                    },
                    ticks: {    
                        maxTicksLimit: data.yTemps.length/10,        // Limit # of tick marks
                        font: {
                            size: 12
                        }
                    },
                    grid: {                       // y-axis gridlines
                        color: '#6c767e'
                    }
                }
            },
            plugins: {                  // Display options for title and legend
                title: {
                    display: true,
                    text: 'Global Mean Temperature vs. Year (since 1880)',
                    font: {
                        size: 24,
                    },
                    color: '#black',
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                legend: {
                    display: true,
                    align: 'start',
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }       
    });
}

createChart();