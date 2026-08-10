import { useState } from "react";

function UseState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>useState Example</h2>

        <div className="mb-3">
          <label className="form-label">
            Enter Name
          </label>

          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Enter Age
          </label>

          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <h5>Output</h5>

        <p>
          Name: <strong>{name}</strong>
        </p>

        <p>
          Age: <strong>{age}</strong>
        </p>
      </div>
    </div>
  );
}

export default UseState;