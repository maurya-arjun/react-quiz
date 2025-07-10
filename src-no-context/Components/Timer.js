import React, { useEffect } from "react";

const Timer = ({ dispatch, remainingTime }) => {
  const mins = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="m-2 px-5 py-3 border border-gray-700 rounded-xl">
      {mins < 10 && "0"}
      {mins}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
