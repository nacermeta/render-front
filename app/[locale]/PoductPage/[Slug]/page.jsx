"use client";

import { usePathname } from "next/navigation";
import { fetchProduct } from "../../../../lib/queries";
import PortableTextComponent from "../../components/PortableText";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdWhatsapp } from "react-icons/md";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import arrow icons
import { useTranslations } from "next-intl";

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [slug, setSlug] = useState("");
  const pathname = usePathname();

  const t = useTranslations("ProductPage");

  // This effect runs only on the client-side
  useEffect(() => {
    if (pathname) {
      const slugFromPath = pathname.split("/").pop();
      setSlug(slugFromPath);
    }
  }, [pathname]);

  // Fetch product data whenever `slug` changes
  useEffect(() => {
    const fetchProductData = async () => {
      if (slug) {
        const fetchedProduct = await fetchProduct(slug);
        setProduct(fetchedProduct);
      }
    };
    fetchProductData();
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  const images = product.images.map((image) => image.asset.url);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Extract locale from pathname (e.g., "/en/products" or "/ar/products")
  const locale = pathname.split("/")[1] || "en"; // Default to "en" if no locale is found

  // Get the correct description based on the current locale
  const productDescription = 
  product?.description?.[locale] 
  || product?.description?.["en"] 
  || "Default description";

  return (
    <div className="p-4 tracking-wide max-lg:max-w-2xl mx-auto mb-40">
      <ul className="flex items-center justify-center space-x-5 my-4">
        <li className="text-gray-800 bg-gray-100 px-4 py-2 rounded rounded-tr-none rounded-br-none text-sm cursor-pointer flex items-center relative before:absolute before:bg-gray-100 before:h-[25px] before:w-[25px] before:right-[-12px] before:rotate-[45deg] before:z-[-1]">
          {t("breadcrumbs.home")}
        </li>
        <li className="text-white bg-blue-500 px-4 py-2 rounded rounded-tr-none rounded-br-none text-sm font-semibold cursor-pointer flex items-center relative before:absolute before:bg-blue-500 before:h-[25px] before:w-[25px] before:right-[-12px] before:rotate-[45deg] before:z-[-1]">
          {t("breadcrumbs.edit")}
        </li>
      </ul>
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4 text-center lg:sticky top-8">
          <div className="lg:col-span-3 text-center relative">
            <div className="lg:h-[550px] relative before:absolute before:inset-0 before:rounded">
              <img
                src={images[currentImageIndex]}
                alt="Product"
                className="w-full h-full rounded object-contain object-top"
              />
              <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white"
              >
                <FiChevronLeft size={40} className="text-black" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white"
              >
                <FiChevronRight size={40} className="text-black" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mx-auto mt-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded ${
                    index === currentImageIndex ? "border-2 border-yellow-400" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product${index + 1}`}
                    className="w-20 h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div>
            <h2 className="lg:text-2xl font-extrabold text-gray-800">{product.name}</h2>
          </div>

          <div className="mt-4">
            <h4 className="text-3xl text-gray-800 font-bold mt-6">
              {t("purchaseOptions.Unit")} {product.discountedprice}
              <strike className="text-red-400 ml-2 font-medium">
                {t("purchaseOptions.Unit")} {product.price}
              </strike>
            </h4>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <Link
              href="https://wa.me/+213553185497"
              target="_blank"
              type="button"
              className="flex flex-row items-center justify-center gap-2 min-w-[200px] px-4 py-3 bg-[#25d366] hover:bg-black text-white text-sm font-semibold rounded-lg transition ease-in-out duration-300"
            >
              {t("purchaseOptions.whatsapp")}
              <MdWhatsapp size={25} />
            </Link>
          </div>

          <div className="mt-8">
            <ul className="flex border-b">
              <li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-yellow-400 cursor-pointer transition-all">
                {t("description.tabTitle")}
              </li>
            </ul>

            <div className="mt-8">
              {/* Dynamically render the correct product description */}
              <PortableTextComponent value={productDescription} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
