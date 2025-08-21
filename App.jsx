import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";

export default function App() {
  const [transactions, setTransactions] = useState([
    { id: "TXN001", user: "Alice", amount: 500, location: "New York", risk: "Low" },
    { id: "TXN002", user: "Bob", amount: 12000, location: "Unknown", risk: "High" },
    { id: "TXN003", user: "Charlie", amount: 2200, location: "London", risk: "Medium" },
  ]);

  const addTransaction = (txn) => {
    setTransactions([...transactions, txn]);
  };

  return (
    <div className="min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">💳 Fraud Detection Dashboard</h1>
        <p className="text-gray-300 mt-2">
          Monitor transaction details and risk factors in real time
        </p>
      </header>

      {/* Add Transaction Form */}
      <TransactionForm addTransaction={addTransaction} />

      {/* Transactions Dashboard */}
      <Dashboard transactions={transactions} />
    </div>
  );
}
