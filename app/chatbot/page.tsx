"use client";
import { useState, useEffect } from "react";

export default function ChatbotPage() {
  const [lang, setLang] = useState<"en" | "ta" | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Play audio + set language
  function playAndSetLanguage(language: "en" | "ta") {
    const audio = new Audio(language === "en" ? "/english.mp3" : "/tamil.mp3");
    audio.play();
    setTimeout(() => setLang(language), 1000); // wait 1s for audio
  }

  // Send message
  function sendMessage(text: string) {
    if (!text) return;
    const userMsg = (lang === "ta" ? "👤 நீங்கள்: " : "👤 You: ") + text;

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsBotTyping(true);

    setTimeout(() => {
      let botMsg = "🤖 HVLoan: ";
      if (lang === "ta") {
        botMsg += "உங்கள் வருமானம் மற்றும் செலவுகளை வைத்து கடன் தகுதி பார்க்கலாம்.";
      } else {
        botMsg += "We can check your loan eligibility based on your income and expenses.";
      }

      setMessages((prev) => [...prev, botMsg]);
      setIsBotTyping(false);
    }, 1200); // typing delay
  }

  // Auto welcome message when language is selected
  useEffect(() => {
    if (lang) {
      const welcomeMsg =
        lang === "ta"
          ? "🤖 HVLoan: வணக்கம், நான் உங்களுக்கு எப்படி உதவலாம்?"
          : "🤖 HVLoan: Hello, how can I help you!";
      setTimeout(() => {
        setMessages([welcomeMsg]);
      }, 1200);
    }
  }, [lang]);

  // Language selection screen
  if (!lang) {
    return (
      <main className="flex flex-col min-h-screen items-center justify-center bg-gray-50 text-gray-900 p-6">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6">🌐 Choose Language</h1>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button
            onClick={() => playAndSetLanguage("en")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow text-xl"
          >
            English 🔊
          </button>
          <button
            onClick={() => playAndSetLanguage("ta")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow text-xl"
          >
            தமிழ் 🔊
          </button>
        </div>
      </main>
    );
  }

  // Chatbot view after language chosen
  return (
    <main className="flex flex-col min-h-screen items-center p-6 bg-gray-50 text-gray-900">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">
        {lang === "ta" ? "💬 HVLoan உதவியாளர்" : "💬 HVLoan Assistant"}
      </h1>

      {/* Chat window */}
      <div className="border w-full max-w-md p-4 h-72 overflow-y-auto mb-4 bg-white rounded-2xl shadow-lg">
        {messages.map((m, i) => (
          <p
            key={i}
            className={`text-sm mb-2 p-2 rounded-lg ${
              m.startsWith("👤")
                ? "bg-indigo-50 text-indigo-800"
                : "bg-green-50 text-green-800"
            }`}
          >
            {m}
          </p>
        ))}

        {/* Typing indicator */}
        {isBotTyping && (
          <div className="flex space-x-1 mt-2">
            <span className="typing"></span>
            <span className="typing"></span>
            <span className="typing"></span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 w-full max-w-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder={lang === "ta" ? "உங்கள் கேள்வியை எழுதுங்கள்..." : "Type your question..."}
        />
        <button
          onClick={() => sendMessage(input)}
          className="bg-indigo-600 text-white px-3 py-2 rounded"
        >
          {lang === "ta" ? "அனுப்பு" : "Send"}
        </button>
      </div>
    </main>
  );
}
