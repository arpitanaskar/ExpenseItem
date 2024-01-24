import React, { useState } from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  const [amount, updateAmount] = useState(props.amount);

  const clickHandler = () => {
    updateAmount("100");
  };

  // console.log("expense details props children are " + props.children);
  const title = props.title;
  // const amount = props.amount;
  const location = props.location;

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h3 className="expense-item__location">{location}</h3>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>100$</button>
    </div>
  );
};

export default ExpenseDetails;
