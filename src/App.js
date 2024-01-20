import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e5",
      title: "Groceries",
      amount: 120.5,
      date: new Date(2022, 1, 5),
      locationOfExpenditure: "Local Grocery Store",
    },
    {
      id: "e6",
      title: "Internet Bill",
      amount: 65.99,
      date: new Date(2022, 3, 20),
      locationOfExpenditure: "Online Service Provider",
    },
    {
      id: "e7",
      title: "Dinner Out",
      amount: 85.25,
      date: new Date(2022, 4, 8),
      locationOfExpenditure: "Restaurant",
    },
    {
      id: "e8",
      title: "Gym Membership",
      amount: 50.0,
      date: new Date(2022, 6, 15),
      locationOfExpenditure: "Fitness Center",
    },
    {
      id: "e9",
      title: "Mobile Phone Plan",
      amount: 30.0,
      date: new Date(2022, 7, 3),
      locationOfExpenditure: "Telecom Service Provider",
    },
    {
      id: "e10",
      title: "Books",
      amount: 25.75,
      date: new Date(2022, 8, 10),
      locationOfExpenditure: "Bookstore",
    },
    {
      id: "e11",
      title: "Movie Tickets",
      amount: 40.0,
      date: new Date(2022, 9, 18),
      locationOfExpenditure: "Cinema",
    },
    {
      id: "e12",
      title: "Home Cleaning Supplies",
      amount: 55.8,
      date: new Date(2022, 10, 5),
      locationOfExpenditure: "Local Supermarket",
    },
    {
      id: "e13",
      title: "Laptop Upgrade",
      amount: 899.99,
      date: new Date(2023, 1, 3),
      locationOfExpenditure: "Electronics Store",
    },
    {
      id: "e14",
      title: "Vacation Expenses",
      amount: 1200.0,
      date: new Date(2023, 4, 22),
      locationOfExpenditure: "Travel and Accommodation",
    },
  ];

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
      <h2>Lets Get Started!</h2>
      {Items}
    </div>
  );
}

export default App;
