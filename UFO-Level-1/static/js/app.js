// from data.js
var ufo_sightings = data;

// Reference to table body
var tbody = d3.select("tbody");

// Function to build the table to display UFO data
function buildTable(ufo_sightings) {

    // Removes existing data in the table
    tbody.html("");

    // Loop to read the data for the table
    ufo_sightings.forEach(function(ufoOccurance) {
        console.log(ufoOccurance);

        //Append a table row to the table body    
        var row = tbody.append("tr");

        // Iterate through each value
        Object.entries(ufoOccurance).forEach(function([key, value]) {
        console.log(key, value);
        
        // Append a cell to each row for each value of a UFO sighting
        var cell = row.append("td");
        cell.text(value);
        
        });
    
    })

};

// Display the table
buildTable(ufo_sightings);

//var button = d3.select("#filter-btn")

// Define the function to trigger the "filter button" - event handler - when it is clicked
function handleClick() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the value property of the input with the id=datetime 
    //to get the value elements for date
    var eventDate  = d3.select("#datetime").property("value");
    console.log(eventDate);

    // Filter through the original data - make a copy of the original data and filter through the copy
    // by each filter input

    var filterData = ufo_sightings;

    //Set up a conditional to compare the input values
    if(eventDate) {
        filterData = filterData.filter(row => row.datetime == eventDate);
    };
    
    // Display the copy table
    buildTable(filterData);   

};

//Attach event to the button.on function
d3.select("#filter-btn").on("click", handleClick)

// Display table 
buildTable(ufo_sightings);

