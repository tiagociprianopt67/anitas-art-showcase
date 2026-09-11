import { defineConfig, loadEnv } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { devtools } from "@tanstack/devtools-vite";
import type { PluginOption } from "vite";

// Standard TanStack Start + Vite config (no external build-tool dependency).
export default defineConfig(async ({ command, mode }) => {
  const plugins: PluginOption[] = [];

  if (mode === "development") {
    plugins.push(
      devtools({
        logging: false,
        eventBusConfig: { enabled: false },
        enhancedLogs: { enabled: false },
        consolePiping: { enabled: false },
        removeDevtoolsOnBuild: false,
        injectSource: { enabled: true },
      }),
    );
  }

  plugins.push(tailwindcss());
  plugins.push(tsConfigPaths({ projects: ["./tsconfig.json"] }));

  plugins.push(
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
      server: { entry: "server" },
    }),
  );

  // Nitro auto-detects the deploy target (e.g. Vercel) at build time; this preset
  // is only the fallback used when no platform is detected.
  if (command === "build") {
    plugins.push(nitro({ defaultPreset: "cloudflare-module" }));
  }

  plugins.push(viteReact());

  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  const define: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadedEnv)) {
    define[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return {
    define,
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-dom/client", "react/jsx-runtime", "react/jsx-dev-runtime"],
      ignoreOutdatedRequests: true,
    },
    server: {
      host: "::",
      port: 8080,
      watch: { awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 100 } },
    },
    plugins,
  };
});
