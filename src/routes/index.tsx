import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anita Pereira — Mixed Media Artist" },
      {
        name: "description",
        content:
          "The art collection of Anita Pereira: raw, colourful mixed media paintings on canvas.",
      },
      { property: "og:title", content: "Anita Pereira — Mixed Media Artist" },
      {
        property: "og:description",
        content: "Raw, colourful mixed media paintings on canvas by Anita Pereira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Piece = { src: string; title: string; year: string; medium: string };

const hero: Piece[] = [
  { src: "/art/iseeitnow.jpg", title: "I See It Now", year: "2025", medium: "Mixed media on canvas" },
  { src: "/art/theblind.jpg", title: "The Blind Path", year: "2025", medium: "Acrylic & marker on canvas" },
  { src: "/art/letitgo.jpg", title: "Let It Go", year: "2025", medium: "Acrylic & marker on canvas" },
  { src: "/art/dissolve.jpg", title: "Dissolve", year: "2024", medium: "Spray paint & acrylic on canvas" },
];

const featured: Piece[] = [
  { src: "/art/enough.jpg", title: "Enough Is Enough", year: "2025", medium: "Acrylic & posca on canvas" },
  { src: "/art/donttake.jpg", title: "Don't Take", year: "2025", medium: "Acrylic & marker on canvas" },
  { src: "/art/tangerine.jpg", title: "Tangerine", year: "2024", medium: "Mixed media with found objects" },
  { src: "/art/chaos.jpg", title: "Chaos / Love", year: "2024", medium: "Mixed media on canvas" },
];

const more: Piece[] = [
  { src: "/art/collection.jpg", title: "The Collection", year: "2025", medium: "Canvases, studio floor" },
  { src: "/art/letitgo.jpg", title: "Let It Go", year: "2025", medium: "Acrylic & marker" },
  { src: "/art/theblind.jpg", title: "The Blind Path", year: "2025", medium: "Acrylic & marker" },
  { src: "/art/iseeitnow.jpg", title: "I See It Now", year: "2025", medium: "Mixed media" },
  { src: "/art/enough.jpg", title: "Enough Is Enough", year: "2025", medium: "Acrylic & posca" },
  { src: "/art/dissolve.jpg", title: "Dissolve", year: "2024", medium: "Spray paint & acrylic" },
  { src: "/art/tangerine.jpg", title: "Tangerine", year: "2024", medium: "Mixed media" },
  { src: "/art/donttake.jpg", title: "Don't Take", year: "2025", medium: "Acrylic & marker" },
  { src: "/art/chaos.jpg", title: "Chaos / Love", year: "2024", medium: "Mixed media" },
  { src: "/art/freeyourself.jpg", title: "Free Yourself", year: "2025", medium: "Acrylic & marker" },
  { src: "/art/justpassinthru.jpg", title: "Just Passin' Thru", year: "2025", medium: "Acrylic on canvas" },
  { src: "/art/sublime.jpg", title: "Sublime", year: "2025", medium: "Spray paint & marker" },
  { src: "/art/missingsomeone.jpg", title: "Missing Someone", year: "2025", medium: "Mixed media" },
  { src: "/art/dontfearlove.jpg", title: "Don't Fear Love", year: "2025", medium: "Acrylic & marker" },
  { src: "/art/sketchbookpage.jpg", title: "Sketchbook Page", year: "2025", medium: "Marker on paper" },
];

const rotations = ["-8deg", "5deg", "-4deg", "7deg"];

function Index() {
  const [active, setActive] = useState<Piece | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Header */}
      <header className="pt-6 text-center">
        <p className="label-xs">Lisbon, Portugal</p>
        <p className="label-xs text-muted-ink">Anitadom7@gmail.com</p>
      </header>

      {/* Hero */}
      <section className="px-4">
        <h1 className="display-xl mt-10 text-center text-[16vw] leading-[0.82] md:text-[13vw]">
          Anita Pereira
        </h1>

        <div className="relative mx-auto mt-8 flex max-w-4xl items-center justify-center">
          {hero.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              style={{
                transform: `rotate(${rotations[i]})`,
                marginLeft: i === 0 ? 0 : "-3.5vw",
                zIndex: i,
              }}
              className="aspect-square w-[38vw] max-w-[260px] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-3"
              aria-label={`View ${p.title}`}
            >
              <img
                src={p.src}
                alt={`${p.title}, mixed media painting by Anita Pereira`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <h2 className="display-xl mx-auto mt-[6vw] max-w-[92rem] text-center text-[8.5vw] leading-[0.88] text-muted-ink">
          Painter, mark-maker
          <br />& mixed media artist
        </h2>

        <div className="mt-16 text-center">
          <p className="label-xs">Shown at</p>
          <p className="label-xs text-muted-ink">
            Galeria Zé dos Bois, Fundação Arpad, MAAT Open Studio, Print Club Lisboa,
            Sé Contemporary
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto mt-32 max-w-6xl px-4">
        <div className="text-center">
          <p className="label-xs">Featured Work</p>
          <p className="label-xs text-muted-ink">Recent pieces from the collection</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <button key={p.title} onClick={() => setActive(p)} className="group text-left">
              <div className="aspect-square overflow-hidden rounded-[1.75rem]">
                <img
                  src={p.src}
                  alt={`${p.title}, mixed media painting by Anita Pereira`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <p className="label-xs mt-3">{p.title}</p>
              <p className="label-xs text-muted-ink">
                {p.medium} — {p.year}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* More work */}
      <section className="mx-auto mt-32 max-w-6xl px-4 pb-32">
        <div className="text-center">
          <p className="label-xs">The Collection</p>
          <p className="label-xs text-muted-ink">Take a scroll, stay a while</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {more.map((p, i) => (
            <button
              key={`${p.title}-${i}`}
              onClick={() => setActive(p)}
              className="aspect-square overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={p.src}
                alt={`${p.title}, mixed media painting by Anita Pereira`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 text-center">
        <p className="label-xs">Anita Pereira</p>
        <a href="mailto:Anitadom7@gmail.com" className="label-xs text-muted-ink">
          Anitadom7@gmail.com
        </a>
      </footer>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background/95 p-6"
        >
          <img
            src={active.src}
            alt={`${active.title}, mixed media painting by Anita Pereira`}
            className="max-h-[75vh] w-auto rounded-2xl"
          />
          <div className="text-center">
            <p className="label-xs">{active.title}</p>
            <p className="label-xs text-muted-ink">
              {active.medium} — {active.year}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
