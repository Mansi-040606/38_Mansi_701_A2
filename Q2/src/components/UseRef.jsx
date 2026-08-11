import { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>useRef Example</h2>

        <input
          ref={inputRef}
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name"
        />

        <button
          className="btn btn-primary"
          onClick={handleFocus}
        >
          Focus Input
        </button>
      </div>
    </div>
  );
}

export default UseRef;