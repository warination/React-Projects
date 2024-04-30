import React, { useRef } from "react";

const Input = ({ onAddItem }) => {
  const itemquantity = useRef(1);
  const itemname = useRef(null);
  function handleAddItems(e) {
    e.preventDefault();
    const currItemQuantity = itemquantity.current.value;
    const currItemName = itemname.current.value;
    if (!currItemName) return;
    onAddItem(currItemName, currItemQuantity);
    itemname.current.value = "";
    itemquantity.current.value = 1;
  }
  return (
    <>
      <form className="add-form" onSubmit={handleAddItems}>
        <h3>What do you need for your Trip?</h3>
        <select ref={itemquantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Add Item" ref={itemname} />
        <button>Add Item</button>
      </form>
    </>
  );
};

export default Input;
