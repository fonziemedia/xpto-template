/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const isVitest = !!process.env.VITEST;

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    viteReact(),
    tailwindcss(),
    ...((!isVitest && [devtools(), tanstackStart(), nitro()]) || [])
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts"
  }
});

export default config;
