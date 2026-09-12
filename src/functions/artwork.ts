import { createServerFn } from "@tanstack/react-start";

export const getPublishedArtworks = createServerFn({ method: "GET" }).handler(async () => {
  const { fetchPublishedArtworks } = await import("@/server/artwork.server");
  return fetchPublishedArtworks();
});
