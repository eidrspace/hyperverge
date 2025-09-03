"use client";
import { useState, useEffect } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("No file selected.");

  useEffect(() => {
    window.addEventListener("online", tryUpload);
    return () => window.removeEventListener("online", tryUpload);
  }, []);

  function saveOffline(file: File) {
    localStorage.setItem("pendingUpload", file.name);
    setStatus("✅ Saved offline. Will upload when internet is back.");
  }

  function tryUpload() {
    const pending = localStorage.getItem("pendingUpload");
    if (pending) {
      setStatus("🌐 Uploading " + pending + "...");
      setTimeout(() => {
        setStatus("✅ Uploaded successfully.");
        localStorage.removeItem("pendingUpload");
      }, 2000);
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      setStatus("📂 File selected: " + f.name);
    }
  }

  function uploadNow() {
    if (!file) {
      setStatus("❌ Please choose a file first.");
      return;
    }

    if (navigator.onLine) {
      setStatus("🌐 Uploading...");
      setTimeout(() => setStatus("✅ Uploaded successfully."), 2000);
    } else {
      saveOffline(file);
    }
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-indigo-700 via-indigo-500 to-indigo-300 text-white p-6">
      <h1 className="text-2xl font-bold text-white-600 mb-4">🪪 Upload Documents</h1>

      {/* Hidden file input */}
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFile}
      />

      {/* Custom Choose File button */}
      <button
        onClick={() => document.getElementById("fileInput")?.click()}
        className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 mb-4"
      >
        📂 Choose File
      </button>

      {/* Upload Now button */}
      <button
        onClick={uploadNow}
        className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 mb-4"
      >
        🚀 Upload Now
      </button>

      {/* Status message */}
      <p className="text-gray-700">{status}</p>
    </main>
  );
}
