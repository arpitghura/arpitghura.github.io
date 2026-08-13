import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2026-08-11', // today's date — keep this hard-coded
  useCdn: true, // fast, cached reads for published content
})

export const callQuery = async (datatype) => {
  try {
    const response = await client.fetch(`*[_type == "${datatype}"]`);
    return response;
  }
  catch (err) {
    console.log(err);
    return null;
  }
}

// Helper: build optimised image URLs from Sanity image assets
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
