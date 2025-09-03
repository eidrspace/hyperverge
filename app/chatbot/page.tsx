"use client";
import { useState } from "react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input) return;
    const userMsg = "You: " + input;
    // Mock AI reply
    const botMsg = "Bot: Based on your query, this is a loan-related response.";
    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  }

  return (
    <main className="flex flex-col min-h-screen items-center p-6 bg-black text-white">
      <h1 className="text-xl font-bold mb-4">💬 Loan Assistant Chatbot</h1>
      <div className="border w-full max-w-sm p-4 h-64 overflow-y-auto mb-4 bg-gray-900 rounded shadow">
        {messages.map((m, i) => (
          <p key={i} className="text-sm">{m}</p>
        ))}
      </div>
      <div className="flex gap-2 w-full max-w-sm">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded p-2 text-black"
          placeholder="Ask about your loan..."
        />
        <button onClick={sendMessage} className="bg-blue-600 px-3 py-2 rounded">
          Send
        </button>
      </div>
    </main>
  );
}
