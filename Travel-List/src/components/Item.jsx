import React from "react";

const Item = ({ item, onToggleChange, onDeleteItem }) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleChange(item.id)}
      />
      <span className={item.packed ? "text-decoration" : ""}>
        {item.currItemQuantity} {item.currItemName}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
