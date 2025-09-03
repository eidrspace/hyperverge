"use client";
import { useState } from "react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input) return;
    setMessages([...messages, "You: " + input, "Bot: (Here the LLM reply will appear)"]);
    setInput("");
  }

  return (
    <main className="flex flex-col min-h-screen items-center p-6 bg-gray-50">
      <h1 className="text-xl font-bold mb-4">💬 Loan Assistant Chatbot</h1>
      <div className="border w-full max-w-sm p-4 h-64 overflow-y-auto mb-4 bg-white rounded shadow">
        {messages.map((m, i) => (
          <p key={i} className="text-sm">{m}</p>
        ))}
      </div>
      <div className="flex gap-2 w-full max-w-sm">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Ask about your loan..."
        />
        <button onClick={sendMessage} className="btn">Send</button>
      </div>
    </main>
  );
}
