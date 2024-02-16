// App.js
import React, { useState } from 'react';
import InventoryTable from './components/InventoryTable';
import * as XLSX from 'xlsx';

const App = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: 'Mobile',
      description: 'Electronics',
      quantity: 10,
      createdDate: new Date().toLocaleString(),
      modifiedDate: new Date().toLocaleString(),
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'Electronics',
      quantity: 10,
      createdDate: new Date().toLocaleString(),
      modifiedDate: new Date().toLocaleString(),
    }
  ]);

  const handleAddItem = (newItem) => {
    const currentTime = new Date().toLocaleString();

    setInventory((prevInventory) => [
      ...prevInventory,
      {
        id: prevInventory.length + 1,
        ...newItem,
        createdDate: currentTime,
        modifiedDate: currentTime,
      },
    ]);
  };

  const handleEditItem = (id, updatedItem) => {
    const currentTime = new Date().toLocaleString();

    setInventory((prevInventory) =>
      prevInventory.map((item) => (item.id === id ? { ...updatedItem, modifiedDate: currentTime } : item))
    );
  };

  const handleDeleteItem = (id) => {
    setInventory((prevInventory) => prevInventory.filter((item) => item.id !== id));
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(inventory);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Inventory');
    XLSX.writeFile(wb, 'inventory.xlsx');
  };

  return (
    <div className='m-4'>
      <div className='container' style={{}}>
        <h1 style={{marginBottom:'2rem'}}>My Inventory Management System</h1>
        <InventoryTable
          inventory={inventory}
          onAddItem={handleAddItem}
          onEditItem={handleEditItem}
          onDeleteItem={handleDeleteItem}
          onExportToExcel={exportToExcel}
        />
    </div>
    </div>
    
  );
};

export default App;
