async function fetchElementData() {
    try {
      const response = await fetch('https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON');
      const data = await response.json();
  
      const elements = data.Table.Row;
  
      const elementTableBody = document.querySelector('#element-table tbody');
  
      elements.forEach(element => {
  
        const row = document.createElement('tr');
  
        const AtomicnumberCell = document.createElement('td');
       AtomicnumberCell.textContent = element.Cell[0];
  
  
        const symbolCell = document.createElement('td');
        symbolCell.textContent = element.Cell[1];
  
        const NameCell = document.createElement('td');
        NameCell.textContent =element.Cell[2];
  
        const meltingPointCell = document.createElement('td');
        meltingPointCell.textContent = element.Cell[12];
  
        const boilingPointCell = document.createElement('td');
        boilingPointCell.textContent = element.Cell[13];
  
        const electronicConfigurationCell = document.createElement('td');
        electronicConfigurationCell.textContent =element.Cell[5];
  
        const GroupBlock = document.createElement('td');
        GroupBlock.textContent =element.Cell[15];
  
        row.appendChild(NameCell);
        row.appendChild(AtomicnumberCell);
        row.appendChild(symbolCell);
        row.appendChild(electronicConfigurationCell);
        row.appendChild(meltingPointCell);
        row.appendChild(boilingPointCell);
        row.appendChild(GroupBlock);
       
        elementTableBody.appendChild(row);
      } );
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  function shree200() 
  
  {
  fetchElementData();
  }