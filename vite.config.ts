import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        project: './src/project/index.html'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'project' ? 'project/[name]-[hash].js' : '[name]-[hash].js'
        },
        chunkFileNames: (chunkInfo) => {
          return chunkInfo.name === 'project' ? 'project/[name]-[hash].js' : '[name]-[hash].js'
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name?.includes('project') ? 'project/[name]-[hash].[ext]' : '[name]-[hash].[ext]'
        }
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
