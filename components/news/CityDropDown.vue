<template>
	<div class="city-drop-down">
		<span>{{ city }}</span>
		<div class="arrow"><ArrowIcon /></div>
	</div>
</template>

<script>
import ArrowIcon from '@/assets/imgs/icons/controls/arrow.svg'
export default {
	name: 'CityDropDown',
	components: { ArrowIcon },
	data() {
		return {
			city: 'Выбрать город',
		}
	},
}
</script>

<style scoped lang="scss">
.city-drop-down {
	margin-left: auto;
	height: 38px;
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
	align-items: center;
	@include mq(phone) {
		margin-left: 0;
		margin-bottom: 30px;
		justify-content: space-between;
		width: 100%;
	}

	span {
		cursor: pointer;
		margin-right: 6px;
		font-size: 16px;
	}
	.arrow {
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			transform: rotate(90deg);
			@include mq(phone) {
				transform: none;
				margin-left: auto;
			}
		}
	}
}
</style>
