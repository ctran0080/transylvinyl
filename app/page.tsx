import Link from "next/link";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks } from "@/data/artworks";

export default function Home() {
  const featured = artworks.filter((a) => a.featured);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-28">
          <video
            src="/videos/logo.mp4"
            poster="/images/logo.png"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="TransylVinyl animated logo"
            className="h-auto w-64 sm:w-80"
          />
          <h1 className="font-display text-4xl text-foreground sm:text-6xl">
            Broken Vinyl. Reborn as Art.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Hand-cut, hand-shattered vinyl records reassembled into pop
            culture, horror, and dark fantasy pieces. Every record was
            headed for the trash — now it&apos;s one-of-a-kind wall art.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dim"
            >
              Shop the Gallery
            </Link>
            <a
              href="https://www.instagram.com/transylvinyl/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl text-foreground">
            Featured Pieces
          </h2>
          <Link
            href="/shop"
            className="text-sm font-medium text-accent hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background-raised">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center">
          <h2 className="font-display text-3xl text-foreground">
            Want Something One-of-a-Kind?
          </h2>
          <p className="max-w-xl text-muted">
            Commissions are open for custom pieces — your favorite film,
            band, or nightmare, cut from real vinyl.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dim"
          >
            Start a Commission
          </Link>
        </div>
      </section>
    </div>
  );
}
