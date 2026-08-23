import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2026-08-11', // today's date — keep this hard-coded
  useCdn: true, // fast, cached reads for published content
})

export const callQuery = async (datatype: string) => {
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
const builder = createImageUrlBuilder(client)

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source)
}
