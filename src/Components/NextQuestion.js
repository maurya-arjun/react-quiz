import React from "react";
import useQuiz from "../hooks/useQuiz";

function NextQuestion() {
    const { dispatch, answer, index, numQuestions } = useQuiz();

    if (answer === null) return null;

    if (index < numQuestions - 1) {
        return (
            <button
                className="m-2 px-5 py-3 border border-gray-700 rounded-xl"
                onClick={() => dispatch({ type: "nextQuestion" })}
            >
                Next
            </button>
        );
    }

    if (index === numQuestions - 1) {
        return (
            <button
                className="m-2 px-5 py-3 border border-gray-700 rounded-xl"
                onClick={() => dispatch({ type: "finish" })}
            >
                Finish
            </button>
        );
    }
}

export default NextQuestion;
