<template>
	<div class="layout">
		<Header />
		<UiContainer>
			<UiBreadCrumbs />
			<Nuxt />
		</UiContainer>
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'DefaultLayout',
}
</script>

<style lang="scss"></style>
