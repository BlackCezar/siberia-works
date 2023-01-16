<template>
	<div class="content">
		<div class="page-header">
			<h1>Новости</h1>
			<NewsCityDropDown city />
		</div>
		<main>
			<NewsList :list="mappedNews" />
		</main>
		<aside>
			<NewsAsideAds />
		</aside>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'IndexPage',
	data() {
		return {
			city: 'Выбрать город',
		}
	},
	head: {
		title: 'Новости',
		meta: [
			{
				breadcrumbs: [
					{
						name: 'Главная',
						link: '/',
					},
					{
						name: 'Новости',
						link: '/',
					},
				],
			},
		],
	},
	computed: {
		...mapGetters({
			news: 'news/news',
		}),
		mappedNews() {
			const map = new Map()

			if (this.news && this.news.length) {
				this.news.forEach((news) => {
					const date = new Date(news.publishedAt).toLocaleDateString()

					if (map.has(date)) {
						map.get(date).push(news)
					} else {
						map.set(date, [news])
					}
				})
			}
			return map
		},
	},
	mounted() {
		this.fetchNews()
	},
	methods: {
		...mapActions('news', ['fetchNews']),
	},
}
</script>
<style scoped lang="scss">
@import 'assets/scss/Index.scss';
</style>
