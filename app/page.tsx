"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900 p-6">
      {/* Logo + App Name */}
      <div className="flex items-center gap-3 mb-6">
        <Image src="/logo.png" alt="HVLoan Logo" width={40} height={40} />
        <h1 className="text-3xl font-bold text-indigo-700">HVLoan</h1>
      </div>

      <p className="text-gray-600 mb-8 text-center">
        Simple AI Loan Underwriting for Everyone
      </p>

      {/* Navigation Buttons */}
      <div className="grid gap-4 w-full max-w-sm text-center">
        <Link
          href="/chatbot"
          className="rounded bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 text-lg font-medium shadow"
        >
          💬 Loan Assistant Chatbot
        </Link>
        <Link
          href="/scoring"
          className="rounded bg-green-600 hover:bg-green-700 text-white px-4 py-3 text-lg font-medium shadow"
        >
          📊 Loan Scoring Demo
        </Link>
        <Link
          href="/upload"
          className="rounded bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 text-lg font-medium shadow"
        >
          🪪 Offline Upload Demo
        </Link>
      </div>
    </main>
  );
}
