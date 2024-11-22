import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProductCard({ product, locale }) {
  const t = useTranslations('Card');

  // Get the first image URL from the images array or use a fallback image
  const imageUrl = product.images && product.images[0]?.asset?.url
    ? product.images[0].asset.url
    : "https://readymadeui.com/images/coffee1.webp"; // Fallback image if no product images available
  
    // Truncate the product name if it exceeds 30 characters
   const truncatedName = product.name.length > 50 
   ? product.name.slice(0, 50) + "..." 
   : product.name;
  return (
    <Link href={`${locale}/PoductPage/${product.slug.current}`} className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
      <div className="">
        <div className="w-full h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <Image
            src={imageUrl} // Dynamically use the image URL from the product object
            alt={product.name} // Dynamically set the alt text based on the product name
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="text-center bg-gray-100 px-2 py-6">
        <h3 className="text-lg font-bold text-gray-800">{truncatedName}</h3>
        <h4 className="text-lg text-gray-800 font-bold mt-6">
        {product.discountedprice} {t("Unit")} <strike className="text-red-400 ml-2 font-medium">{product.price} {t("Unit")}</strike>
        </h4>
        <button className='w-full flex items-center justify-center font-semibold mt-6 px-6 py-3 bg-yellow-500 text-black rounded-xl hover:bg-black hover:text-white transition ease-in-out duration-300'>
        {t("button")}
        </button>
      </div>
    </Link>
  );
}
