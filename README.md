# Anita's Art Showcase

A portfolio site for Anita Pereira — mixed media painter based in Lisbon, Portugal.

Built with [TanStack Start](https://tanstack.com/start), [Vite](https://vite.dev), and
[Tailwind CSS](https://tailwindcss.com). Deployed on [Vercel](https://vercel.com).

## Development

Requires Node.js.

```sh
npm install
npm run dev
```

## Adding a piece

Drop the image in `public/art/`, then add an entry to the `hero`, `featured`, or `more`
array in `src/routes/index.tsx` pointing at `/art/<filename>`.

## Build

```sh
npm run build
```
