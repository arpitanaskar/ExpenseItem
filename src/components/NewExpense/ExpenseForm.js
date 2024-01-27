import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";
// import ExpenseItem from "../Expenses/ExpenseItem";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setUpdateDate(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //To stop refreshing the page after clicking submit button.

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(updateDate),
      location: enteredLocation,
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredLocation(""); //This is two way binding. This is clearing the data which is value in the input fields of form.
    setEnteredAmount("");
    setUpdateDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={updateDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
