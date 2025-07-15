import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ssr } from 'vite-plugin-ssr/plugin';

export default defineConfig({
  plugins: [react(), ssr({ prerender: true })],
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
