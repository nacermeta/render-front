import Image from "next/image";
import React from "react";
import HeroImage from "../../../public/pngwing.com.png";
import { useTranslations } from "next-intl";

function hero() {
  const t = useTranslations('HomePage');
  return (
    <div className="bg-blue-500 md:max-h-[650px] pt-16 px-4 lg:px-8 flex flex-col md:flex-row z-0">
      <div className="flex flex-col items-center md:items-start md:justify-center text-center md:text-start w-full h-auto">
        <h1 className="font-sans font-bold text-3xl lg:text-6xl pt-16 md:pt-0 text-white">
          {t("header")}
        </h1>
        <p className="font-sans font-medium text-xl pt-2 text-white">
        {t("para")}
        </p>
      </div>
      <Image
        src={HeroImage}
        width={0}
        height={0}
        alt="HeroImage"
        className="w-full md:w-1/2 mx-auto h-auto"
      />
    </div>
  );
}

export default hero;