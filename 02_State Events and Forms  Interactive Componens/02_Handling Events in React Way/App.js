const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]; // This data dosent depend on any component

export default function App() {
  const step = 1;

  //Event Handler function --Here naming of event handler function is normal
  function handlePrevious() {
    alert("Previous");
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
          /* --or another way is onClick={()=>handlePrevious()}---
          --->onClick is a property and is just like a inline html event listner*/
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => alert("Next")}
        >
          {/* Here the onClick and other events is not a function call it is a function itself , Here we are define a call back using anonymous function* , Note : here do not  function call but do specify a function value */}
          Next
        </button>
      </div>
    </div>
  );
}
