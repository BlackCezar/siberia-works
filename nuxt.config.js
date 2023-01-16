export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'siberia-works',
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/scss/Common.scss', '~/assets/scss/__variables.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: '~/plugins/repositoryInjection.js' }],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['nuxt-svg-loader', '@nuxtjs/style-resources', '@nuxtjs/axios'],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	styleResources: {
		scss: ['./assets/scss/*.scss'],
	},
	publicRuntimeConfig: {
		apiKey: process.env.API_KEY ?? '0af496ed887545039aa36ff4619f45c3',
		uri: 'https://newsapi.org/v2',
	},
}
