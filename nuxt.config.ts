import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
	directus: {
		url: "https://bwu92czx.directus.app",
	}
});
