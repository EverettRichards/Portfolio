import React, { useState, useEffect } from "react";
import { BookOpenIcon } from "@heroicons/react/solid";
import poemsData from "../poems.json";

function parseForSort(s) {
  if (!s) return 0;
  const t = Date.parse(s);
  if (!isNaN(t)) return t;
  // try m/d/yy or m/d/yyyy
  const m = String(s).trim().match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m) {
    let mo = parseInt(m[1], 10);
    let day = parseInt(m[2], 10);
    let yr = parseInt(m[3], 10);
    if (yr < 100) yr += 2000; // treat two-digit years as 20xx
    return new Date(yr, mo - 1, day).getTime();
  }
  return 0;
}

export default function PoetryPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    // Sort poems by date (newest first) when possible
    const sorted = [...(poemsData || [])].sort((a, b) => {
      const ta = parseForSort(a.date);
      const tb = parseForSort(b.date);
      return tb - ta;
    });
    setPoems(sorted);
    window.scrollTo(0, 0);
  }, []);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen py-10 lg:py-20">
      <div className="container px-5 mx-auto lg:px-10">
        <div className="flex flex-col w-full mb-12 text-center">
          <BookOpenIcon className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400" />
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Poetry
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700 dark:text-gray-400">
            A selection of poems and short stories I've written. Click a title to expand and read the work.
          </p>
        </div>

        <div className="lg:w-4/5 mx-auto space-y-4">
          {poems.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center text-gray-700 dark:text-gray-300">
              No poems found. Run <code>python3 poems/poem_builder.py</code> to generate <code>src/poems.json</code>.
            </div>
          ) : (
            poems.map((p, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex justify-between items-center"
                  aria-expanded={openIndex === idx}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      {p.title}
                      {p.type === "pdf" && (
                        <span className="ml-2 inline-block text-xs font-semibold px-2 py-0.5 border rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                          pdf
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{p.date}</p>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    {openIndex === idx ? "Hide" : "Read"}
                  </div>
                </button>

                {openIndex === idx && (
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                    {p.type === "pdf" ? (
                      <div className="w-full">
                        {/* Embed the PDF served from public/poems */}
                        <object
                          data={p.content}
                          type="application/pdf"
                          className="w-full h-96 border rounded"
                        >
                          <p className="text-sm text-gray-800 dark:text-gray-100">
                            PDF cannot be displayed.{" "}
                            <a href={p.content} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">
                              Open in new tab
                            </a>
                          </p>
                        </object>
                      </div>
                    ) : (
                      <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-100 text-sm">
                        {p.content}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}