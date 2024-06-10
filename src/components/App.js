import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const demoItems = [
//   { id: 1, name: "ICX-8200-x", packed: true },
//   { id: 2, name: "ICX-8200-y", packed: false },
//   { id: 3, name: "ICX-8200-z", packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure to delete list");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
