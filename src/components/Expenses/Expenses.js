import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  // const expenses = props.items;
  const [expenses, setExpenses] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState("2020");

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

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expenses"> {Items} </div>
    </Card>
  );
};

export default Expenses;
