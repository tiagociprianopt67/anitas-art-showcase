import { visionTool } from "@sanity/vision";
import { defineConfig, Studio } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const config = defineConfig({
  basePath: "/studio",
  name: "anita-sketchbook",
  title: "Anita Pereira — Sketchbook",
  projectId: import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.NEXT_PUBLIC_SANITY_DATASET,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});

export function AnitaStudio() {
  return <Studio config={config} />;
}
