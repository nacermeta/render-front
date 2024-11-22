// lib/sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'bkjhnpbl',  // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your Sanity dataset (usually "production")
  apiVersion: '2024-11-11',      // Use the current date for API versioning
  useCdn: false, // Disable CDN temporarily
})
// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient)

// Helper function to get the image URL
export const urlFor = (source) => builder.image(source).url()