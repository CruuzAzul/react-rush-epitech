import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	resolve: {
		alias: [
			{
				find: '@font',
				replacement: path.resolve(__dirname, './src/assets/fonts'),
			},
			{
				find: '@sass',
				replacement: path.resolve(__dirname, './src/assets/sass'),
			},
			{
				find: '@image',
				replacement: path.resolve(__dirname, './src/assets/images'),
			},
			{
				find: '@component',
				replacement: path.resolve(__dirname, './src/components'),
			},
			{
				find: '@lib',
				replacement: path.resolve(__dirname, './src/lib'),
			},
		],
	},
});
