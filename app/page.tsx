"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

export default function HomePage() {
  const [showLangPopup, setShowLangPopup] = useState(false);
  const [language, setLanguage] = useState<"en" | "ta" | null>(null);

  // Show popup only first time
  useEffect(() => {
    const savedLang = localStorage.getItem("hvloan_lang");
    if (!savedLang) {
      setShowLangPopup(true);
    } else {
      setLanguage(savedLang as "en" | "ta");
    }
  }, []);

  function selectLanguage(lang: "en" | "ta") {
    setLanguage(lang);
    localStorage.setItem("hvloan_lang", lang);
    setShowLangPopup(false);
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-indigo-700 via-indigo-500 to-indigo-300 text-white p-6">

      {/* Language Popup */}
      <Dialog open={showLangPopup} onClose={() => {}} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-lg text-center">
            <Dialog.Title className="text-xl font-bold mb-4">🌐 Choose Language</Dialog.Title>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => selectLanguage("en")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow text-lg"
              >
                English
              </button>
              <button
                onClick={() => selectLanguage("ta")}
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow text-lg"
              >
                தமிழ்
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Logo + Title */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/logo.png"
          alt="HVLoan Logo"
          width={56}
          height={56}
          priority
        />
        <h1 className="text-3xl font-bold text-white-700 mt-2">HVLoan</h1>
        <p className="text-white-600 mt-2 text-center max-w-sm">
          💡 <span className="font-semibold">Loans made simple.</span> Designed for everyone.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 w-full max-w-md">
        <Link href="/chatbot">
          <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-indigo-700">💬 Chatbot</h2>
              <p className="text-sm text-gray-500">
                {language === "ta" ? "உங்கள் மொழியில் கேளுங்கள்" : "Ask in your language"}
              </p>
            </div>
            <span className="text-indigo-600">→</span>
          </div>
        </Link>

        <Link href="/scoring">
          <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-green-700">📊 Loan Check</h2>
              <p className="text-sm text-gray-500">
                {language === "ta" ? "விரைவான தகுதி" : "Quick eligibility"}
              </p>
            </div>
            <span className="text-green-600">→</span>
          </div>
        </Link>

        <Link href="/upload">
          <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-orange-700">🪪 Upload Docs</h2>
              <p className="text-sm text-gray-500">
                {language === "ta" ? "ஆஃப்லைனிலும் வேலை செய்யும்" : "Works even offline"}
              </p>
            </div>
            <span className="text-orange-600">→</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
