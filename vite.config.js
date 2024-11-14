import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/icons-material',
      'swiper',
      'swiper/react'
    ]
  },

  server: {
    hmr: {
      timeout: 30000 // Increase timeout to 30 seconds
    }
  }
});