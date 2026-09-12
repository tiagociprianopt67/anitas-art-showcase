export type Artwork = {
  id: string;
  src: string;
  alt: string;
  title: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  description?: string;
  availability?: "available" | "sold" | "notForSale";
  price?: string;
  featured?: boolean;
};
