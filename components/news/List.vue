<template>
	<div class="news-list">
		<div v-for="group in list.keys()" :key="group" class="news-group">
			<h2 class="group-name">{{ groupName(group) }}</h2>
			<NewsArticle
				v-for="(article, index) in list.get(group)"
				:key="article.id"
				:article="article"
			>
				<template
					v-if="
						group === adsGroup &&
						adsIndex === index &&
						windowWidth < 720
					"
					#after
				>
					<AdsItem
						:img="ads.img"
						:name="ads.name"
						:provider="ads.provider"
					/>
				</template>
			</NewsArticle>
		</div>
	</div>
</template>

<script>
import AdsItem from '~/components/news/Ads.vue'

export default {
	name: 'NewsList',
	components: { AdsItem },
	props: {
		list: {
			type: Map,
			required: true,
		},
	},
	data() {
		return {
			adsGroup: new Date().toLocaleDateString(),
			adsIndex: 3,
			ads: {
				name: 'Жилой район в Москве',
				provider: 'Insider park ',
				img: 'ads/main-banner.png',
				id: 1,
			},
			windowWidth: window.innerWidth,
		}
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize)
		})
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.onResize)
	},
	methods: {
		onResize() {
			this.windowWidth = window.innerWidth
		},
		groupName(group) {
			return group === new Date().toLocaleDateString() ? 'Сегодня' : group
		},
	},
}
</script>

<style lang="scss" scoped>
.news-list {
	.news-group {
		margin-bottom: 40px;
	}

	.group-name {
		font-weight: 700;
		font-size: 24px;
		margin: 0 0 20px;
		line-height: 38px;
		@include mq(phone) {
			font-size: 20px;
			line-height: 28px;
		}
	}
}
</style>
