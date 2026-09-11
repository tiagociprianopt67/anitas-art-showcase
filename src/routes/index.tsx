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

const marqueeRowOne = more.filter((_, i) => i % 2 === 0);
const marqueeRowTwo = more.filter((_, i) => i % 2 === 1);

const TILT_CLASSES = ["card-tilt-1", "card-tilt-2", "card-tilt-3", "card-tilt-4"];
const tiltClass = (i: number) => TILT_CLASSES[i % TILT_CLASSES.length];

function Index() {
  const [active, setActive] = useState<Piece | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden text-foreground">
      {/* Header */}
      <header className="pt-6 text-center">
        <p className="label-xs">Lisbon, Portugal</p>
        <a
          href="mailto:Anitadom7@gmail.com"
          className="label-xs text-muted-ink transition-colors hover:text-ink-accent"
        >
          Anitadom7@gmail.com
        </a>
      </header>

      {/* Hero */}
      <section className="px-4">
        <div className="mt-10 text-center">
          <div
            className="mx-auto mb-3 flex w-full max-w-[92rem] items-end px-2 md:mb-5 md:px-8"
            aria-hidden="true"
          >
            <svg
              className="skull-hero"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M32 6 C17 6 9 16 9 28 C9 36 13 41 17 45 L17 53 L26 53 L26 47 L30 47 L30 53 L38 53 L38 47 L42 47 L42 53 L47 53 L47 45 C51 41 55 36 55 28 C55 16 47 6 32 6 Z"
                fill="var(--color-background)"
                stroke="var(--color-foreground)"
                strokeWidth="3.2"
                strokeLinejoin="round"
              />
              <circle cx="23" cy="27" r="5" fill="var(--color-foreground)" />
              <circle cx="41" cy="27" r="5" fill="var(--color-foreground)" />
              <path
                d="M30 32 L28 39 L36 39 L34 32"
                stroke="var(--color-foreground)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="display-xl mx-auto max-w-[92rem] text-[16vw] leading-[0.98] md:text-[13vw] md:leading-[0.82]">
            <span className="hero-first-name">Anita</span>{" "}
            <span className="hero-last-name">
              Pereir
              <span className="crowned-final-a">
                a
                <svg
                  className="crown-final-a"
                  viewBox="0 0 90 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8 46 L6 20 L24 34 L34 10 L45 30 L56 10 L66 34 L84 20 L82 46 Z"
                    fill="var(--color-background)"
                    stroke="var(--color-foreground)"
                    strokeWidth="5"
                    strokeLinejoin="round"
                  />
                  <circle cx="34" cy="10" r="5" fill="var(--color-ink-accent)" />
                  <circle cx="56" cy="10" r="5" fill="var(--color-ink-accent)" />
                  <line
                    x1="10"
                    y1="46"
                    x2="80"
                    y2="46"
                    stroke="var(--color-foreground)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>
        </div>

        <div className="-mx-4 mt-8 space-y-3 overflow-hidden py-6">
          <div className="flex w-max animate-marquee gap-3">
            {[...marqueeRowOne, ...marqueeRowOne].map((p, i) => (
              <button
                key={`${p.title}-${i}`}
                onClick={() => setActive(p)}
                className="aspect-square w-[38vw] shrink-0 overflow-hidden rounded-[1.5rem] transition-transform duration-300 hover:-translate-y-3 sm:w-[180px]"
                aria-label={`View ${p.title}`}
              >
                <img
                  src={p.src}
                  alt={`${p.title}, mixed media painting by Anita Pereira`}
                  loading={i < marqueeRowOne.length ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex w-max animate-marquee gap-3" style={{ animationDuration: "78s" }}>
            {[...marqueeRowTwo, ...marqueeRowTwo].map((p, i) => (
              <button
                key={`${p.title}-${i}`}
                onClick={() => setActive(p)}
                className="aspect-square w-[38vw] shrink-0 overflow-hidden rounded-[1.5rem] transition-transform duration-300 hover:-translate-y-3 sm:w-[180px]"
                aria-label={`View ${p.title}`}
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
        </div>

        <h2 className="display-xl mx-auto mt-[6vw] max-w-[92rem] text-center text-[8.5vw] leading-[0.88] text-muted-ink">
          My sketchbook,
          <br />made public
        </h2>
      </section>

      {/* Featured */}
      <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-32">
        <div className="text-center">
          <p className="label-xs">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-ink-accent align-middle" />
            Featured Work
          </p>
          <p className="label-xs text-muted-ink">Recent pieces from the collection</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className={`group text-left ${i % 2 === 0 ? "tape" : "tape-alt"} ${tiltClass(i)}`}
            >
              <div className="aspect-square overflow-hidden rounded-[1.75rem]">
                <img
                  src={p.src}
                  alt={`${p.title}, mixed media painting by Anita Pereira`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <p className="label-xs mt-3 transition-colors group-hover:text-ink-accent">{p.title}</p>
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
          <p className="label-xs">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-ink-accent align-middle" />
            The Collection
          </p>
          <p className="label-xs text-muted-ink">Take a scroll, stay a while</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {more.map((p, i) => (
            <button
              key={`${p.title}-${i}`}
              onClick={() => setActive(p)}
              className={`group ${i % 2 === 0 ? "tape" : "tape-alt"} ${tiltClass(i)}`}
            >
              <div className="aspect-square overflow-hidden rounded-2xl ring-0 ring-ink-accent transition-shadow duration-300 group-hover:ring-[3px]">
                <img
                  src={p.src}
                  alt={`${p.title}, mixed media painting by Anita Pereira`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 text-center">
        <p className="label-xs">Anita Pereira</p>
        <a
          href="mailto:Anitadom7@gmail.com"
          className="label-xs text-muted-ink transition-colors hover:text-ink-accent"
        >
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
