import React from "react";
import Item from "./Item";

const Listitems = ({ items, onToggleChange, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleChange={onToggleChange}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Listitems;
