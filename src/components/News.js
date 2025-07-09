import React, { useState } from 'react';
import { NewspaperIcon as ChipIcon } from '@heroicons/react/solid';

const initialNews = [
    // Example:
    {
        date: '2025-07-09',
        event: 'Presented my paper, "Edge Enabled Collaborative Object Detection for Real-Time Multi-Vehicle Perception", at IEEE EDGE 2025.',
    },
    {
        date: '2025-05-28',
        event: 'Began Research Assistantship at the NSF REU in Applied AI for Advanced Applications at Worcester Polytechnic Institute (WPI).',
    },
    {
        date: '2025-05-15',
        event: 'Received the Certificate of Excellence Award in Advanced Programming Languages by the World Computing Organization (WCO).',
    },
    {
        date: '2025-05-01',
        event: 'Elected as Interim Vice Chair of the SDSU Coalition of Tech Representatives and Leadership (CTRL).',
    },
    {
        date: '2025-04-26',
        event: 'Served as a Project Judge and planning committee member for the ACM "Innovate 4 SDSU" Hackathon.'
    },
    {
        date: '2025-03-28',
        event: 'Elected as Associated Students Representative for the SDSU College of Sciences.',
    },
    {
        date: '2025-03-26',
        event: 'Re-elected as President of the Association for Computing Machinery (ACM) Student Chapter at SDSU.',
    },
    {
        date: '2025-03-19',
        event: 'Received the George A. Hansen Scholarship for outstanding academic performance in STEM.'
    },
    {
        date: '2024-09-20',
        event: 'Began Research Assistantship at the NSF REU in Interdisciplinary AI at the University of California San Diego (UCSD).',
    },
    {
        date: '2024-09-04',
        event: 'Hosted the first general body meeting as President of the brand new ACM Chapter at SDSU.',
    },
    {
        date: '2024-08-28',
        event: 'Began Tutor position at the SDSU Math and Science Learning Center (MSLC).',
    },
    {
        date: '2024-08-12',
        event: 'Received Deloitte Foundation Scholarship.'
    },
    {
        date: '2024-08-08',
        event: 'Presented my research poster at the Summer Undergraduate Research Symposium at the University of Delaware.',
    },
    {
        date: '2024-06-03',
        event: 'Began Research Assistantship at the NSF REU in Sustainable Resilient Transportation Systems at the University of Delaware.',
    },
    {
        date: '2024-01-20',
        event: 'Began Instructional Assistantship for MATH 245 (Discrete Mathematics).'
    },
    {
        date: '2023-08-23',
        event: 'Began undergraduate studies at San Diego State University.'
    },
];

const PREVIEW_COUNT = 5;

export default function News() {
    const [news] = useState(initialNews);
    const [expanded, setExpanded] = useState(false);

    const previewNews = news.slice(0, PREVIEW_COUNT);
    const remainingNews = news.slice(PREVIEW_COUNT);

    return (
        <section className="section news-section" id="news">
            <div className="container px-5 pt-10 pb-2 mx-auto">
                <div className="text-center mb-6">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        News &amp; Updates
                    </h1>
                    <p className="text-base leading-relaxed xl:w-3/5 lg:w-4/5 mx-auto">
                        Stay up to date with my latest professional milestones including employment, publications, awards, and leadership.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-3/4 sm:mx-auto sm:mb-2">
                {news.length === 0 ? (
                    <p className="section-empty">No news updates yet. Stay tuned!</p>
                ) : (
                    <div className="table-container mx-auto text-white bg-gray-800">
                        <table className="news-table w-full border-separate border-spacing-y-4 border-spacing-x-6 pt-2">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Date</th>
                                    <th className="px-4 py-2 text-left">Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                {previewNews.map((item, idx) => (
                                    <tr key={idx} className="align-top">
                                        <td className="px-4 py-2">{item.date}</td>
                                        <td className="px-4 py-2">{item.event}</td>
                                    </tr>
                                ))}
                                {expanded && remainingNews.map((item, idx) => (
                                    <tr key={PREVIEW_COUNT + idx} className="align-top">
                                        <td className="px-4 py-2">{item.date}</td>
                                        <td className="px-4 py-2">{item.event}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {remainingNews.length > 0 && (
                            <div className="text-center mt-2 mb-4">
                                <button
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                                    onClick={() => setExpanded((prev) => !prev)}
                                >
                                    {expanded ? 'Show Less' : `Show ${remainingNews.length} More`}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}