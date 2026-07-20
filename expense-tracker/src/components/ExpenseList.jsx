import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, setExpenses }) {
  if (expenses.length === 0) {
    return <p className="empty">No expenses added yet.</p>;
  }

  return (
    <div className="expense-list">
      <h2>Recent Expenses</h2>

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      ))}
    </div>
  );
}

export default ExpenseList;