"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../../../public/nacer-logo.png";
import { useTranslations } from "next-intl";

const languages = [
  { code: "ar", name: "العربية", flag: "https://flagcdn.com/w40/dz.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/gb.png" },
];

export default function NavBar() {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // Next.js router for navigation
  const locale = pathname.split("/")[1] || "en"; // Extract current locale
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === locale) || languages[0]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations("Navbar");

  useEffect(() => {
    // Update selected language if the locale changes
    const updatedLanguage = languages.find((lang) => lang.code === locale);
    if (updatedLanguage) {
      setSelectedLanguage(updatedLanguage);
    }
  }, [locale]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);

    // Update route with the selected language's locale
    router.push(`/${language.code}${pathname.replace(`/${locale}`, "")}`);
  };

  return (
    <header className="border-b font-[sans-serif] tracking-wide relative z-50">
      <section className="py-2 bg-[#1d294f] text-white text-center px-10">
        <p className="text-sm">{t("text")}</p>
      </section>
      <div className="flex justify-center items-center w-full px-4 lg:px-10 py-4 relative">
        <div className="w-full h-29 flex justify-between items-center overflow-hidden">
          <Link className="md:m-auto" href="../">
            <Image
              src={Logo}
              alt="logo"
              className="h-full w-16 md:w-32"
              width={100}
              height={100}
            />
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 bg-white px-1 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="flex items-center">
                <img
                  src={selectedLanguage.flag}
                  alt={`${selectedLanguage.name} Flag`}
                  className="w-5 h-5 mx-2"
                />
                {selectedLanguage.name}
              </div>
              <svg
                className={`h-5 w-5 text-gray-400 transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <ul className="py-1">
                  {languages.map((language) => (
                    <li
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className="cursor-pointer flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src={language.flag}
                        alt={`${language.name} Flag`}
                        className="w-5 h-5 mr-2"
                      />
                      {language.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
