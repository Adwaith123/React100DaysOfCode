import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div>
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedid, setSelectedid] = useState(3457);

  function handleClick(id) {
    setSelectedid(id !== selectedid ? id : null);
  }
  return (
    /* writing a jsx instead of component , in map method if we want to return somethig then we use ()-->parantesis if we do any computing the n we use {}--> curly braces*/
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedid ? "selected" : null}
          // onClick={() => setSelectedid(question.id)}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedid ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
