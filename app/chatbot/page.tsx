"use client";
import { useState } from "react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // 1️⃣ Define sendMessage first
  function sendMessage(text: string) {
    if (!text) return;
    const userMsg = "👤 You: " + text;
    const botMsg =
      "🤖 HVLoan Assistant: " +
      (text.includes("loan") || text.includes("approve")
        ? "Based on your details, you may qualify for a loan. Try the Scoring page for exact results!"
        : "I can guide you with loans, documents, and scoring. Please ask about loan or approval.");
    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  }

  // 2️⃣ Then define handleVoice
  function handleVoice() {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice input not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
  const speech = event.results[0][0].transcript;
  sendMessage(speech);
};

    recognition.start();
  }

  return (
    <main className="flex flex-col min-h-screen items-center p-6 bg-gray-50 text-gray-900">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">💬 HVLoan Assistant</h1>

      <div className="border w-full max-w-md p-4 h-72 overflow-y-auto mb-4 bg-white rounded shadow">
        {messages.map((m, i) => (
          <p key={i} className="text-sm mb-1">{m}</p>
        ))}
      </div>

      <div className="flex gap-2 w-full max-w-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Type your question..."
        />
        <button onClick={() => sendMessage(input)} className="bg-indigo-600 text-white px-3 py-2 rounded">
          Send
        </button>
        <button onClick={handleVoice} className="bg-green-600 text-white px-3 py-2 rounded">
          🎤
        </button>
      </div>
    </main>
  );
}
