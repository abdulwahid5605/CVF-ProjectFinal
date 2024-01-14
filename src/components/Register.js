import React from "react";
import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    studentClass: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data, such as sending it to a server
    console.log("Form Data:", formData);
  };
  return (
    <form onSubmit={handleSubmit} className="mainReg">
      <div className="parentReg">
        <div>
          <input
            type="text"
            id="studentName"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            placeholder="Student Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="studentClass"
            name="studentClass"
            placeholder="Student Class"
            value={formData.studentClass}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="course"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btnOneReg">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
