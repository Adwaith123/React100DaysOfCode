import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]; // This data dosent depend on any component

export default function App() {
  /*
  Using state for the first time..
  useState is a function and it takes an argument;
  useState will return an array

  Note : useState(1) --> Here 1 is the default value
  */
  const [step, setStep] = useState(1); //Here setStep is a function
  const [test, setTest] = useState({ name: "Adwaith Rajesh" });
  const [isOpen, setIsOpen] = useState(true); // opening or closeing is having boolean values
  /*
  In the above linke of code we did a destructuring of the array of useState otherwise it should look like
  const step = useState(1)[0];
  const setstep = useState(1)[1];

  Here setStep is a setter function , we should always update state using setter function
*/
  /*
  Use state function is called as a hook in react ,we can identify it by the word "use" eg:useState,useReducer etc...
   
  Rules
  1.Hooks ==> {const [step, setStep] = useState(1);} should always use on top of the component just below its declaration
 2.Always use state as immutable in react
  */

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    setTest({ name: "Adwaith Rajesh" });
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
    setTest({ name: "Tuttu" });
  }
  return (
    // Below is the best usecase for React fragments , beacause we dont want apiece of jsx  to return two elements , then the fragmnnt is great for that
    <>
      {/* Defines an inline handler function */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
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
            Step {step}: {messages[step - 1]} {test.name}
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
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Note : State is like a memory of the compnent , even if we re render the component , the data or states does not changes
