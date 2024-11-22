import Image from "next/image";
import Hero from "./Sections/Hero"
import Values from "./Sections/Values"
import ProductsList from "./Sections/ProductsList";
import { fetchProducts } from "../../lib/queries";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
    <Hero/>
    <Values />
    <ProductsList products={products} />
    </>
  );
}