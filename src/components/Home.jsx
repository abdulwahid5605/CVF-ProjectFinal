import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState("");
  const [students, setStudents] = useState([]);

  const handleButtonClick = () => {
    setShowTextBox(true);
  };

  const handleInputChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the submitted value
    console.log("Submitted Value:", textBoxValue);
    // Reset the text box and hide it
    setTextBoxValue("");
    setShowTextBox(false);
  };

  useEffect(() => {
    // Fetch students data from the API endpoint
    axios
      .post("http://localhost:8000/admin/attendance")
      .then((response) => {
        // Update the students state with the fetched data
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);
  return (
    <>
      <div className="main">
        <button onClick={handleButtonClick} className="btnOne">
          Show Text Box
        </button>
        {showTextBox && (
          <form onSubmit={handleSubmit} className="parent">
            <input
              className="text"
              type="text"
              placeholder="Enter Student Name"
              value={textBoxValue}
              onChange={handleInputChange}
            />
            <button type="submit" className="btnTwo">
              Submit
            </button>
          </form>
        )}
      </div>
      {/* Display fetched students data */}
      <div className="students-list">
        <h2>Students List:</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
