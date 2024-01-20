import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      {props.date.toDateString()}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <h3>{props.locationOfExpenditure}</h3>
      </div>
    </div>
  );
};

export default ExpenseItem;
