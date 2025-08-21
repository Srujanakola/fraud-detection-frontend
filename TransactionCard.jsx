import React from "react";

export default function TransactionCard({ txn }) {
  const riskColors = {
    Low: "bg-green-600",
    Medium: "bg-yellow-500",
    High: "bg-red-600",
  };

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
      <h2 className="text-xl font-semibold mb-2">Transaction ID: {txn.id}</h2>
      <p className="text-gray-200">👤 User: {txn.user}</p>
      <p className="text-gray-200">💰 Amount: ${txn.amount}</p>
      <p className="text-gray-200">📍 Location: {txn.location}</p>
      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-white text-sm ${riskColors[txn.risk]}`}
      >
        Risk: {txn.risk}
      </span>
    </div>
  );
}
