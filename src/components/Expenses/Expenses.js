import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import { useState } from "react";

const Expenses = (props) => {
  // const expenses = props.items;
  const [expenses, setExpenses] = useState(props.items);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const Items = [];
  for (let i = 0; i < expenses.length; i++) {
    Items.push(
      <ExpenseItem
        key={expenses[i].id}
        title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
        locationOfExpenditure={expenses[i].locationOfExpenditure}
      />
    );
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expenses"> {Items} </div>
    </div>
  );
};

export default Expenses;
