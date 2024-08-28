import React from "react";
import "../styles/Calculator.css";

const Button = ({ label, handleClick }) => {
  return (
    <button className="calculator-button" onClick={() => handleClick(label)}>
      {label}
    </button>
  );
};

export default Button;
