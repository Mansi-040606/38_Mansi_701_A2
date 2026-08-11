import { useState } from "react";

function ManualValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = email.includes("@") && email.includes(".");

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Manual Live Form Validation</h2>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>

          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />

          {name.length === 0 && (
            <small className="text-danger">
              Name is required
            </small>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>

          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />

          {email.length > 0 && !isEmailValid && (
            <small className="text-danger">
              Enter a valid email
            </small>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>

          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          {password.length > 0 && password.length < 6 && (
            <small className="text-danger">
              Password must be at least 6 characters
            </small>
          )}
        </div>

        <button
          className="btn btn-primary"
          disabled={
            name === "" ||
            !isEmailValid ||
            password.length < 6
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ManualValidation;