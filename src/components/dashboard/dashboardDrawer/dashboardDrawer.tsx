"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getUserInfo } from "@/Services/authServices"; // Replace with actual function to get user info

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const userInfo = getUserInfo();

  useEffect(() => {
    // Check user role on component mount
    console.log("User role:", userInfo?.role);
  }, [userInfo]);

  const adminLinks = [
    { name: "Manage Trainers", href: "/dashboard/manage-trainers" },
    { name: "Schedule Classes", href: "/dashboard/schedule-classes" },
  ];

  const trainerLinks = [
    { name: "View Classes", href: "/dashboard/view-classes" },
    { name: "Profile", href: "/dashboard/profile" },
  ];

  const traineeLinks = [
    { name: "Book Classes", href: "/dashboard/book-classes" },
    { name: "My Profile", href: "/dashboard/profile" },
  ];

  const links =
    userInfo?.role === "ADMIN"
      ? adminLinks
      : userInfo?.role === "TRAINER"
      ? trainerLinks
      : traineeLinks;

  return (
    <div className="flex">
      {/* Sidebar / Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#133E87] text-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:static`}
      >
        {/* <div className="p-6 text-2xl font-bold">Dashboard</div> */}
        <ul className="space-y-4 p-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block p-3 hover:bg-[#608BC1] rounded"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-h-screen p-6 ml-64 bg-gray-100 lg:ml-0 lg:p-4">
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="lg:hidden mb-4 px-4 py-2 text-white bg-[#133E87] rounded"
        >
          Menu
        </button>
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardDrawer;
