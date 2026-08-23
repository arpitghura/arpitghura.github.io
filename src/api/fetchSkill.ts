import { client } from '../utils/sanityClient';

export async function fetchSkill() {
  const query = `*[_type == "skillcategory" && !isHidden] | order(order asc)`;
  const skills = await client.fetch(query);
  return skills;
}
