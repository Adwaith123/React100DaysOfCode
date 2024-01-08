import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(4);

  const date = new Date(" june 27 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 4)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((s) => s + 4)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
