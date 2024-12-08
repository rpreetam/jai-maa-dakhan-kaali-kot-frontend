import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/donations/adddonation", {
        fullName,
        amount,
      }, {
        'Content-Type': 'application/json'
      });
      alert("Donor added successfully!");
      setFullName("");
      setAmount("");
    } catch (error) {
      console.error("Error adding donor:", error);
      alert("Failed to add donor.");
    }
  };

  return (
    <div className="form-container">
      <div>jai maa dakhan kaali</div>
      <h2>Add Donor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Donor</button>
      </form>
    </div>
  );
}

export default App;
