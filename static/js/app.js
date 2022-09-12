// import the data from data.js
const tableData = data;
// reference the HTML table using D3 
var tbody = d3.select("tbody");

function buildTable(data) {
  // 1. clear any exisiting data
  tbody.html("");
}

// 2. loop thru each obj & append a row and cell for each value in row
data.forEach((dataRow) => {
  // append row to table body
  let row = tbody.append("tr");

  // loop thru each field in dataRow & add each value as table cell (td)
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

function handleClick() {
  // get datetime value from filter
  let date = d3.select("#datetime").property("value");
  let filterData = tableData;
  //check to see if data was entered & filter data using date
  if (date) {
    // apply filter to only keep rows that match datetime exactly (===)
    filteredData = filteredData.filter(row => row.datetime === date);
  };
  //rebuild table with filtered data 
  // Note: if no date entered, then filteredData will be original table
  buildTable(filteredData);
}
// attach an event to listen for the form botton
d3.selectAll('#filter-btn').on('click', handleClick);
// build table when page loads
buildTable(tableData);
