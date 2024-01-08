import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {
  return (
    <div className=" container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", FontSize: "32px", textTransform: "Uppercase" };
  const style = {};
  return (
    <header className="header" style={style}>
      <h1>Fast react pizza CO</h1>
    </header>
  );
}

// Example showing functionality of props

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price="15"
        photoName="pizzas/salamino.jpg"
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt="Pizza_Image" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="order">
          <p>
            We're open from 12:00 to 22:00.Come and visit us or order Online
          </p>
          <button className="btn">Order</button>
        </div>
      </footer>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
