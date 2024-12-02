"use client"; // Ensure this is a client-side component

import React from "react";
import ProductCard from "../components/ProductCard";
import { usePathname } from "next/navigation"; // Import useLocale

export default function ProductsList({ products }) {
  const pathname = usePathname(); // Get the current full URL path

  // Extract the locale from the pathname (assuming the structure is /locale/route)
  const locale = pathname.split("/")[1] || "en"; // Default to 'en' if no locale is found

  console.log("Current locale:", locale); // Check the extracted locale

  const groupProductsByCategory = (products) => {
    return products.reduce((acc, product) => {
      // Access the category name based on the current locale
      const categoryName = product.category?.name?.[locale] || "Uncategorized"; // Use locale to access category names

      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }

      acc[categoryName].push(product);
      return acc;
    }, {});
  };

  // Group products by category based on the current locale
  const productsByCategory = groupProductsByCategory(products);

  return (
    <div className="mx-auto gap-2 px-4 lg:px-8 py-8 w-full max-w-7xl">
      {/* Loop through each category and display products */}
      {Object.keys(productsByCategory).map((category) => (
        <div key={category} className="my-32">
          {/* Display the category name based on the current locale */}
          <h3 className="text-4xl font-extrabold text-gray-800 mb-14">{category}</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsByCategory[category].map((product) => (
              <ProductCard key={product._id} product={product} locale={locale} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
