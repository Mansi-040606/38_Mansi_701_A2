import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import FunctionComponent from "./components/FunctionComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import StudentList from "./components/StudentList";
import NestedComponent from "./components/NestedComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import Counter from "./components/Counter";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import DigitalClock from "./components/DigitalClock";
import ManualValidation from "./components/ManualValidation";
import LibraryValidation from "./components/LibraryValidation";
import Employees from "./components/Employees";
import Students from "./components/Students";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/function-component"
          element={<FunctionComponent />}
        />

        <Route
          path="/conditional"
          element={<ConditionalRendering />}
        />

        <Route
          path="/student-list"
          element={<StudentList />}
        />

        <Route
          path="/nested"
          element={<NestedComponent />}
        />

        <Route
          path="/children"
          element={<ChildrenComponent />}
        />

        <Route
          path="/counter"
          element={<Counter />}
        />

        <Route
          path="/use-state"
          element={<UseState />}
        />

        <Route
          path="/use-ref"
          element={<UseRef />}
        />

        <Route
          path="/digital-clock"
          element={<DigitalClock />}
        />

        <Route
          path="/manual-validation"
          element={<ManualValidation />}
        />

        <Route
          path="/library-validation"
          element={<LibraryValidation />}
        />

        <Route
          path="/employees"
          element={<Employees />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;