<template>
	<button class="icon-button">
		<component :is="dynamicIcon" name="icon" />
	</button>
</template>

<script>
export default {
	name: 'IconButton',
	props: {
		icon: {
			type: String,
			required: true,
		},
	},
	computed: {
		dynamicIcon() {
			return () => import(`assets/imgs/icons/controls/${this.icon}.svg`)
		},
	},
}
</script>

<style lang="scss" scoped>
.icon-button {
	border: 0;
	background: white;
	@include mq(phone) {
		padding: 0;
		width: 24px;
		height: 22px;
		svg {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
