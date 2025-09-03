"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">AI Loan Underwriting App</h1>
      <p className="text-gray-600 mb-4">Built for rural & semi-urban India</p>
      <div className="grid gap-4 w-full max-w-sm">
        <Link href="/chatbot" className="btn">💬 Loan Assistant Chatbot</Link>
        <Link href="/scoring" className="btn">📊 Loan Scoring Demo</Link>
        <Link href="/upload" className="btn">🪪 Offline Upload Demo</Link>
      </div>
    </main>
  );
}
