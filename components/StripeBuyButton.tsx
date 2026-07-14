"use client";

import Script from "next/script";

const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- required shape for JSX IntrinsicElements augmentation
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "buy-button-id": string;
          "publishable-key": string;
        },
        HTMLElement
      >;
    }
  }
}

export default function StripeBuyButton({
  buyButtonId,
}: {
  buyButtonId: string;
}) {
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="lazyOnload" />
      <stripe-buy-button
        buy-button-id={buyButtonId}
        publishable-key={STRIPE_PUBLISHABLE_KEY}
      />
    </>
  );
}
