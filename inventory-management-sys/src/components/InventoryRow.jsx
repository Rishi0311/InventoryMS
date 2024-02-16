// InventoryRow.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
const InventoryRow = ({ item, onEditItem, onDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    onEditItem(item.id, editedItem);
    setIsEditing(false);
  };

  const handleCancelButtonClick = () => {
    setIsEditing(false);
    setEditedItem(item);
  };

  return (
    <tr>
      <td>{isEditing ? <input type="text" className="form-control" value={editedItem.id} onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })} /> : item.id}</td>
      <td>{isEditing ? <input type="text" className="form-control" value={editedItem.name} onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })} /> : item.name}</td>
      <td>{isEditing ? <input type="text" className="form-control" value={editedItem.description} onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })} /> : item.description}</td>
      <td>{isEditing ? <input type="number" className="form-control" value={editedItem.quantity} onChange={(e) => setEditedItem({ ...editedItem, quantity: e.target.value })} /> : item.quantity}</td>
      <td>{item.createdDate}</td>
      <td>{item.modifiedDate}</td>
      <td>
        {isEditing ? (
          <div className="btn-group" role="group">
            <button className="btn btn-success" onClick={handleSaveButtonClick}><i className="fa fa-save"></i> Save</button>
            <button className="btn btn-warning" onClick={handleCancelButtonClick}><i className="fa fa-close"></i> Cancel</button>
          </div>
        ) : (
          <div className="btn-group" role="group">
            <button className="btn btn-primary" onClick={handleEditButtonClick}><i className="fa fa-edit"></i> Edit</button>
            <button className="btn btn-danger"  onClick={() => onDeleteItem(item.id)}><i className="fa fa-trash"></i> Delete</button>
          </div>
        )}
      </td>
    </tr>
  );
};


InventoryRow.propTypes = {
  item:PropTypes.array, 
  onEditItem: PropTypes.func, 
  onDeleteItem: PropTypes.func
}

export default InventoryRow;
