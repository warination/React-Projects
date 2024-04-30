import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Stats from "./components/Stats";
import Listitems from "./components/Listitems";
function App() {
  const [items, setItems] = useState([]);

  function addNewItem(currItemName, currItemQuantity) {
    setItems((items) => [
      ...items,
      {
        currItemName,
        currItemQuantity,
        packed: false,
        id: Date.now(),
      },
    ]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      <Input onAddItem={addNewItem} />
      <Listitems
        items={items}
        onToggleChange={handleToggleItem}
        onDeleteItem={handleDelete}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
