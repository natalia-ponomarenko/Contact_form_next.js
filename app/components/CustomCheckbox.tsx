import React, { useState } from "react";
import "./CustomCheckbox.scss";

const CustomCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='round' onClick={toggleCheckbox}>
    <input type="checkbox" checked={isChecked} onChange={() => {}} />
    <label></label>
    <p>{label}</p>
  </div>
  );
};

export default CustomCheckbox;