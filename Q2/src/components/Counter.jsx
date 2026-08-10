import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 text-center">
        <h2>Counter</h2>

        <h1 className="my-4">{count}</h1>

        <div>
          <button
            className="btn btn-success me-2"
            onClick={increment}
          >
            Increment
          </button>

          <button
            className="btn btn-danger me-2"
            onClick={decrement}
          >
            Decrement
          </button>

          <button
            className="btn btn-secondary"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;