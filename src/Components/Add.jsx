import React, { useState } from "react";

import { TextField, Button, Stack } from "@mui/material";

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
    <div className="input-table">
      <TextField
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        value={name}
        variant="outlined"
      />

      <TextField
        onChange={(e) => setDate(e.target.value)}
        type="date"
        value={date}
        variant="outlined"
      />

      <TextField
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        value={amount}
        variant="outlined"
      />

      <Button
        variant="contained"
        color="success"
        sx={{ m: 1 }}
        onClick={handleAdd}
      >
        Add
      </Button>
    </div>
  );
};
export default Add;
