import { AcademicCapIcon, ClockIcon, CurrencyDollarIcon, MailIcon, PhotographIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { applyTheme, getInitialTheme } from "../utils/theme";

const tutorContent = {
  name: "Everett Richards",
  title: "Math and Computer Science Tutor (all levels)",
  subtitle: "PhD Computer Science student at the University of Delaware",
  photo: "/slideshow/grad_photo.png",
  email: "evrich@udel.edu",
  signupFormUrl: "https://forms.gle/kK6MyEsX4sVD92Fj6",
  bio: "I am a PhD Computer Science student at the University of Delaware with two bachelor's degrees from San Diego State University: Computer Science and Applied Mathematics. I have one year of experience as a Discrete Math TA and one year tutoring at SDSU's Math and Science Learning Center, where I worked with CS, mathematics, and physics students across a wide range of undergraduate and upper-division coursework.",
  qualifications: [
    "PhD Computer Science student at the University of Delaware",
    "B.S. Computer Science, San Diego State University",
    "B.S. Applied Mathematics, San Diego State University",
    "1 year as a Discrete Math teaching assistant",
    "1 year tutoring at SDSU's Math and Science Learning Center",
  ],
  courses: [
    "Computer Science: algorithms, data structures, discrete math, software design, theory, and related upper-division coursework",
    "Mathematics: discrete mathematics, linear algebra, differential equations, real analysis, and other advanced math classes",
    "Physics: mechanics, electricity and magnetism, and other quantitative foundation courses",
  ],
  rates: [
    { label: "Starting rate", value: "$39/hour", detail: "for standard tutoring sessions. Group discounts available!" },
    { label: "Session length", value: "1 hour minimum", detail: "longer sessions available by request" },
    { label: "Payment", value: "Immediately after session", detail: "cash, Venmo, or another agreed method" },
  ],
  availability: [
    "Monday after 4:00 PM",
    "Tuesday 12:00 PM - 5:00 PM",
    "Wednesday anytime after 10:00 AM",
    "Thursday 12:00 PM - 5:00 PM",
    "Friday anytime",
  ],
  policies: [
    "24-hour cancellation notice",
    "Online or in-person sessions",
    "No completing graded assignments or exams",
    "Group discounts available!!!",
  ],
};

function TutorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTheme = getInitialTheme();
    applyTheme('light');

    return () => {
      applyTheme(previousTheme);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-r from-sky-500/10 via-cyan-400/10 to-emerald-400/10 blur-3xl" />
        <div className="container mx-auto px-5 lg:px-10 pt-10 lg:pt-16 pb-12 lg:pb-16 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700 shadow-sm backdrop-blur dark:border-sky-900/60 dark:bg-gray-800/80 dark:text-sky-300">
                University tutoring services
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {tutorContent.name}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-sky-700 dark:text-sky-300">
                {tutorContent.title}
              </p>
              <p className="mt-1 text-lg sm:text-xl font-light text-slate-700 dark:text-slate-300">
                {tutorContent.subtitle}
              </p>
              {/* <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                {tutorContent.bio}
              </p> */}

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-800 dark:bg-sky-950 dark:text-sky-200">
                  CS + upper-division math tutoring
                </span>
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                  Online or in person
                </span>
                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                  Rates start at $39/hour
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={tutorContent.signupFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-transform hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  Sign up with the Google Form
                </a>
                <a
                  href={`mailto:${tutorContent.email}`}
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-gray-800 dark:text-slate-200 dark:hover:bg-gray-700"
                >
                  Email {tutorContent.email}
                </a>
              </div>
            </div>

            <div className="relative lg:max-w-[480px] lg:ml-auto">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-emerald-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl shadow-slate-300/40 ring-1 ring-slate-200/70 dark:border-gray-700/60 dark:bg-gray-800 dark:ring-gray-700/80">
                <img
                  src={tutorContent.photo}
                  alt="Everett Richards"
                  className="h-[420px] w-full object-cover object-center xl:h-[340px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent px-6 py-2 text-white">
                  <div className="text-md font-semibold uppercase tracking-[0.2em] text-slate-950">
                    Everett Richards
                  </div>
                  <div className="mt-2 text-lg font-medium text-slate-700 dark:text-slate-300">
                    Computer science and mathematics tutor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-10 pb-6 lg:pb-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <PhotographIcon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">About Me</h2>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-300">
              {tutorContent.bio}
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-sm dark:border-gray-800">
            <div className="flex items-center gap-3">
              <AcademicCapIcon className="h-6 w-6 text-cyan-300" />
              <h2 className="text-2xl font-semibold">Qualifications</h2>
            </div>
            <ul className="mt-5 space-y-3 text-base leading-7 text-slate-200">
              {tutorContent.qualifications.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-10 py-6 lg:py-10">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <AcademicCapIcon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Courses Tutored</h2>
            </div>
            <div className="mt-6 space-y-4">
              {tutorContent.courses.map((course) => (
                <div key={course} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-300">
                  {course}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-slate-400">
              If your class is close to one of these topics but isn't listed, reach out anyway!
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <CurrencyDollarIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Rates</h2>
            </div>
            <div className="mt-6 space-y-4">
              {tutorContent.rates.map((rate) => (
                <div key={rate.label} className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100 dark:bg-emerald-950/40 dark:ring-emerald-900/60">
                  <div className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                    {rate.label}
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-slate-900">
                    {rate.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {rate.detail}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-10 py-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-sm dark:border-gray-800">
            <div className="flex items-center gap-3">
              <ClockIcon className="h-6 w-6 text-amber-300" />
              <h2 className="text-2xl font-semibold">Availability</h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {tutorContent.availability.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <MailIcon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Policies</h2>
            </div>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
              {tutorContent.policies.map((policy) => (
                <li key={policy} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-sky-500" />
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Payment is due immediately after the session.
            </p>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-10 py-6 lg:py-10">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] items-start">
          {/* <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <MailIcon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Form</h2>
            </div>
            <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              Fill this out to open a pre-written email to {tutorContent.email}. You can also replace this behavior later with a backend form if you want submissions stored automatically.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleContactSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@school.edu"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Course / topic</span>
                <input
                  name="course"
                  type="text"
                  placeholder="Algorithms, discrete math, linear algebra, etc."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Preferred format</span>
                <select
                  name="format"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Online">Online</option>
                  <option value="In person">In person</option>
                  <option value="Either">Either</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me what you need help with, the course number, and any deadline details."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </label>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-transform hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Open email draft
                </button>
                <a
                  href={`mailto:${tutorContent.email}`}
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-200 dark:hover:bg-gray-700"
                >
                  Contact directly
                </a>
              </div>
            </form>
          </article> */}

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-sm dark:border-gray-800">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Quick contact
              </div>
              <div className="mt-3 text-2xl font-semibold">{tutorContent.email}</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use this if you want to ask a quick question before filling out the signup form.
              </p>
            </div>

            <a
              href={tutorContent.signupFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[2rem] bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-600 p-[1px] shadow-xl shadow-sky-500/20"
            >
              <div className="rounded-[2rem] bg-slate-950 px-8 py-9 text-white transition-transform hover:-translate-y-0.5 dark:bg-gray-900">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Sign-up form
                </div>
                <h3 className="mt-3 text-3xl font-semibold leading-tight">
                  Ready to book tutoring?
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Fill out the Google Form to request a tutoring session. I will respond as soon as possible to schedule a time that works for both of us!
                </p>
                <div className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-base font-semibold text-slate-950">
                  Open Google Form
                </div>
              </div>
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default TutorPage;