import React from "react";
import TransactionCard from "./TransactionCard";

export default function Dashboard({ transactions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {transactions.map((txn, index) => (
        <TransactionCard key={index} txn={txn} />
      ))}
    </div>
  );
}
