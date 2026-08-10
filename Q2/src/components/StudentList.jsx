function StudentList() {
  const students = [
    {
      id: 1,
      name: "Rahul",
      semester: 4,
      division: "A",
    },
    {
      id: 2,
      name: "Priya",
      semester: 4,
      division: "B",
    },
    {
      id: 3,
      name: "Amit",
      semester: 3,
      division: "A",
    },
    {
      id: 4,
      name: "Neha",
      semester: 3,
      division: "B",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Student List</h2>

        <ul className="list-group">
          {students.map((student) => (
            <li
              key={student.id}
              className="list-group-item"
            >
              <strong>{student.name}</strong>
              <br />
              Semester: {student.semester}
              <br />
              Division: {student.division}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentList;