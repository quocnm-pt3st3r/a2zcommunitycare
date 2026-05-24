import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/a2zcommunitycare/',
  plugins: [react()],
  server: { port: 3000 },
});
