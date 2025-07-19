import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // Put all generated assets at the root of the dist folder so
    // GitHub Gist (which flattens directories for filenames) can
    // serve them without missing paths.
    assetsDir: '',
  },
}); 