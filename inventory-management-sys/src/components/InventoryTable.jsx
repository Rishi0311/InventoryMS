// InventoryTable.js
import React, { useState } from "react";
import PropTypes from 'prop-types';
import InventoryRow from "./InventoryRow";

const InventoryTable = ({
  inventory,
  onAddItem,
  onEditItem,
  onDeleteItem,
  onExportToExcel,
}) => {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    quantity: 0,
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleAddButtonClick = (e) => {
    newItem.name && onAddItem(newItem);
    setNewItem({
      name: "",
      description: "",
      quantity: 0,
    });
  };

  return (
    <div className="jumbotron">
      <table className="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Created Date</th>
            <th scope="col">Modified Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <InventoryRow
              key={item.id}
              item={item}
              onEditItem={onEditItem}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </tbody>
      </table>
      <div>
      <form>
      <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={newItem.name}
                  onChange={handleInputChange}
                  required
                />
              </td>
              <td scope="row">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={newItem.description}
                  onChange={handleInputChange}
                />
              </td>
              <td scope="row">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={newItem.quantity}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleAddButtonClick}
                >
                  <i className="fa fa-plus"></i> Add Item
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
        <button className="btn btn-primary" onClick={onExportToExcel}>
          <i className="fa fa-download"></i> Export to Excel
        </button>
      </div>
    </div>
  );
};

InventoryTable.propTypes = {
  inventory: PropTypes.array,
  onAddItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onExportToExcel: PropTypes.func,
}


export default InventoryTable;
