import React from "react";

export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} question to test your react mastery</h3>
      <button onClick={() => dispatch({ type: "start" })}>Let's start</button>
    </div>
  );
}
