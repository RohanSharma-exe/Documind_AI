"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import api from "@/lib/api";

export default function Home() {
  const [code, setCode] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateDocumentation = async () => {
    if (!code.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/documentation/generate", {
        code,
      });

      setDocumentation(response.data.markdown);
    } catch (err) {
      console.error(err);
      setError("Failed to generate documentation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-10 text-slate-900">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-5xl font-bold">DocuMind AI</h1>

          <p className="mt-2 text-lg text-slate-600">
            Generate beautiful API documentation using AI
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">

          {/* LEFT */}

          <div>

            <h2 className="mb-3 text-xl font-semibold">
              Paste FastAPI Code
            </h2>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your FastAPI code here..."
              className="h-[600px] w-full rounded-xl border border-slate-300 bg-white p-5 font-mono text-sm text-slate-900 shadow-sm outline-none focus:border-blue-500"
            />

            <button
              onClick={generateDocumentation}
              disabled={loading}
              className="mt-5 w-full rounded-xl bg-black py-4 text-lg font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Documentation"}
            </button>

          </div>

          {/* RIGHT */}

          <div>

            <h2 className="mb-3 text-xl font-semibold">
              Generated Documentation
            </h2>

            <div className="h-[670px] overflow-auto rounded-xl border border-slate-300 bg-white p-6 shadow-sm">

              {error ? (
                <p className="text-red-600">
                  {error}
                </p>
              ) : documentation ? (
                <article className="prose max-w-none">
                  <ReactMarkdown>
                    {documentation}
                  </ReactMarkdown>
                </article>
              ) : (
                <p className="text-slate-500">
                  Your generated documentation will appear here...
                </p>
              )}

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}