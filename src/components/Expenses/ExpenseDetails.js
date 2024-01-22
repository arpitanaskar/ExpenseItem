import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h3 className="expense-item__location">{location}</h3>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
};

export default ExpenseDetails;
