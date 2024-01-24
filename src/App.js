import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  );
};

export default App;
