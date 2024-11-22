// lib/queries.js
// lib/queries.js
import { sanityClient } from "./sanity"; // Ensure the client is imported

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
  
  const products = await sanityClient.fetch(query);
  return products;
};

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

  // Pass slug as an object to fetch
  const product = await sanityClient.fetch(query, { slug });
  return product;
};


  
  export const fetchCategories = async () => {
    const query = `*[_type == "category"]{
      _id,
      name,
      slug
    }`
    const categories = await sanityClient.fetch(query)
    return categories
  }
  