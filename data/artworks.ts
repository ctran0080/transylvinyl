export type ArtworkCategory = "Pop Culture" | "Horror" | "Dark Fantasy";

export type ArtworkStatus = "available" | "sold" | "commission-only";

export type Artwork = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ArtworkCategory;
  price: number | null;
  status: ArtworkStatus;
  image: string;
  /**
   * ID from a Stripe "Buy Button" created in the Stripe Dashboard
   * (Products > select product > Buy button). Leave null until the
   * piece is listed for sale.
   */
  stripeBuyButtonId: string | null;
  featured?: boolean;
};

/**
 * Placeholder catalog. Replace `image` paths with real photos in
 * public/images/artworks/, and fill in `stripeBuyButtonId` once a
 * Stripe product + Buy Button exist for a piece. Flip `status` to
 * "sold" the moment a piece sells.
 */
export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "shattered-count",
    title: "Shattered Count",
    description:
      "Broken vinyl shards reassembled into a gothic silhouette, edged in hand-painted crimson.",
    category: "Horror",
    price: 180,
    status: "available",
    image: "/images/artworks/placeholder-1.svg",
    stripeBuyButtonId: null,
    featured: true,
  },
  {
    id: "2",
    slug: "arcane-fracture",
    title: "Arcane Fracture",
    description:
      "A dark fantasy sigil built from layered record fragments with glow-in-the-dark accents.",
    category: "Dark Fantasy",
    price: 220,
    status: "available",
    image: "/images/artworks/placeholder-2.svg",
    stripeBuyButtonId: null,
    featured: true,
  },
  {
    id: "3",
    slug: "static-icon",
    title: "Static Icon",
    description:
      "A pop-culture portrait cut from cracked 12-inch shards, mounted on reclaimed wood.",
    category: "Pop Culture",
    price: 150,
    status: "sold",
    image: "/images/artworks/placeholder-3.svg",
    stripeBuyButtonId: null,
    featured: true,
  },
  {
    id: "4",
    slug: "midnight-hollow",
    title: "Midnight Hollow",
    description:
      "A bat-winged relief carved from a single record, scorched and detailed by hand.",
    category: "Horror",
    price: null,
    status: "commission-only",
    image: "/images/artworks/placeholder-4.svg",
    stripeBuyButtonId: null,
  },
  {
    id: "5",
    slug: "coven-record",
    title: "Coven Record",
    description:
      "Three vinyl fragments arranged into a triptych moon, edged in emerald leaf.",
    category: "Dark Fantasy",
    price: 195,
    status: "available",
    image: "/images/artworks/placeholder-5.svg",
    stripeBuyButtonId: null,
  },
  {
    id: "6",
    slug: "b-movie-relic",
    title: "B-Movie Relic",
    description:
      "A grindhouse-inspired piece built from shattered 7-inch singles and salvaged sleeves.",
    category: "Pop Culture",
    price: 140,
    status: "available",
    image: "/images/artworks/placeholder-6.svg",
    stripeBuyButtonId: null,
  },
];

export const categories: ArtworkCategory[] = [
  "Pop Culture",
  "Horror",
  "Dark Fantasy",
];
