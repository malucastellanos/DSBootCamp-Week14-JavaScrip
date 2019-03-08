// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var table = d3.select("#ufo-table");
table.attr("class", "table table-striped");


// POPULATE THE TABLE

// Loop through the data to fill the table
function tableUFO(data){
	tbody.text("");
	data.forEach(function(ufoSight) {
  		var record = tbody.append("tr");
  		Object.entries(ufoSight).forEach(function([key, value]) {
    		var cell = record.append("td").text(value);
		});
	});
}
tableUFO(tableData);


// INPUTS FROM USER
var inputDate = d3.select("#datetime");
var filterButton = d3.select("#filter-btn");


// FILTER FOR DATE
function clickSelect() {
  d3.event.preventDefault(); 
  var filteredDate = tableData.filter(filteredSight => filteredSight.datetime === inputDate.property("value"));    
  tableUFO(filteredDate);
};

filterButton.on("click", clickSelect);


