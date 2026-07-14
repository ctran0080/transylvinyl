# TransylVinyl

Art from recycled vinyl — pop culture, horror, and dark fantasy pieces cut and reassembled from broken records.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding or updating artwork

All pieces live in one file: [`data/artworks.ts`](data/artworks.ts). To add a piece:

1. Drop a photo into `public/images/artworks/` (square photos work best).
2. Add an entry to the `artworks` array with a unique `id`/`slug`, `title`, `description`, `category`, `price`, and `image` path.
3. Set `status` to `"available"`, `"sold"`, or `"commission-only"`.

**When a piece sells:** change its `status` to `"sold"` and redeploy (or push to git if connected to Vercel — see below). No other cleanup needed.

## Selling pieces (Stripe Buy Buttons)

Each available piece can have its own checkout button, no backend required:

1. In the [Stripe Dashboard](https://dashboard.stripe.com), create a Product for the piece (name, price, photo).
2. Under that product, create a **Buy Button** and copy its Buy Button ID.
3. Paste that ID into the piece's `stripeBuyButtonId` field in `data/artworks.ts`.
4. Set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in your environment (see `.env.local.example`) to your Stripe publishable key.

Until a piece has a `stripeBuyButtonId`, the Shop page shows an "Inquire to Buy" link to the Contact page instead.

## Contact form

The commission form on `/contact` posts to [Formspree](https://formspree.io). Create a free Formspree form and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in your environment (see `.env.local.example`) to your form's endpoint URL.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in real values for local development. On Vercel, set the same variables under Project Settings > Environment Variables.

## Deploying

This app deploys cleanly to [Vercel](https://vercel.com/new):

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the environment variables above.
4. Deploy — you'll get a free `*.vercel.app` URL. A custom domain can be attached later under Project Settings > Domains.
