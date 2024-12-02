"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../../../public/nacer-logo.png";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // Next.js router for navigation
  const locale = pathname.split("/")[1] || "en"; // Extract current locale
  const [language, setLanguage] = useState(locale); // Initialize state with the current locale
  const t = useTranslations('Navbar');


  // Function to handle language change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    // Construct the new path
    const currentPathWithoutLocale = pathname.startsWith(`/${locale}`)
      ? pathname.replace(`/${locale}`, "")
      : pathname;
    const newPath = `/${selectedLanguage}${currentPathWithoutLocale}`;

    setLanguage(selectedLanguage); // Update the language state
    router.push(newPath); // Navigate to the new locale path
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
          
          <div className="hidden md:flex items-center">
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>

        <div className="flex md:hidden items-center text-xs">
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
