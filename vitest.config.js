import { defineConfig } from "vitest/config"
import { fileURLToPath, URL } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
  test: {
    passWithNoTests: true,
  },
})
