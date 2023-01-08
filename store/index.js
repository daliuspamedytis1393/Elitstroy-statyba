import {
	SET_PROJEKTAI_DATA,
	SET_APIE_MUS_DATA,
	SET_ATSILIEPIMAI_DATA,
	SET_PAGRINDINIS_DATA,
	SET_KONTAKTAI_DATA,
	SET_SEO_DATA,
} from './mutations.type'

export const state = () => ({
	apieMusData: [],
	projektaiData: [],
	atsiliepimaiData: [],
	pagrindinisData: [],
	kontaktaiData: [],
	seoData: []
})

export const mutations = {
	[SET_PROJEKTAI_DATA](state, list) {
		state.projektaiData = list
	},
	[SET_APIE_MUS_DATA](state, list) {
		state.apieMusData = list
	},
    [SET_ATSILIEPIMAI_DATA](state, list) {
		state.atsiliepimaiData = list
	},
	[SET_PAGRINDINIS_DATA](state, list) {
		state.pagrindinisData = list
	},
	[SET_KONTAKTAI_DATA](state, list) {
		state.kontaktaiData = list
	},
	[SET_SEO_DATA](state, list) {
		state.seoData = list
	},
}

export const actions = {
	getPosts(files) {
		return files.keys().map((key) => {
			let res = files(key)
			res.slug = key.slice(2, -5)
			return res
		})
	},
	async nuxtServerInit({ commit }) {
		const projektaiFiles = await require.context(
			'~/assets/content/projektai/',
			false,
			/\.json$/
		)
		await commit(SET_PROJEKTAI_DATA, actions.getPosts(projektaiFiles))

        const apieMusFiles = await require.context(
			'~/assets/content/apie-mus/',
			false,
			/\.json$/
		)
		await commit(SET_APIE_MUS_DATA, actions.getPosts(apieMusFiles))

        const atsiliepimaiFiles = await require.context(
			'~/assets/content/atsiliepimai/',
			false,
			/\.json$/
		)
		await commit(SET_ATSILIEPIMAI_DATA, actions.getPosts(atsiliepimaiFiles))

        const pagrindinisFiles = await require.context(
			'~/assets/content/pagrindinis/',
			false,
			/\.json$/
		)
		await commit(SET_PAGRINDINIS_DATA, actions.getPosts(pagrindinisFiles))

		const kontaktaiFiles = await require.context(
			'~/assets/content/kontaktai/',
			false,
			/\.json$/
		)
		await commit(SET_KONTAKTAI_DATA, actions.getPosts(kontaktaiFiles))

		const seoFiles = await require.context(
			'~/assets/content/seo/',
			false,
			/\.json$/
		)
		await commit(SET_SEO_DATA, actions.getPosts(seoFiles))


		// ? When adding/changing NetlifyCMS collection types, make sure to:
		// ? 1. Add/rename exact slugs here
		// ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
		// ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
		// ? If you are adding, add a state, mutation and commit (like above) for it too
	},
}
