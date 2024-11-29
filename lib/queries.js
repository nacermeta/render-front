// lib/queries.js
import { sanityClient } from "./sanity"; // Ensure the client is imported

// Fetch products with cache disabled
export const fetchProducts = async () => {
  const query = `*[_type == 'product']{
    _id,
    name,
    slug,
    price,
    discountedprice,
    description,
    category->{name, slug},
    images[] {
      asset -> {
          url
      }
    }
  }`;
  
  const products = await sanityClient.fetch(query, { next: { revalidate: 0 } }); // Disable cache
  return products;
};

// Fetch a single product with cache disabled
export const fetchProduct = async (slug) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    price,
    discountedprice,
    description,
    category->{name, slug},
    images[] {
      asset -> {
          url
      }
    }
  }`;

  const product = await sanityClient.fetch(query, { slug, next: { revalidate: 0 } }); // Disable cache
  return product;
};

// Fetch categories with cache disabled
export const fetchCategories = async () => {
  const query = `*[_type == "category"]{
    _id,
    name,
    slug
  }`;
  const categories = await sanityClient.fetch(query, { next: { revalidate: 0 } }); // Disable cache
  return categories;
};
