import { client } from '../utils/sanityClient';

export async function fetchAbout() {
  const query = `*[_type == "summary"][0]`;
  const summary = await client.fetch(query);
  return summary;
}
