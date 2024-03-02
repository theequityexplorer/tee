function loadData() {
  // Fetch JSON data (replace 'data.json' with your JSON file path)
  fetch('CandlePattern.json')
    .then(response => response.json())
    .then(data => {
      const tableHeader = document.getElementById('table-header');
      const tableBody = document.getElementById('table-body');
      // Clear existing table content
      tableHeader.innerHTML = '';
      tableBody.innerHTML = '';
      // Populate table headers with JSON keys
      const keys = Object.keys(data[0]);
      keys.forEach(key => {
        const headerCell = document.createElement('div');
        headerCell.className = 'header-table-cell';
        headerCell.textContent = key;
        tableHeader.appendChild(headerCell);
      });
      // Populate table rows with data
      data.forEach(item => {
        const row = document.createElement('div');
        row.className = 'table-row';
        keys.forEach(key => {
          const cell = document.createElement('div');
          cell.className = 'table-cell';
          cell.textContent = item[key];
          row.appendChild(cell);
        });
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error loading data:', error));
}

// Call the function to load data when the page loads
window.onload = loadData;