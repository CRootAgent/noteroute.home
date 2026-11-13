import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

function syncGitHubPagesPlugin() {
  return {
    name: 'sync-gh-pages',
    buildStart() {
      if (fs.existsSync('index.html.template')) {
        fs.copyFileSync('index.html.template', 'index.html');
      }
    },
    closeBundle() {
      if (fs.existsSync('dist/index.html')) {
        fs.copyFileSync('dist/index.html', 'index.html');
      }
      if (fs.existsSync('dist/assets')) {
        fs.cpSync('dist/assets', 'assets', { recursive: true });
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), syncGitHubPagesPlugin()],
  base: './',
  server: {
    port: 8080,
    open: false
  }
});
