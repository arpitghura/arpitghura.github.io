import { client } from '../utils/sanityClient';

export async function fetchEducation() {
  const query = `*[_type == "education"] | order(startDate desc)`;
  const education = await client.fetch(query);
  return education;
}
