import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,        // ❌ pas de map en prod (plus rapide + sécurisé)
    minify: "esbuild",       // ⚡ rapide build
    chunkSizeWarningLimit: 1000
  },

  server: {
    port: 3000,
    open: true,

    //IMPORTANT pour auto-refresh fiable
    watch: {
      usePolling: true,
    },

    //améliore le HMR
    hmr: {
      overlay: true
    }
  }
})