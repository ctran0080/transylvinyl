import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/data/artworks";
import StripeBuyButton from "@/components/StripeBuyButton";

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background-raised">
      <div className="relative aspect-square overflow-hidden vinyl-texture">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {artwork.status === "sold" && (
          <span className="absolute right-3 top-3 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
            Sold
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent">
          {artwork.category}
        </span>
        <h3 className="font-display text-xl text-foreground">{artwork.title}</h3>
        <p className="flex-1 text-sm text-muted">{artwork.description}</p>

        {artwork.status === "available" && (
          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="text-lg font-semibold text-foreground">
              ${artwork.price}
            </span>
            {artwork.stripeBuyButtonId ? (
              <StripeBuyButton buyButtonId={artwork.stripeBuyButtonId} />
            ) : (
              <Link
                href="/contact"
                className="rounded-full border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
              >
                Inquire to Buy
              </Link>
            )}
          </div>
        )}

        {artwork.status === "sold" && (
          <div className="mt-2 text-sm text-muted">This piece has found a home.</div>
        )}

        {artwork.status === "commission-only" && (
          <div className="mt-2">
            <Link
              href="/contact"
              className="rounded-full border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Request a Commission
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
