import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babel from 'vite-plugin-babel';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],[
    react(),
    babel({
      babelConfig: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }),
  ],
})
