import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    studentClass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend using Axios
      const response = await axios.post(
        "http://127.0.0.1:8000/students/",
        formData
      );

      // Handle the response if needed
      console.log("Backend Response:", response.data);
    } catch (error) {
      // Handle errors if the request fails
      console.error("Error submitting form:", error.message);
    }
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
            type="email"
            id="studentEmail"
            name="studentEmail"
            placeholder="Student Email"
            value={formData.studentEmail}
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
