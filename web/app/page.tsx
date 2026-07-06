"use client";

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow">

        <h1 className="text-4xl font-bold">
          DocuMind AI
        </h1>

        <p className="mt-2 text-gray-500">
          Generate API documentation using AI
        </p>

        <div className="mt-8">

          <label className="mb-2 block font-semibold">
            Paste your FastAPI code
          </label>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
            className="h-72 w-full rounded-lg border p-4 font-mono"
          />

        </div>

        <button
          className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
        >
          Generate Documentation
        </button>

        <div className="mt-10">

          <h2 className="mb-3 text-2xl font-bold">
            Generated Documentation
          </h2>

          <div className="min-h-[300px] rounded-lg border bg-gray-50 p-5">

            Documentation will appear here...

          </div>

        </div>

      </div>
    </main>
  );
}