import React from "react";
import useQuiz from "../hooks/useQuiz";

function FinishScreen() {
    const { points, maxPossiblePoints, heigherscore, dispatch } = useQuiz();
    const percentage = (points / maxPossiblePoints) * 100;

    let emoji;

    if (percentage === 100) emoji = "🏅";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "🙂";
    if (percentage >= 0 && percentage < 50) emoji = "🤨";
    if (percentage === 0) emoji = "🤦‍♂️";

    return (
        <>
            <p className="result">
                <span> {emoji} </span> You scored {points} out of{" "}
                {maxPossiblePoints} ({Math.ceil(percentage)}
                %)
            </p>
            <p> Heigher score: {heigherscore} points </p>

            <button
                className="m-2 px-5 py-3 border border-gray-700 rounded-xl"
                onClick={() => dispatch({ type: "restart" })}
            >
                Restart Quiz
            </button>
        </>
    );
}

export default FinishScreen;
