import { useState } from "react";

const demoItems = [
  { id: 1, name: "ICX-8200-x", packed: true },
  { id: 2, name: "ICX-8200-y", packed: false },
  { id: 3, name: "ICX-8200-z", packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>TSR Tool</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //Controlled elements: Text field and Select EL
  function textField(e) {
    setDescription(e.target.value);
  }
  function selectQTY(e) {
    setQuantity(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    //creating a new item
    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log(newItem);

    setDescription("");
    setQuantity("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Reserve the Serial Numbers</h3>
      <select value={quantity} onChange={selectQTY}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={textField}
      ></input>
      <button>ADD</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {demoItems.map((mov) => (
          <Item item={mov} key={mov.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <div>
      <li>
        <span style={!item.packed ? { textDecoration: "line-through" } : {}}>
          {item.id} {item.name}
        </span>
        <buton>❌</buton>
      </li>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>Logic and condition TBD</em>
    </footer>
  );
}
