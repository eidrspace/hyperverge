"use client";
import { useState } from "react";

export default function ScoringPage() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [loan, setLoan] = useState("");
  const [result, setResult] = useState("");

  function calculateScore() {
    const inc = parseInt(income);
    const exp = parseInt(expenses);
    const loanAmt = parseInt(loan);

    if (isNaN(inc) || isNaN(exp) || isNaN(loanAmt)) {
      setResult("❌ Please enter valid numbers.");
      return;
    }

    const ratio = inc / exp;

    if (ratio >= 2) {
      setResult("✅ Approved: Healthy income/expense ratio. You qualify for this loan.");
    } else if (ratio >= 1.5) {
      setResult("⚠️ Under Review: Borderline case. Our team will review manually.");
    } else {
      setResult("❌ Rejected: Expenses too high compared to income.");
    }
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-indigo-700 via-indigo-500 to-indigo-300 text-black p-6">
      <h1 className="text-2xl font-bold text-white-700 mb-4">Loan Scoring</h1>

      <div className="grid gap-3 w-full max-w-sm bg-white p-4 rounded shadow">
        <input
          type="number"
          placeholder="Monthly Income (₹)"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="number"
          placeholder="Monthly Expenses (₹)"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={loan}
          onChange={(e) => setLoan(e.target.value)}
          className="border rounded p-2"
        />
        <button
          onClick={calculateScore}
          className="bg-green-600 text-white px-3 py-2 rounded"
        >
          Check Eligibility
        </button>
      </div>

      <p className="mt-4 text-lg font-semibold">{result}</p>
    </main>
  );
}
