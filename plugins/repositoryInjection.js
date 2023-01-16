import { NewsRepository } from '~/repositories/news'

export default (ctx, inject) => {
	const config = ctx.app.$config
	const newsRepository = new NewsRepository(
		ctx.app.$axios,
		config.uri,
		config.apiKey
	)

	const repositories = {
		news: newsRepository,
	}
	inject('repositories', repositories)
}
