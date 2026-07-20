import { useState } from "react";

function ExpenseForm({ expenses, setExpenses }){
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();

    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const newExpense={
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date: currentDate,
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
    setCategory("Food");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <input type="text" placeholder="Expense Title"
value={title} onChange={(e) => setTitle(e.target.value)}
      />

      <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <select value={category} onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Entertainment</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}
export default ExpenseForm;