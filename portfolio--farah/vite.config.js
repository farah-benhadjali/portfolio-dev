import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

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