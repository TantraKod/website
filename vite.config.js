import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Generate source maps for debugging (exclude in ultra-prod if needed)
    sourcemap: false,
    // Increase chunk warning limit slightly for framer-motion
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Code-split vendor libraries for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
  // Ensure assets resolve correctly for SPA
  base: '/',
});
