import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss({config: './tailwind.config.js'})],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f4f4fb',
					100: '#e4e4f6',
					200: '#cdcdee',
					300: '#ababe3',
					400: '#8585d6',
					500: '#6666cc',
					600: '#4b4bc3',
					700: '#3d3db8',
					800: '#333399',
					900: '#2a2a7e',
					950: '#1b1b50'
				},
				gray: {
					50: '#fafafa',
					100: '#f4f4f5',
					200: '#e4e4e7',
					300: '#d4d4d8',
					400: '#a1a1aa',
					500: '#6f6f7b',
					600: '#52525b',
					700: '#3f3f46',
					800: '#27272b',
					900: '#18181b',
					925: '#131315',
					950: '#0a0a0b'
				}
			}
		}
	}
})