export class NewsRepository {
	constructor($http, sourceUrl, apiKey) {
		this.$http = $http
		this.sourceUrl = sourceUrl
		this.apiKey = apiKey
	}

	async listHeadlines() {
		const list = await this.$http.$get(this.sourceUrl + '/top-headlines', {
			params: {
				country: 'ru',
				apiKey: this.apiKey,
			},
		})
		return list
	}
}
