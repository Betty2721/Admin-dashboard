import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Added optimizeDeps and ssr.noExternal to avoid Vercel/Vite Rollup externalization warnings
// for some dependencies (e.g. recharts or other ESM packages) during the build.
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // ensure these packages are pre-bundled by Vite during dev/build
    include: [
      'recharts',
      'd3-scale',
      'd3-shape',
      'd3-array'
    ]
  },
  ssr: {
    // prevent Vite from externalizing these during SSR/build on platforms like Vercel
    noExternal: [
      'recharts',
      'd3-scale',
      'd3-shape',
      'd3-array'
    ]
  }
})
