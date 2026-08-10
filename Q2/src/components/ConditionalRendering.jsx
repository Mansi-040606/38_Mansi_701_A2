import { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Conditional Rendering</h2>

        {isLoggedIn ? (
          <div>
            <h4 className="text-success">Welcome User!</h4>

            <button
              className="btn btn-danger"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h4 className="text-danger">Please Login</h4>

            <button
              className="btn btn-primary"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConditionalRendering;