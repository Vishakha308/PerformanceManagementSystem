

import React, { useState } from 'react';
import './Staff.css'; // Import CSS file for styling

function Staff() {
  // State variables to store the input values
  const [inputs, setInputs] = useState(Array.from({ length: 8 }, () => Array.from({ length: 5 }, () => '')));

  // Function to handle changes in the input fields
  const handleInputChange = (rowIndex, columnIndex, value) => {
    const newInputs = [...inputs];
    newInputs[rowIndex][columnIndex] = value;
    setInputs(newInputs);
  };

  // Function to handle the save operation
  const handleSave = () => {
    // Perform save operation with the inputs data
    console.log('Inputs:', inputs);
  };

  // Function to handle the reset operation
  const handleReset = () => {
    // Reset the inputs to their default values
    setInputs(Array.from({ length: 8 }, () => Array.from({ length: 5 }, () => '')));
  };

  return (
    <div className="staff-container">
      <h2 className="welcome">Welcome to the Staff Page</h2>
      <div className="table">
        <div className="row heading">
          <input type="text" defaultValue="Headings 1" />
          <input type="text" defaultValue="Target" />
          <input type="text" defaultValue="Previous Year" />
          <input type="text" defaultValue="2024" />
          <input type="text" defaultValue="KPI" />
        </div>
        {inputs.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((value, columnIndex) => (
              <input
                key={columnIndex}
                type="text"
                value={value}
                onChange={(e) => handleInputChange(rowIndex, columnIndex, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleSave} className='btns'>Save</button>
        <button onClick={handleReset} className='btns'>Reset</button>
      </div>
    </div>
  );
}

export default Staff;
