import React, { useState } from 'react';
import { NewspaperIcon as ChipIcon } from '@heroicons/react/solid';
import './News.css';

const initialNews = [
    {
        date: '2025-12-02',
        event: '<b>Attended <a href="https://neurips.cc/" target="_blank">NeurIPS</a> 2025</b> in San Diego, CA.'
    },
    {
        date: '2025-11-15',
        event: 'Helped organize and lead the <b><a href="https://acm.sdsu.edu/hack" target="_blank">Innovate 4 SDSU Hackathon</a></b>, in which nearly 200 students came together to build projects that benefit the San Diego community.'
    },
    {
        date: '2025-10-11',
        event: '<b>Presented a <a href="https://everettrichards.com/papers/Richards_MimicGen.pdf" target="_blank">research paper</a></b>, <i>"Modeling Imitation Learning Robustness to Noisy Demonstrations via Sigmoid Degradation"</i>, at <b>IEEE MIT URTC 2025</b> in Cambridge, MA.',
    },
    {
        date: '2025-10-11',
        event: '<b>Presented a <a href="https://everettrichards.com/papers/Richards_BM2CP.pdf" target="_blank">research paper</a></b>, <i>"From Chaos to Clarity: Strengthening 3D Collaborative Autonomous Vehicle Perception with Noise-Aware Training"</i>, at <b>IEEE MIT URTC 2025</b> in Cambridge, MA.',
    },
    {
        date: '2025-08-31',
        event: '<b>Began Research Assistantship</b> at the SDSU Machine Vision and Perception (MVP) Lab under Dr. Xiaobai Liu, working on VLA models for autonomous robotics.',
    },
    {
        date: '2025-07-31',
        event: '<b>Presented a <a href="http://localhost:3000/posters/WPI.jpg" target="_blank">research poster</a></b>, <i>"From Chaos to Clarity: Strengthening 3D Collaborative Autonomous Vehicle Perception with Noise-Aware Training"</i>, at the Summer Undergraduate Research Showcase at Worcester Polytechnic Institute (WPI).',
    },
    {
        date: '2025-07-09',
        event: '<b>Presented a <a href="https://ieeexplore.ieee.org/document/11120480" target="_blank">research paper</a></b>, <i>"Edge-Enabled Collaborative Object Detection for Real-Time Multi-Vehicle Perception"</i>, at <b>IEEE EDGE 2025</b> in Helsinki, Finland.',
    },
    {
        date: '2025-05-28',
        event: '<b>Began Research Assistantship</b> at the NSF REU in Applied AI for Advanced Applications at Worcester Polytechnic Institute (WPI).',
    },
    {
        date: '2025-05-18',
        event: '<b>Received the Certificate of Excellence Award</b> in Advanced Programming Languages by the World Computing Organization (WCO).',
    },
    {
        date: '2025-05-15',
        event: '<b>Paper accepted for publication</b> at <b>IEEE EDGE 2025</b> in Helsinki, Finland.'
    },
    {
        date: '2025-05-01',
        event: '<b>Elected as Interim Vice Chair</b> of the SDSU Coalition of Tech Representatives and Leadership (CTRL).',
    },
    {
        date: '2025-04-26',
        event: '<b>Served as a Project Judge</b> and planning committee member for the ACM "Innovate 4 SDSU" Hackathon.'
    },
    {
        date: '2025-03-28',
        event: '<b>Elected as University Council Representative</b> for the SDSU College of Sciences.',
    },
    {
        date: '2025-03-26',
        event: '<b>Re-elected as President</b> of the Association for Computing Machinery (ACM) Student Chapter at SDSU.',
    },
    {
        date: '2025-03-19',
        event: '<b>Received the George A. Hansen Scholarship</b> for outstanding academic performance in STEM.'
    },
    {
        date: '2024-12-07',
        event: '<b>Participated in the William Lowell Putnam Mathematical Competition</b> and scored in the top 40% of participants nationwide.',
    },
    {
        date: '2024-11-25',
        event: '<b>Negotiated and secured a $2,500 sponsorship</b> from Google on behalf of the SDSU ACM Chapter.'
    },
    {
        date: '2024-09-20',
        event: '<b>Began Research Assistantship</b> at the NSF REU in Interdisciplinary AI at the University of California San Diego (UCSD).',
    },
    {
        date: '2024-08-28',
        event: '<b>Began Tutor position</b> at the SDSU Math and Science Learning Center (MSLC).',
    },
    {
        date: '2024-08-12',
        event: '<b>Received Deloitte Foundation Scholarship</b> for outstanding leadership and career development.'
    },
    {
        date: '2024-08-08',
        event: '<b>Presented a <a href="https://drive.google.com/file/d/1bp1082myhzq6jsimDbMJyHCFLieBaZvd/view" target="_blank">research poster</a></b>, <i>"Edge-Enabled Collaborative Object Detection for Connected Autonomous Vehicles"</i>, at the Summer Undergraduate Research Symposium at the University of Delaware.',
    },
    {
        date: '2024-06-03',
        event: '<b>Began Research Assistantship</b> at the NSF REU in Sustainable Resilient Transportation Systems at the University of Delaware.',
    },
    {
        date: '2024-04-30',
        event: '<b>Founded the ACM Chapter</b> at San Diego State University (SDSU) and elected as President.',
    },
    {
        date: '2024-03-19',
        event: '<b>Formally declared a second major</b> in Applied Mathematics at San Diego State University.',
    },
    {
        date: '2024-01-17',
        event: '<b>Began Instructional Assistantship</b> for MATH 245 (Discrete Mathematics).'
    },
    {
        date: '2023-12-15',
        event: '<b>Began Research Assistantship</b> at the SDSU Data-informed Construction Engineering (DiCE) Lab.',
    },
    {
        date: '2023-08-23',
        event: '<b>Began undergraduate studies</b> at San Diego State University as a Computer Science major.'
    },
];

