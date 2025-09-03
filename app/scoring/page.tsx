"use client";
import { useState } from "react";

export default function ScoringPage() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [result, setResult] = useState("");

  function calculateScore() {
    const inc = parseInt(income);
    const exp = parseInt(expenses);
    if (isNaN(inc) || isNaN(exp)) {
      setResult("❌ Please enter valid numbers");
      return;
    }
    if (inc > exp * 2) {
      setResult("✅ Approved: Healthy income/expense ratio");
    } else {
      setResult("❌ Rejected: Expenses too high compared to income");
    }
  }

  return (
    <main className="flex flex-col min-h-screen items-center p-6 bg-black text-white">
      <h1 className="text-xl font-bold mb-4">📊 Loan Scoring Demo</h1>
      <div className="grid gap-2 w-full max-w-sm">
        <input
          type="number"
          placeholder="Monthly Income (₹)"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="border rounded p-2 text-black"
        />
        <input
          type="number"
          placeholder="Monthly Expenses (₹)"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          className="border rounded p-2 text-black"
        />
        <button onClick={calculateScore} className="bg-green-600 px-3 py-2 rounded">
          Check Eligibility
        </button>
      </div>
      <p className="mt-4 text-lg">{result}</p>
    </main>
  );
}
