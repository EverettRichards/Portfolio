import React, { useState, useEffect } from "react";
import { BookOpenIcon } from "@heroicons/react/solid";
import poemsData from "../poems.json";

export default function PoetryPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    // Sort poems by date (newest first) when possible
    const sorted = [...(poemsData || [])].sort((a, b) => {
      const ta = new Date(a.date).getTime();
      const tb = new Date(b.date).getTime();
      const va = isNaN(ta) ? 0 : ta;
      const vb = isNaN(tb) ? 0 : tb;
      return vb - va;
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
            A selection of poems and short stories I've written. Click a title to expand and read the poem.
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{p.date}</p>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    {openIndex === idx ? "Hide" : "Read"}
                  </div>
                </button>

                {openIndex === idx && (
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                    <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-100 text-sm">
                      {p.content}
                    </pre>
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