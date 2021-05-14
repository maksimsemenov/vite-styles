import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const rootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		manifest: true,
		rollupOptions: {
			input: {
				main: resolve(rootDir, 'src/main.tsx')
			},
			output: {
				// I use this option to force creation of a chunk
				// with styles. Otherwise, it need to be a very big
				// project, to get a non-entry css chunk
				manualChunks(id) {
					if (
						id.includes('.css') &&
						!id.includes('node_modules') &&
						!id.includes('Patient')
					) {
						return 'styles'
					}
				}
			}
		}
	},
	plugins: [reactRefresh()],
	css: {
		postcss: {
			plugins: [require('autoprefixer')]
		}
	}
})
