import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure environment is aware we're building in CI (helps avoid native Rollup)
process.env.ROLLUP_WATCH = 'true'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optional: helps some environments avoid native rollup binaries
    rollupOptions: {
      // force no external native dependencies
      external: [],
    },
  },
})
