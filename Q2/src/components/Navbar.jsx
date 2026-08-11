import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid px-3">

        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ fontSize: "18px" }}
        >
          Q2
        </Link>

        <div className="d-flex flex-wrap gap-1">

          <Link
            className="btn btn-sm btn-outline-light"
            to="/function-component"
          >
            Function
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/conditional"
          >
            Conditional
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/student-list"
          >
            List
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/nested"
          >
            Nested
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/children"
          >
            Children
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/counter"
          >
            Counter
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/use-state"
          >
            State
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/use-ref"
          >
            Ref
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/digital-clock"
          >
            Clock
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/manual-validation"
          >
            Manual
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/library-validation"
          >
            Library
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/employees"
          >
            Employees
          </Link>

          <Link
            className="btn btn-sm btn-outline-light"
            to="/students"
          >
            Students
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;  