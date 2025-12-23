import React from "react";
import { Outlet } from "react-router-dom";
import NavbarNew from "../components/NavbarNew";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-400">
      <NavbarNew />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
