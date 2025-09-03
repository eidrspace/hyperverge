"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100 text-gray-900 p-6">
      {/* Logo + App Name */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/logo.png" alt="HVLoan Logo" className="w-12 h-12" />
        <h1 className="text-3xl font-bold text-indigo-700">HVLoan</h1>
      </div>

      {/* Tagline */}
      <p className="text-lg text-center mb-10 max-w-lg">
        💡 <b>Loans made simple.</b> Designed for everyone
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link
          href="/chatbot"
          className="flex items-center justify-center bg-indigo-600 text-white p-4 rounded-lg shadow hover:bg-indigo-700 transition text-xl"
        >
          💬 Chatbot <br />
          <span className="text-sm">Ask in your language</span>
        </Link>

        <Link
          href="/scoring"
          className="flex items-center justify-center bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition text-xl"
        >
          📊 Loan Check <br />
          <span className="text-sm">Quick eligibility</span>
        </Link>

        <Link
          href="/upload"
          className="flex items-center justify-center bg-orange-600 text-white p-4 rounded-lg shadow hover:bg-orange-700 transition text-xl"
        >
          🪪 Upload Docs <br />
          <span className="text-sm">Works even offline</span>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500 text-center">
        🌐 Optimized for low-network India · ⚡ Lightweight · 🛡️ Secure
      </footer>
    </main>
  );
}
