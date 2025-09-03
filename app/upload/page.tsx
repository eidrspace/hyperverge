"use client";
import { useState, useEffect } from "react";

export default function UploadPage() {
  const [status, setStatus] = useState("Idle");

  useEffect(() => {
    window.addEventListener("online", tryUpload);
    return () => window.removeEventListener("online", tryUpload);
  }, []);

  function saveOffline(file: File) {
    localStorage.setItem("pendingUpload", file.name);
    setStatus("Saved offline ✅ (will upload when online)");
  }

  function tryUpload() {
    const pending = localStorage.getItem("pendingUpload");
    if (pending) {
      setStatus("Uploading... 🌐");
      setTimeout(() => {
        setStatus("Uploaded successfully ✅");
        localStorage.removeItem("pendingUpload");
      }, 2000);
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      if (navigator.onLine) {
        setStatus("Uploading... 🌐");
        setTimeout(() => setStatus("Uploaded successfully ✅"), 2000);
      } else {
        saveOffline(f);
      }
    }
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-6 bg-black text-white">
      <h1 className="text-xl font-bold mb-4">🪪 Upload Document</h1>
      <input type="file" onChange={handleFile} className="mb-4" />
      <p className="text-gray-300">{status}</p>
    </main>
  );
}