const PREVIEW_COUNT = 7;

export default function News() {
    const [news] = useState(initialNews);
    const [expanded, setExpanded] = useState(false);

    const previewNews = news.slice(0, PREVIEW_COUNT);
    const remainingNews = news.slice(PREVIEW_COUNT);

    return (
        <section className="section news-section" id="news">
            <div className="container px-5 pt-10 pb-2 mx-auto">
                <div className="text-center mb-2 md:mb-6">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        News &amp; Updates
                    </h1>
                    <p className="text-base leading-relaxed xl:w-3/5 lg:w-4/5 mx-auto">
                        Stay up to date with my latest professional milestones including employment, publications, awards, and leadership.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-5/6 lg:w-3/4 sm:mx-auto sm:mb-2 text-xs md:text-base">
                {news.length === 0 ? (
                    <p className="section-empty">No news updates yet. Stay tuned!</p>
                ) : (
                    <div className="table-container mx-auto text-white bg-gray-800">
                        <table className="news-table w-full border-separate border-spacing-y-4 border-spacing-x-6 pt-2">
                            <colgroup>
                                <col style={{ whiteSpace: 'nowrap', width: '1%' }} />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="px-1 md:px-4 py-2 text-left">Date</th>
                                    <th className="px-1 md:px-4 py-2 text-left">Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                {previewNews.map((item, idx) => (
                                    <tr key={idx} className="align-top">
                                        <td className="pl-1 md:pl-4 py-2" style={{ whiteSpace: 'nowrap' }}>{item.date} </td>
                                        <td className="px-1 md:px-4 py-2">
                                            <span dangerouslySetInnerHTML={{ __html: item.event }} />
                                        </td>
                                    </tr>
                                ))}
                                {expanded && remainingNews.map((item, idx) => (
                                    <tr key={PREVIEW_COUNT + idx} className="align-top">
                                        <td className="px-1 md:px-4 py-2" style={{ whiteSpace: 'nowrap' }}>{item.date} </td>
                                        <td className="px-1 md:px-4 py-2">
                                            <span dangerouslySetInnerHTML={{ __html: item.event }} />
                                        </td>
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