import { defineField, defineType } from "sanity";

export const artwork = defineType({
  name: "artwork",
  title: "Artwork",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Artwork image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Image description", type: "string" }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "medium", title: "Medium", type: "string" }),
    defineField({ name: "dimensions", title: "Dimensions", type: "string" }),
    defineField({ name: "description", title: "Story / notes", type: "text", rows: 4 }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      initialValue: "available",
      options: {
        layout: "radio",
        list: [
          { title: "Available", value: "available" },
          { title: "Sold", value: "sold" },
          { title: "Not for sale", value: "notForSale" },
        ],
      },
    }),
    defineField({ name: "price", title: "Price (optional)", type: "string" }),
    defineField({ name: "featured", title: "Show in Featured Work", type: "boolean", initialValue: false }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      description: "Lower numbers appear first. Leave blank to use newest first.",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "year" },
  },
});
