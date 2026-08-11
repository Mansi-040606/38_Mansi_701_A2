import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetch("/students.json")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  const filteredStudents = students.filter((student) => {
    return (
      student.firstname
        .toLowerCase()
        .includes(search.toLowerCase()) &&

      (semester === "" ||
        student.semester.toString() === semester) &&

      (division === "" ||
        student.div === division) &&

      (gender === "" ||
        student.gender === gender)
    );
  });

  return (
    <div className="container mt-4">

      <div className="card p-4">

        <h2>Student List</h2>

        {/* Search */}
        <div className="mb-3">
          <label className="form-label">
            Search by First Name
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="row mb-3">

          {/* Semester */}
          <div className="col-md-4">
            <label className="form-label">
              Semester
            </label>

            <select
              className="form-select"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">All Semesters</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
            </select>
          </div>

          {/* Division */}
          <div className="col-md-4">
            <label className="form-label">
              Division
            </label>

            <select
              className="form-select"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
            >
              <option value="">All Divisions</option>
              <option value="A">Division A</option>
              <option value="B">Division B</option>
            </select>
          </div>

          {/* Gender */}
          <div className="col-md-4">
            <label className="form-label">
              Gender
            </label>

            <select
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

        </div>

        {/* Student Table */}
        <table className="table table-bordered table-striped">

          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Semester</th>
              <th>Division</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.map((student) => (
              <tr key={student.id}>

                <td>{student.id}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.semester}</td>
                <td>{student.div}</td>
                <td>{student.gender}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Students;