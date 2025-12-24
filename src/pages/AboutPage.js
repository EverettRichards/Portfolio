import { PhotographIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const personalPhotos = [
  {
    photo: "./slideshow/alps.jpg",
    caption: "Exploring the Swiss Alps during a winter trip to central Europe."
  },
  {
    photo: "./slideshow/EstesPark.jpg",
    caption: "Adventuring at Estes Park in the Colorado Rocky Mountains."
  },
  {
    photo: "./slideshow/boston_kayak.jpg",
    caption: "Kayaking on the Charles River in Boston, MA."
  },
  {
    photo: "./slideshow/Teddie2.jpg",
    caption: "Exploring the nation's capital with a family member's dog, Teddie."
  },
];

export default function AboutPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="min-h-screen py-10 lg:py-20">
      <div className="container px-5 mx-auto text-center lg:px-10">
        <PhotographIcon className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400" />
        <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
          Outside the Lab
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700 dark:text-gray-400 mb-12">
          When I'm not working on research or leading student organizations, 
          I enjoy exploring the outdoors, traveling to new places, and spending time with family and friends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-4/5 mx-auto">
          {personalPhotos.map((item, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
              onClick={() => setSelectedPhoto(item)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedPhoto(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View larger image: ${item.caption}`}
            >
              <img
                src={item.photo}
                alt={item.caption}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          onKeyPress={(e) => {
            if (e.key === 'Escape') {
              setSelectedPhoto(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Close preview"
            >
              &times;
            </button>
            <img
              src={selectedPhoto.photo}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
