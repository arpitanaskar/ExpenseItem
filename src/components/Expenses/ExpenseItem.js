import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate eDate={props.date} />

      {/* The variable name of date in the ExpenseDate and here when we are passing props, should be the same. "eDate". we can always use date. I used eDate for clearing my concept. */}

      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.locationOfExpenditure}

        // { this locationOfExpenditure is getting passed from App.js where the data mainly belongs.}
      />
    </Card>
  );
};

export default ExpenseItem;
