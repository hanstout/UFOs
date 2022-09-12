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

