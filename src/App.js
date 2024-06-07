import { useState } from "react";

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
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>TSR Tool</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //Controlled elements: Text field and Select EL
  function textField(e) {
    setDescription(e.target.value);
  }
  function selectQTY(e) {
    setQuantity(e.target.value);
  }

  //Add button
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    //creating a new item
    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        Please select <em>Network & Console</em> port
      </h3>
      <select value={quantity} onChange={selectQTY}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Serial Number"
        value={description}
        onChange={textField}
      ></input>
      <button>ADD</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go!"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} [${percentage}%]!`}
      </em>
    </footer>
  );
}
