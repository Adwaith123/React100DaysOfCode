import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //We can use hooks only on the top level of the function
  const [step, setStep] = useState(1); // states returns an array
  //[step,setStep] = step is the varibale and setSteup is the functionn to manage the step and functions that start with "use" term is known as hooks
  const [isOpen, setisOpen] = useState(true);

  /////////////////////// Event Hndler function/////////////////////
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  //Using Conditional rendering

  return (
    <>
      <button className="close" onClick={() => setisOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Note onClick isself is a function not a function call

// eg: onClick={handlePrevious}-->ok  onClick={handlePrevious()}-->Not Correct
