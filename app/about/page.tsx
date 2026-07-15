import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | TransylVinyl",
  description:
    "The story and process behind TransylVinyl — art made from broken, recycled vinyl records.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
        <Image
          src="/images/colton-tran.jpg"
          alt="Colton Tran, the artist behind TransylVinyl"
          width={200}
          height={240}
          className="h-40 w-32 rounded-lg object-cover sm:h-48 sm:w-40"
          priority
        />
        <h1 className="font-display text-4xl text-foreground">
          Meet the artist: Colton Tran
        </h1>
      </div>

      <div className="mt-8 space-y-6 text-muted">
        <p>
          {/* Placeholder bio copy — replace with your own story. */}
          TransylVinyl started with a simple idea: records that are too
          scratched, cracked, or warped to ever play again don&apos;t have to
          end up in a landfill. Every piece here begins as a real vinyl
          record that&apos;s been broken down, hand-cut, and reassembled into
          something new — portraits, sigils, and scenes pulled from pop
          culture, horror, and dark fantasy.
        </p>
        <p>
          Nothing is printed or mass-produced. Each record shatters
          differently, so every piece is one-of-a-kind — once it&apos;s
          built and sold, it can&apos;t be recreated exactly the same way
          again.
        </p>
        <p>
          Have a favorite film, band, or nightmare you want turned into
          wall art? Commissions are open.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dim"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
