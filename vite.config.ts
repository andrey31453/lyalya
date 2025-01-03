import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'

export default defineConfig({
	plugins: [vue(), svgLoader({ svgo: false })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
