<template>
	<button class="btn"><slot /></button>
</template>

<script>
export default {
	name: 'UIButton',
}
</script>

<style scoped lang="scss">
.btn {
	background-color: $blue;
	border: 1px solid $blue;
	color: $white;
	padding: 12px 40px;
	border-radius: 8px;
}
</style>
