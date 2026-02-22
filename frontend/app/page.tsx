"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({
    title: "",
    department: "",
    seniority: "",
    requirements: "",
    existing_jd: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/generate",
        form
      );

      setResult(res.data.result);
    } catch (error) {
      console.error(error);
      setResult("❌ Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 space-y-6">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          AI Job Description Generator & Optimizer
        </h1>

        {/* Inputs */}
        <div className="grid gap-4">

          <input
            className="border p-3 rounded-lg text-black"
            placeholder="Job Title"
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <input
            className="border p-3 rounded-lg text-black"
            placeholder="Department"
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
          />

          <input
            className="border p-3 rounded-lg text-black"
            placeholder="Seniority"
            onChange={(e) =>
              setForm({ ...form, seniority: e.target.value })
            }
          />

          <textarea
            className="border p-3 rounded-lg text-black"
            placeholder="Requirements"
            rows={3}
            onChange={(e) =>
              setForm({ ...form, requirements: e.target.value })
            }
          />

          <textarea
            className="border p-3 rounded-lg text-black"
            placeholder="Existing JD (optional)"
            rows={3}
            onChange={(e) =>
              setForm({ ...form, existing_jd: e.target.value })
            }
          />

        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap text-gray-800 border">
            {result}
          </div>
        )}

      </div>
    </main>
  );
}