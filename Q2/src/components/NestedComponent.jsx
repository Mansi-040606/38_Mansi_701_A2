function Header() {
  return (
    <div className="bg-primary text-white p-3">
      <h3>Student Management System</h3>
    </div>
  );
}

function StudentInfo() {
  return (
    <div className="card p-4 mt-3">
      <h4>Student Information</h4>

      <p><strong>Name:</strong> Student</p>
      <p><strong>Course:</strong> M.Sc IT</p>
      <p><strong>Semester:</strong> 4</p>
    </div>
  );
}

function NestedComponent() {
  return (
    <div className="container mt-4">
      <Header />
      <StudentInfo />
    </div>
  );
}

export default NestedComponent;