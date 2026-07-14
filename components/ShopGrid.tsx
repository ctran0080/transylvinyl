"use client";

import { useMemo, useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks, categories, type ArtworkCategory } from "@/data/artworks";

type Filter = "All" | ArtworkCategory;

export default function ShopGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? artworks
        : artworks.filter((artwork) => artwork.category === filter),
    [filter],
  );

  const filters: Filter[] = ["All", ...categories];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? "border-accent bg-accent text-background"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted">No pieces in this category yet — check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
}
