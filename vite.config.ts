import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import type { ServerResponse } from 'http';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/assets': resolve(__dirname, './src/assets'),
      '@/contexts': resolve(__dirname, './src/contexts'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/lib': resolve(__dirname, './src/lib'),
      '@/config': resolve(__dirname, './src/config'),
      '@/services': resolve(__dirname, './src/services'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8087,
    proxy: {
      '/api': {
        // Use environment variable for proxy target, fallback to localhost for development
        target: process.env.VITE_PROXY_TARGET || 'http://localhost:9099',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/biomindz'),
        secure: false, // Set to false for local development with HTTP
        // Better error handling
        configure: (proxy, _options) => {
          proxy.on('error', (err, req, res) => {
            console.error('❌ Vite Proxy Error:', err.message);
            const nodeError = err as NodeJS.ErrnoException;
            if (nodeError.code === 'ECONNREFUSED') {
              console.error('⚠️  Backend server is not running!');
              console.error('   Please start the backend server:');
              console.error('   cd "Biomindz/Biomindz_Backend" && npm run dev');
              console.error(`   Expected backend URL: ${process.env.VITE_PROXY_TARGET || 'http://localhost:9099'}`);
            }
            // Type guard: check if res is a ServerResponse before accessing headersSent
            if (res && typeof res === 'object' && 'headersSent' in res && !res.headersSent) {
              (res as ServerResponse).writeHead(503, {
                'Content-Type': 'application/json',
              });
              (res as ServerResponse).end(JSON.stringify({
                error: 'Service Unavailable',
                message: 'Backend server is not running. Please start it with: npm run dev (in Biomindz_Backend)',
                code: nodeError.code,
              }));
            }
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log(`[Proxy] ${req.method} ${req.url} -> ${proxyReq.path}`);
          });
        },
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
