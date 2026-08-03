import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: '/fieldtrip0808/',
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: '../',
    emptyOutDir: false,
  }
})
