import React from "react";
import useQuiz from "../hooks/useQuiz";

function Progress() {
    const { index, numQuestions, points, maxPossiblePoints, answer } =
        useQuiz();
    return (
        <div>
            <progress
                max={numQuestions}
                value={index + Number(answer !== null)}
            />
            <p>
                Question <strong> {index + 1} </strong> / {numQuestions}{" "}
            </p>

            <p>
                <strong> {points} </strong> / {maxPossiblePoints} points{" "}
            </p>
        </div>
    );
}

export default Progress;
