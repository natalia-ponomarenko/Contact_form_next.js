'use client';
import { useState } from "react";
import "./CustomCheckbox.scss";

type Props = {
  label: string;
  name: string;
};

const CustomCheckbox: React.FC<Props> = ({ label, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="round"
      onClick={toggleCheckbox}
    >
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={() => {}}
      />
      <label></label>
      <p>{label}</p>
    </div>
  );
};

export default CustomCheckbox;
