import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop | TransylVinyl",
  description:
    "Browse one-of-a-kind art made from recycled vinyl records — pop culture, horror, and dark fantasy pieces.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl text-foreground">The Gallery</h1>
        <p className="mt-3 text-muted">
          Every piece below is cut and reassembled from a real, broken vinyl
          record. Once it&apos;s sold, it&apos;s gone for good — no reprints,
          no editions.
        </p>
      </div>
      <ShopGrid />
    </div>
  );
}
