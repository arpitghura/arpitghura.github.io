import { client } from '../utils/sanityClient';

export async function fetchExperience() {
  const query = `*[_type == "experience"] | order(startDate desc)`;
  const experiences = await client.fetch(query);
  return experiences;
}
