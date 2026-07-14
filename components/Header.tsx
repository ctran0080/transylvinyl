import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="TransylVinyl logo"
            width={44}
            height={37}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden font-display text-2xl tracking-wide text-foreground sm:inline">
            TransylVinyl
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
