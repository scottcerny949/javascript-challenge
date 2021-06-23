// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

var form = d3.select("#form");

var table = d3.select("#ufo-table");

var tbody = d3.select("#tbody");

console.log(tableData);

button.on("click", dataEnter);
form.on("submit", dataEnter);

function dataEnter() {

    // Allows the table to refresh for each query
    $("#tbody").empty();

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);
    
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          });
        });

}
