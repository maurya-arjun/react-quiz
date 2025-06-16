import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

export default function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  function handleCountDecrement() {
    dispatch({ type: "dec" });
  }

  function handleCountIncrement() {
    dispatch({ type: "inc" });
  }

  function defineCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  function defineStep(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  function addDays() {
    let date = new Date();
    date.setDate(date.getDate() + count);
    return date;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          📅 Date Counter
        </h1>

        {/* <button onClick={handleStepDecrement}>-</button>
        Step: {step}
        <button onClick={handleStepIncrement}>+</button> */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Step: {step}
          </label>
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={defineStep}
            className="w-full accent-blue-600"
          />
          {step}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCountDecrement}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            -
          </button>
          {/* Count: {count} */}
          <input
            type="number"
            value={count}
            onChange={defineCount}
            className="w-full text-center border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleCountIncrement}
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
          >
            +
          </button>
        </div>

        <p className="text-center text-lg font-medium text-gray-800">
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} day ago was `}
          <span className="font-semibold text-blue-700">
            {addDays().toDateString()}
          </span>
        </p>
        <div className="text-center">
          <button
            onClick={handleReset}
            className="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
