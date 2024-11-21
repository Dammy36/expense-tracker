import React, { useState } from "react";
import Add from "./Add";
import Tables from "./Table";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "20:1-0:24",
      name: "Grocery shopping",
      amount: 100,
    },
    { id: 2, date: "2024-11-16", name: "Electric Bill", amount: 75 },
  ]);

  function onDelete(id) {
    setExpenses((prevList) =>
      prevList.filter((expenses) => expenses.id !== id)
    );
  }

  return (
    <div>
      <Tables expenses={expenses} onDelete={onDelete} />
      <Add setExpenses={setExpenses} />
    </div>
  );
}

export default App;
