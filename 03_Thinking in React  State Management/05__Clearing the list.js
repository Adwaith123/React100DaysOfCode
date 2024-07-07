import { useState } from "react";

const initData = {
  description: "Travel Bags",
  quantity: 1,
  packed: false,
  id: 1720294996464,
};

export default function App() {
  const [items, setItems] = useState([initData]);
  //const numItems = items.length; // Using derived State

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

  function handleClearList() {
    const confirm = window.confirm(
      `Are you sure you want to delete all items ..?`
    ); //true or false
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} /> {/*Kind of a convention */}
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />{" "}
      {/*Defining a prop*/}
      <Stats items={items} />
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
function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  //using derived state
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        {/* below code format should be remembered */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
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
function Stats({ items }) {
  //Early returning in cnditional rendering
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to your List</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length; //Because filter returns an array . so we can do .length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>`You got Everything Ready to go ✈`</em>
      ) : (
        <em>
          `You have {numItems} items on your list , and you already packed{" "}
          {numPacked} ({percentage}%)`
        </em>
      )}
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
