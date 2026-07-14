import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | TransylVinyl",
  description: "Get in touch about commissions or piece inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-display text-4xl text-foreground">Get in Touch</h1>
      <p className="mt-3 text-muted">
        Interested in a piece, or want to commission something custom? Send a
        message and I&apos;ll get back to you.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
