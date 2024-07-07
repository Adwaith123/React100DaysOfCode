import { useState } from "react";

const initData = {
  description: "Travel Bags",
  quantity: 1,
  packed: false,
  id: 1720294996464,
};

export default function App() {
  const [items, setItems] = useState([initData]);

  //--------------Handling Functions------------------
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      (items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        ) //creating new object with reversed packed status
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} /> {/*Kind of a convention */}
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
      />{" "}
      {/*Defining a prop*/}
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼 </h1>;
}
function Form({ onAddItems }) {
  //First step in using controlled elements
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // ---------------Handling Functions-----------
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need , for your 😍trip </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
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
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      {/*cotrolled elements means have value defined by a state */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
      {/*Here when we click the button , to delete we have to update the state for that child to parent communication is needed 
      ------and here we want to call the function when the click happens-----
      */}
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list , and you already packed X (X%)</em>
    </footer>
  );
}

// Short cut for creating n array numbers of our desired size

/*<select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select> */
