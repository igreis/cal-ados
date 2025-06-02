import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Adicione o nome do seu repositório GitHub
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
