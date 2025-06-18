import React from "react";

function NextQuestion({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <button
      className="m-2 px-5 py-3 border border-gray-700 rounded-xl"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextQuestion;
