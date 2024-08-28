import { evaluate } from "mathjs";

const calculate = (expression) => {
  try {
    // Using mathjs to evaluate the expression safely
    return evaluate(expression).toString();
  } catch (error) {
    return "Error";
  }
};

export default calculate;
