import axios from "axios";

export default function StudentList({ students, fetchStudents }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <ul>
      {students.map((s) => (
        <li key={s._id}>
          {s.name} ({s.rollNo}) - Grade {s.grade}-{s.section}
          <button onClick={() => handleDelete(s._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
