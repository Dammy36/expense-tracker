import React, { useState } from "react";

const Add = ({ setExpenses }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (name && amount && date) {
      const newEntry = {
        id: Date.now(),
        name,
        amount: parseFloat(amount),
        date,
      };
      setExpenses((prevList) => [...prevList, newEntry]);

      setName("");
      setAmount("");
      setDate("");
    } else {
      alert("Please fill in all forms");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        value={name}
      />

      <input
        onChange={(e) => setDate(e.target.value)}
        type="date"
        value={date}
      />

      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        value={amount}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
export default Add;
