import React from "react";

const Options = ({ question, dispatch, answer }) => {
  const { options } = question;
  const hasAnswered = answer !== null;

  return (
    <div className="option">
      {options.map((option, index) => (
        <button
          className={`block ${index === answer ? "ml-1" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "text-green-600"
                : "text-red-600"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {" "}
          {option}{" "}
        </button>
      ))}
    </div>
  );
};

export default Options;
