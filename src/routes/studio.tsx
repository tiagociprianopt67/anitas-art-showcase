import { createFileRoute } from "@tanstack/react-router";
import { type ComponentType, useEffect, useState } from "react";

const StudioScreen = () => {
  const [Studio, setStudio] = useState<ComponentType | null>(null);

  useEffect(() => {
    let isMounted = true;

    void import("@/sanity/studio").then(({ AnitaStudio }) => {
      if (isMounted) setStudio(() => AnitaStudio);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!Studio) {
    return <main className="grid min-h-screen place-items-center bg-background p-6 text-center text-sm text-muted-ink">Loading Anita’s private studio…</main>;
  }

  return <Studio />;
};

export const Route = createFileRoute("/studio")({
  head: () => ({ meta: [{ title: "Anita Pereira — Private Studio" }] }),
  component: StudioScreen,
});
