import { client } from '../utils/sanityClient';

export async function fetchProjects() {
  const query = `*[_type == "project"]`;
  const projects = await client.fetch(query);
  return projects;
}
