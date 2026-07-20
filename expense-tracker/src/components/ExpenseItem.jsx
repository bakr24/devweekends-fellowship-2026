function ExpenseItem({ expense, expenses, setExpenses }) {

  function handleDelete(id) {
    const updatedExpenses = expenses.filter(
      (item) => item.id !== id
    );

    setExpenses(updatedExpenses);
  }

  return (
    <div className="expense-item">

      <div>
        <h3>{expense.title}</h3>

        <p>
          {expense.category} • {expense.date}
        </p>
      </div>

      <div>
        <h2>${expense.amount}</h2>

        <button
          onClick={() => handleDelete(expense.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default ExpenseItem;