import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";
import art7 from "@/assets/art-7.jpg";
import art8 from "@/assets/art-8.jpg";
import art9 from "@/assets/art-9.jpg";
import art10 from "@/assets/art-10.jpg";
import art11 from "@/assets/art-11.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anita Pereira — Abstract Figure Artist" },
      {
        name: "description",
        content:
          "The art collection of Anita Pereira: bold abstract figure paintings, prints and studies.",
      },
      { property: "og:title", content: "Anita Pereira — Abstract Figure Artist" },
      {
        property: "og:description",
        content: "Bold abstract figure paintings, prints and studies by Anita Pereira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Piece = { src: string; title: string; year: string; medium: string };

const hero: Piece[] = [
  { src: art1, title: "Leap", year: "2025", medium: "Screenprint on paper" },
  { src: art2, title: "Twin Bloom", year: "2025", medium: "Acrylic on canvas" },
  { src: art6, title: "Resting Form", year: "2024", medium: "Gouache on board" },
  { src: art4, title: "Long Wave", year: "2024", medium: "Acrylic on canvas" },
];

const featured: Piece[] = [
  { src: art5, title: "Crowd Study", year: "2025", medium: "Screenprint on paper" },
  { src: art7, title: "Two Faces", year: "2025", medium: "Ink on paper" },
  { src: art8, title: "Sprint", year: "2024", medium: "Cut paper collage" },
  { src: art11, title: "Swimmers", year: "2024", medium: "Gouache on board" },
];

const more: Piece[] = [
  { src: art3, title: "Head in Ochre", year: "2025", medium: "Oil on linen" },
  { src: art9, title: "Soft Orbit", year: "2024", medium: "Watercolour" },
  { src: art10, title: "Standing Figure", year: "2023", medium: "Screenprint" },
  { src: art1, title: "Leap II", year: "2025", medium: "Screenprint" },
  { src: art6, title: "Resting Form", year: "2024", medium: "Gouache" },
  { src: art2, title: "Twin Bloom", year: "2025", medium: "Acrylic" },
  { src: art4, title: "Long Wave", year: "2024", medium: "Acrylic" },
  { src: art11, title: "Swimmers II", year: "2024", medium: "Gouache" },
  { src: art7, title: "Two Faces", year: "2025", medium: "Ink" },
  { src: art5, title: "Crowd Study", year: "2025", medium: "Screenprint" },
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
        <p className="label-xs text-muted-ink">studio@anitapereira.art</p>
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
              className="w-[38vw] max-w-[260px] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-3"
              aria-label={`View ${p.title}`}
            >
              <img
                src={p.src}
                alt={`${p.title}, abstract figure artwork by Anita Pereira`}
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <h2 className="display-xl mx-auto mt-[6vw] max-w-[92rem] text-center text-[8.5vw] leading-[0.88] text-muted-ink">
          Painter, printmaker
          <br />& figure abstractionist
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
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={p.src}
                  alt={`${p.title}, abstract figure artwork by Anita Pereira`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
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
              className="overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={p.src}
                alt={`${p.title}, abstract figure artwork by Anita Pereira`}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 text-center">
        <p className="label-xs">Anita Pereira</p>
        <a href="mailto:studio@anitapereira.art" className="label-xs text-muted-ink">
          studio@anitapereira.art
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
            alt={`${active.title}, abstract figure artwork by Anita Pereira`}
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
