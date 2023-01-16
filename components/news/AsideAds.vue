<template>
	<div class="aside-news">
		<AdsItem
			v-for="ad in list"
			:key="ad.id"
			:provider="ad.provider"
			:img="ad.img"
			:name="ad.name"
		/>
	</div>
</template>

<script>
import AdsItem from '~/components/news/Ads.vue'

export default {
	name: 'AsideAds',
	components: { AdsItem },
	data() {
		return {
			list: [
				{
					name: 'Жилой район в Москве',
					provider: 'Insider park ',
					img: 'ads/main-banner.png',
					id: 1,
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.aside-news {
	display: flex;
	flex-direction: column;
	max-width: 320px;
	margin-left: auto;
}
</style>
