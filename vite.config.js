import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Ishan.J-Website/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    // port: 5173, np// optional: set port
    // open: true, // optional: auto-open browser
  },
});
