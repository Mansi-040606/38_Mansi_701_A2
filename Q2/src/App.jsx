import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import FunctionComponent from "./components/FunctionComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import StudentList from "./components/StudentList";
import NestedComponent from "./components/NestedComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import Counter from "./components/Counter";
import UseState from "./components/UseState";


function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;