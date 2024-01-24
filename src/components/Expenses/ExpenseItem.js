import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate eDate={props.date} />

      {/* The variable name of date in the ExpenseDate and here when we are passing props, should be the same. "eDate". we can always use date. I used eDate for clearing my concept. */}

      <ExpenseDetails
        title={title}
        amount={props.amount}
        location={props.locationOfExpenditure}
        // { this locationOfExpenditure is getting passed from App.js where the data mainly belongs.}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
