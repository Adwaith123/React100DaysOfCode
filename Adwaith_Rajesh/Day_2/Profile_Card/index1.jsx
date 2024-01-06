import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="hero.jpg" alt="hero_image" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Adwaith Rajesh</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
      <SkillList />
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {/* Entering javascript mode */}
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.color} />
      ))}
    </ul>
  );
}

function Skill(props) {
  console.log(props);
  const style = { backgroundColor: props.skillObj.color };
  return (
    <li className="skill" style={style}>
      <span>{props.skillObj.skill}</span>
      <span>
        {props.skillObj.level === "beginner" && "😊"}
        {props.skillObj.level === "intermediate" && "🤪"}
        {props.skillObj.level === "advanced" && "💪"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
