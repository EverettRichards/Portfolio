import { UserIcon } from "@heroicons/react/solid";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="container px-5 pt-5 lg:pt-10 lg:pb-10 mx-auto text-center lg:px-10">
          <UserIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Leadership Roles
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Section coming soon...
          </p>
        </div>
    </section>
  );
}