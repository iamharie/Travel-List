export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for the trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="items..."></input>
      <button>ADD</button>
    </form>
  );
}

function PackingList() {
  return <div className="actions">hi</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>You are all set to travel: Logic and condition TBD</em>
    </footer>
  );
}
