import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-raised">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} TransylVinyl. All pieces one-of-a-kind.</p>
        <div className="flex items-center gap-5">
          <Link href="/contact" className="transition-colors hover:text-accent">
            Commission Inquiries
          </Link>
          <a
            href="https://www.instagram.com/transylvinyl/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
