import React from "react";
import "../styles/Calculator.css";

const Display = ({ value }) => {
  return <div className="calculator-display">{value}</div>;
};

export default Display;
