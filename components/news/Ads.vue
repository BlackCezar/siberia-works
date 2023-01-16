<template>
	<div class="ads">
		<a href="#">
			<span class="disclaimer">РЕКЛАМА</span>
			<img :src="img" alt="реклама" />
			<div class="card">
				<span class="ads-provider">{{ provider }}</span>
				<span class="title">{{ name }}</span>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'AdsItem',
	props: {
		img: {
			required: true,
			type: String,
		},
		name: {
			required: true,
			type: String,
		},
		provider: {
			required: true,
			type: String,
		},
	},
}
</script>

<style lang="scss" scoped>
.ads {
	height: 380px;
	position: relative;
	@include mq(phone) {
		margin-bottom: 20px;
	}
	@include mq(tablet) {
		height: auto;
	}

	a {
		display: block;
	}

	img {
		left: 0;
		width: 100%;
		height: 100%;
	}

	.disclaimer {
		position: absolute;
		font-size: 9px;
		color: $white;
		line-height: 20px;
		padding: 0px 5px;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		top: 12px;
		left: 12px;
	}

	.card {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 100px;
		background: rgba(128, 128, 128, 0.7);
		backdrop-filter: blur(5px);
		display: flex;
		flex-direction: column;
		padding: 20px;
		box-sizing: border-box;
		z-index: 1;

		.ads-provider {
			font-family: Arial, serif;
			font-size: 16px;
			line-height: 26px;
			font-weight: 700;
			color: $white;
			margin-bottom: 8px;
		}

		.title {
			font-family: Arial, serif;
			font-weight: 700;
			font-size: 18px;
			color: $white;
			line-height: 26px;
		}
	}
}
</style>
