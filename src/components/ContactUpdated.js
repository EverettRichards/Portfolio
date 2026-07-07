import { MailIcon } from "@heroicons/react/solid";
import React from "react";
import { contacts } from "../data";

export default function ContactUpdated() {
    return (
        <section id="contact" className="py-10 lg:py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="container px-5 mx-auto text-center">
            <div className="flex flex-col w-full mb-12">
                <MailIcon className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400" />
                <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white">
                    Get In Touch
                </h2>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-400">
                    Feel free to reach out through any of the following channels.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 mx-auto">
                {contacts.map((contact) => (
                <div key={contact.title} className="p-4">
                    <a 
                      href={contact.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-50 dark:bg-gray-900 rounded-lg flex p-4 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-lg border border-gray-200 dark:border-gray-700 h-full"
                    >
                        <img 
                          src={contact.icon} 
                          alt={contact.title}
                          className="w-8 h-8 mr-4" 
                        />
                        <span className="title-font font-medium text-gray-800 dark:text-white">
                          {contact.value}
                        </span>
                    </a>
                </div>
                ))}
            </div>
        </div>
        </section>
      );
}
