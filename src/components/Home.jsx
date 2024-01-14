import React from "react";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState("");

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
  return (
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
  );
};

export default Home;
