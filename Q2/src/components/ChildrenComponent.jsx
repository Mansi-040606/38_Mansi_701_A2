function Card({ children }) {
  return (
    <div className="card shadow p-4">
      {children}
    </div>
  );
}

function ChildrenComponent() {
  return (
    <div className="container mt-4">
      <h2>Children / Containment</h2>

      <Card>
        <h4>Student Details</h4>
        <p>Name: Student</p>
        <p>Course: M.Sc IT</p>
        <p>Semester: 4</p>
      </Card>
    </div>
  );
}

export default ChildrenComponent;