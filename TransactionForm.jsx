import React, { useState } from "react";

export default function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    id: "",
    user: "",
    amount: "",
    location: "",
    risk: "Low",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.user || !formData.amount) {
      alert("Please fill all required fields!");
      return;
    }
    addTransaction({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ id: "", user: "", amount: "", location: "", risk: "Low" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">➕ Add Transaction</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="id"
          placeholder="Transaction ID"
          value={formData.id}
          onChange={handleChange}
          className="p-2 rounded bg-white/20 text-white placeholder-gray-300"
        />
        <input
          type="text"
          name="user"
          placeholder="User Name"
          value={formData.user}
          onChange={handleChange}
          className="p-2 rounded bg-white/20 text-white placeholder-gray-300"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="p-2 rounded bg-white/20 text-white placeholder-gray-300"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="p-2 rounded bg-white/20 text-white placeholder-gray-300"
        />

        <select
          name="risk"
          value={formData.risk}
          onChange={handleChange}
          className="p-2 rounded bg-white/20 text-white"
        >
          <option value="Low">Low Risk</option>
          <option value="Medium">Medium Risk</option>
          <option value="High">High Risk</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg"
      >
        Add Transaction
      </button>
    </form>
  );
}
