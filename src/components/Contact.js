import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { contacts } from "../data";

export default function Contact() {
    return (
        <section id="contact">
          <div className="container px-5 lg:pt-10 lg:pb-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Contact Me
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Feel free to reach out through any of the following methods.
                </p>
                <br />
                <div className="flex flex-wrap lg:w-3/4 sm:mx-auto sm:mb-2 -mx-6 text-center">
                    {contacts.map((contact) => (
                    <div key={contact} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <span className="title-font font-medium text-white">
                                <a href={contact.url} target="_blank" className="w-full"><img src={contact.icon} style={{width:"32px", height:"32px", display:"inline", marginRight:"12px"}} /><span>{contact.value}</span></a>
                            </span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
      );
}