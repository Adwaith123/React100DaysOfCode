import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="favicon.jpg" alt="Adwaith Rajesh" />;
}

function Intro() {
  return (
    <div>
      <h1>Adwaith Rajesh</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😊" backgroundColor="blue" />
      <Skill skill="HTML+CSS" emoji="💪" backgroundColor="orangeRed" />
      <Skill skill="JavaScript" emoji="💪" backgroundColor="Yellow" />
      <Skill skill="Svelte" emoji="📰" backgroundColor="orange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
