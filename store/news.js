export const state = () => ({
	news: [],
	city: '',
	total: 0,
})

export const getters = {
	news(state) {
		return state.news
	},
}
export const mutations = {
	setTotal(state, total) {
		state.total = total
	},
	setNews(state, list) {
		state.news = list
	},
	setCity(state, city) {
		state.city = city
	},
}

export const actions = {
	fetchNews({ commit }) {
		this.$repositories.news.listHeadlines().then(result => {
			commit('setTotal', result.totalResults)
			commit('setNews', result.articles)
		}).catch(err => console.error(err))
	},
}
