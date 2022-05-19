import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['~~/styles/tailwind.scss', '~~/styles/global.scss', '~~/styles/root.scss'],
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js'),
		},
	},
	plugins: ['~~/plugins/marquee.ts'],
})
