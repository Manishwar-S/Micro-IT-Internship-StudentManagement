import { useState } from "react";
import axios from "axios";

export default function StudentForm({ fetchStudents }) {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    grade: "",
    section: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/students", student);
    fetchStudents();
    setStudent({ name: "", rollNo: "", grade: "", section: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={student.name} onChange={handleChange} />
      <input name="rollNo" placeholder="Roll No" value={student.rollNo} onChange={handleChange} />
      <input name="grade" placeholder="Grade" value={student.grade} onChange={handleChange} />
      <input name="section" placeholder="Section" value={student.section} onChange={handleChange} />
      <input name="email" placeholder="Email" value={student.email} onChange={handleChange} />
      <button type="submit">Add Student</button>
    </form>
  );
}
