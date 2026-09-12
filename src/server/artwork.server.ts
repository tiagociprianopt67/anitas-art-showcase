import { createClient } from "@sanity/client";
import type { Artwork } from "@/lib/artwork";

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: "2026-09-12",
  perspective: "published",
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
});

const ARTWORK_QUERY = `*[_type == "artwork" && defined(mainImage.asset)] | order(featured desc, displayOrder asc, _createdAt desc) {
  "id": _id,
  "src": mainImage.asset->url,
  "alt": coalesce(mainImage.alt, title),
  title,
  year,
  medium,
  dimensions,
  description,
  availability,
  price,
  featured
}`;

export async function fetchPublishedArtworks() {
  if (!process.env.SANITY_API_PROJECT_ID || !process.env.SANITY_API_DATASET) {
    return [] as Artwork[];
  }

  return client.fetch<Artwork[]>(ARTWORK_QUERY);
}
