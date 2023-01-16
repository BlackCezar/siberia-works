<template>
	<div>
		<article class="news-article">
			<h3 class="article-name">
				<a href="#">{{ article.title }}</a>
			</h3>
			<div class="article-time">{{ getTime(article) }}</div>
			<div class="article-city">{{ getCity() }}</div>
			<p class="article-description">{{ article.description }}</p>
		</article>
		<slot name="after" />
	</div>
</template>

<script>
export default {
	name: 'NewsArticle',
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getTime(article) {
			const date = new Date(article.publishedAt)
			return date.toLocaleTimeString('ru-RU', {
				hour: '2-digit',
				minute: '2-digit',
			})
		},
		getCity() {
			return 'Новосибирск'
		},
	},
}
</script>

<style scoped lang="scss">
.news-article {
	display: grid;
	max-width: 768px;
	align-items: flex-start;
	margin-bottom: 20px;
	grid-template-columns: 112px 1fr;
	position: relative;
	padding-bottom: 8px;

	@include mq(phone) {
		grid-template-columns: 70px 1fr;
		grid-row-gap: 8px;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		background-color: $grayMiddle;
		height: 1px;
		width: 50%;
	}

	.article-time {
		color: $blue;
		font-size: 12px;
		line-height: 22px;
		font-weight: 700;
		padding: 0 10px;
		background-color: $grayLight;
		border-radius: 20px;
		width: fit-content;
		grid-column: 1;
	}
	.article-name {
		margin: 0;
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
		grid-column: 2;
		grid-row: 1;
		a {
			color: $black;
			text-decoration-line: none;
		}
		@include mq(phone) {
			grid-row: 2;
			grid-column-start: 1;
			grid-column-end: span 2;
			display: flex;
		}
	}
	.article-description {
		margin: 8px 0;
		font-size: 16px;
		line-height: 24px;
		font-family: 'Blacker', sans-serif;
		grid-column: 2;
		grid-row: 2;
		@include mq(phone) {
			grid-row: 3;
			grid-column-start: 1;
			grid-column-end: span 2;
			display: flex;
		}
	}
	.article-city {
		color: $gray;
		font-weight: 700;
		font-size: 12px;
		line-height: 22px;
		grid-row: 3;
		grid-column: 2;

		@include mq(phone) {
			grid-row: 1;
		}
	}
}
</style>
