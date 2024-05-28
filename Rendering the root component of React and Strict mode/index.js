//Just importing the two libraries , just like js modules
import React from "react";
import ReactDOM from "react-dom/client";

//Creating App component

function App() {
  return <h1>Hello React</h1>;
}

//Rendering the above app component to the DOM.React version-18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
React before version-18
React.render(<App />);
*/
