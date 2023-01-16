<template>
	<div class="container">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'ContainerWrapper',
}
</script>

<style lang="scss" scoped>
.container {
	max-width: 1328px;
	width: 100%;
	margin: 0 auto;
	@include mq(tablet) {
		padding: 0 16px;
		box-sizing: border-box;
	}
}
</style>
