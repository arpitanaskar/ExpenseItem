const Item = () => {
  return (
    <div>
      <p>Food Rs 10</p>
      <p>Petrol Rs 100</p>
      <p>Movies Rs 200</p>
    </div>
  );
};

const ExpenseItem = () => {
  return (
    <div>
      <h1>Expense Item!</h1>
      <Item />
    </div>
  );
};

export default ExpenseItem;
