import { useState } from "react";

// Date_Counter V2

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleAddition() {
    setCount((c) => c + step);
  }
  function handleSubstraction() {
    setCount((c) => c - step);
  }
  function handleReset() {
    setCount(0); // When the state changes the component will re-render and <Counter/> will be rendered agan
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count); // After every state changes the component will re-render and this line of code will get executed thereby changing the date

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>Step : {step}</span>
      <div>
        <button onClick={handleSubstraction}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleAddition}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
