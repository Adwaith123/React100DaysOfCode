import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]); //Moved the state to the closest parent.

  //--------------Handling Functions------------------
  function handleAddItems(item) {
    //Here new state is depend on the current state so we want to to a callback , not allowed to mutate state(eg:(items)=>items.push(item))
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} /> {/*Kind of a convention */}
      <PackingList items={items} /> {/*Defining a prop*/}
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
    //(When to create a new state))We have to store the below object some where
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    //very Important -- passing handle add function to the form componet and updating the state here , note that we can pass anything through the props
    onAddItems(newItem);

    //Clearing forms
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
        value={description} // Forcing the element to take the value of state
        onChange={(e) => {
          // console.log(e.target); // e.target is the html element
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
