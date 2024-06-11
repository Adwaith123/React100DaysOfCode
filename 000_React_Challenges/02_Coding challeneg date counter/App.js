import { useState } from "react";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => (step > 1 ? setStep((step) => step - 1) : null)}>
          -
        </button>
        <span> Step:{step} </span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <span>Count:{count} </span>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <Message step={step} count={count} date="date" />
    </>
  );
}

function Message({ step, count }) {
  const date = new Date();
  date.setDate(date.getDate() + count); // Get date Out put a number here for example ouput todays date if july 21 it hold 21
  return (
    <div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} day ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <p>{`Current step is : ${step} and Count is : ${count}`}</p>
    </div>
  );
}

// Note : setDate(), getDate() imortant method when it comes to dates
