import { BookOpenIcon, ChevronDownIcon, ChevronUpIcon, ClipboardCopyIcon, CheckIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { publications } from "../data";

function PublicationCard({ publication }) {
  const [isAbstractExpanded, setIsAbstractExpanded] = useState(false);
  const [selectedCitationFormat, setSelectedCitationFormat] = useState("bibtex");
  const [copiedFormat, setCopiedFormat] = useState(null);

  const citationFormats = [
    { value: "bibtex", label: "BibTeX" },
    { value: "apa", label: "APA" },
    { value: "mla", label: "MLA" },
    { value: "chicago", label: "Chicago" }
  ];

  const handleCopyCitation = (format) => {
    const citation = publication.citations[format];
    navigator.clipboard.writeText(citation).then(() => {
      setCopiedFormat(format);
      setTimeout(() => setCopiedFormat(null), 2000);
    }).catch((err) => {
      console.error('Failed to copy citation:', err);
      alert('Failed to copy citation to clipboard. Please try selecting and copying the text manually.');
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Thumbnail */}
        <div className="lg:w-1/4">
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            {publication.thumbnail ? (
              <img
                src={publication.thumbnail}
                alt={publication.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <BookOpenIcon className="w-16 h-16" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-3/4">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {publication.title}
          </h3>

          {/* Authors */}
          <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
            {publication.authors.map((author, index) => (
              <span key={index}>
                {index > 0 && ", "}
                <span className={author === "Everett Richards" ? "font-semibold text-blue-600 dark:text-blue-400" : ""}>
                  {author}
                </span>
              </span>
            ))}
          </p>

          {/* Venue */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-medium">{publication.venue}</span> • {publication.venueType} • {publication.year}
          </p>

          {/* Abstract Toggle */}
          <div className="mb-4">
            <button
              onClick={() => setIsAbstractExpanded(!isAbstractExpanded)}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              {isAbstractExpanded ? (
                <React.Fragment>
                  <ChevronUpIcon className="w-5 h-5" />
                  Hide Abstract
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <ChevronDownIcon className="w-5 h-5" />
                  Show Abstract
                </React.Fragment>
              )}
            </button>

            {isAbstractExpanded && (
              <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                  {publication.abstract}
                </p>
              </div>
            )}
          </div>

          {/* Citation Export */}
          <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Citation Format:
              </span>
              {citationFormats.map((format) => (
                <button
                  key={format.value}
                  onClick={() => setSelectedCitationFormat(format.value)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    selectedCitationFormat === format.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
                  }`}
                >
                  {format.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <pre className="text-xs bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 overflow-x-auto whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
                {publication.citations[selectedCitationFormat]}
              </pre>
              <button
                onClick={() => handleCopyCitation(selectedCitationFormat)}
                className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                title="Copy citation"
              >
                {copiedFormat === selectedCitationFormat ? (
                  <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                ) : (
                  <ClipboardCopyIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3">
            {publication.pdfLink && (
              <a
                href={publication.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <span role="img" aria-label="document">📄</span> Pre-print PDF
              </a>
            )}
            {publication.officialLink && (
              <a
                href={publication.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <span role="img" aria-label="link">🔗</span> Official Publication
              </a>
            )}
            {publication.posterLink && (
              <a
                href={publication.posterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <span role="img" aria-label="poster">📊</span> Poster
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <div className="min-h-screen py-10 lg:py-20">
      <div className="container px-5 mx-auto lg:px-10">
        <div className="flex flex-col w-full mb-12 text-center">
          <BookOpenIcon className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400" />
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Publications
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700 dark:text-gray-400">
            A collection of my published research papers in computer vision, autonomous vehicles, 
            and robotics. Each publication includes the full citation, abstract, and links to the 
            paper and related materials.
          </p>
        </div>

        <div className="lg:w-4/5 mx-auto">
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
      </div>
    </div>
  );
}
