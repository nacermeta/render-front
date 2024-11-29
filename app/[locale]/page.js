// app/page.js
export const revalidate = 0; // Disable ISR for this page

import Hero from "./Sections/Hero";
import Values from "./Sections/Values";
import ProductsList from "./Sections/ProductsList";
import { fetchProducts } from "../../lib/queries";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
      <Hero />
      <Values />
      <ProductsList products={products} />
    </>
  );
}
