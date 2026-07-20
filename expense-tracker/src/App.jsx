import { useState } from "react";

import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <Navbar />

      <div className="container">
        <Summary expenses={expenses} />

        <ExpenseForm
          expenses={expenses}
          setExpenses={setExpenses}
        />

       <ExpenseList
  expenses={expenses}
  setExpenses={setExpenses}
/>
      </div>
    </>
  );
}

export default App;