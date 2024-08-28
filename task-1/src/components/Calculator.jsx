import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import calculate from "../utils/calculate";
import "../styles/Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (label) => {
    if (label === "=") {
      setInput(calculate(input));
    } else if (label === "C") {
      setInput("");
    } else {
      setInput(input + label);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="calculator-buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
          "C",
        ].map((label) => (
          <Button key={label} label={label} handleClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
