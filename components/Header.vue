<template>
	<header>
		<UiContainer>
			<div class="menu">
				<UiIconButton icon="burger" />
				<a href="/">
					<Logo class="logo" />
				</a>
				<UiIconButton icon="search" />
			</div>
		</UiContainer>
	</header>
</template>

<script>
import Logo from '@/assets/imgs/icons/logo.svg'

export default {
	name: 'HeaderComponent',
	components: {
		Logo,
	},
}
</script>

<style lang="scss" scoped>
header {
	padding: 45px 0;
	border-bottom: 16px solid $black;
	@include mq(phone) {
		border-bottom: 8px solid $black;
		padding: 19px 0;

		.logo {
			max-width: 160px;
		}
	}

	.menu {
		display: flex;
		justify-content: space-between;
		align-items: center;

		> a {
			display: flex;
			align-items: center;
		}
	}
}
</style>
