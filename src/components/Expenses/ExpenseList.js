import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const items = props.items;

  const expenseContent = items.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      location={item.location}
    />
  ));

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  if (items.length === 1) {
    return (
      <div>
        <ul className="expenses-list">{expenseContent}</ul>
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      </div>
    );
  }

  if (items.length > 0) {
    return <ul className="expenses-list">{expenseContent}</ul>;
  }
};

export default ExpenseList;
