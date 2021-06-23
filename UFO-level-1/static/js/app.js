// from data.js
var tableData = data;

// YOUR CODE HERE!

// create variables
var button = d3.select("#filter-btn");

var form = d3.select("#form");

var table = d3.select("#ufo-table");

var tbody = d3.select("#tbody");

console.log(tableData);

// Load the full table so user can more easily choose a date to filter by
data.forEach(ufo => {
  var row = tbody.append("tr")
  Object.entries(ufo).forEach(([key, value]) =>{
      row.append("td").text(value);
  })
})

// set up button and form
button.on("click", dataEnter);
form.on("submit", dataEnter);

// create function to enter the filtered data to the table
function dataEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Clear the table so only filtered dates will be shown  
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);
  
    // write filtered data to the table
    filteredData.forEach((ufo2) => {
        var row = tbody.append("tr");
        Object.entries(ufo2).forEach(([key, value]) => {
          row.append("td").text(value);
        });
      });

}
