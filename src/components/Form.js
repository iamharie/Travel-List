import { useState } from "react";
export default function Form({ onAddItems }) {
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
