"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Logo from "../../../public/nacer-logo.png";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const router = useRouter(); // Get access to the Next.js router
  const t = useTranslations('Navbar');


  // Function to handle language change
  const handleLanguageChange = (locale) => {
    const currentPathname = window.location.pathname; // Get the current URL path
    const newPath = `/${locale}${currentPathname.slice(3)}`; // Replace the first 3 chars to switch language (e.g., "/en" or "/ar")

    router.push(newPath); // Navigate to the new path with the selected locale
  };

  return (
    <header className="border-b font-[sans-serif] tracking-wide relative z-50">
      <section className="py-2 bg-[#1d294f] text-white text-center px-10">
        <p className="text-sm">{t("text")}</p>
      </section>
      <div className="flex justify-center items-center w-full px-4 lg:px-10 py-4 relative">
        <div className="w-full h-29 flex justify-between items-center">
          <Link className="md:m-auto" href="../">
            <Image
              src={Logo}
              alt="logo"
              className="h-full w-16 md:w-32"
              width={100}
              height={100}
            />
          </Link>
          
        <div className="">
          <select
            onChange={(e) => handleLanguageChange(e.target.value)} // Handle language change on selection
            className="px-4 py-2 text-black bg-white rounded-lg hover:bg-gray-200"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
        </div>
      </div>
    </header>
  );
}
