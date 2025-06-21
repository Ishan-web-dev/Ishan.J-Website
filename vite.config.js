import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    base: 'Ishan.J-Website', // 🔁 Replace with your GitHub repo name
  plugins: [react(),
    tailwindcss(),
  ],
    server: {
    host: true, // ← This line makes Vite accessible on the local network
  }
})
