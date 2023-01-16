<template>
	<div class="breadcrumbs">
		<ul v-if="windowWidth >= 720">
			<li v-for="item in list" :key="item.name">
				<a :href="item.link">
					{{ item.name }}
				</a>
				<ArrowIcon />
			</li>
		</ul>
		<ul v-else>
			<li v-if="last">
				<ArrowIcon />
				<a :href="last.link">{{ last.name }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
import ArrowIcon from '@/assets/imgs/icons/controls/arrow.svg'
export default {
	name: 'BreadCrumbs',
	components: { ArrowIcon },
	data() {
		return {
			list: [],
			windowWidth: window.innerWidth,
		}
	},
	computed: {
		last() {
			return this.list[this.list.length - 1]
		},
	},
	mounted() {
		this.getBreadCrumbs()
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
		getBreadCrumbs() {
			const { metaInfo } = this.$meta().resume()
			const list = metaInfo.meta?.find((item) => item.breadcrumbs)
			if (list && list.breadcrumbs) this.list = list.breadcrumbs
		},
	},
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
	margin-top: 14px;

	ul {
		padding: 6px 0;
		margin: 0;
		display: flex;
		border-bottom: 1px solid $blue;

		li {
			list-style-type: none;
			margin: 0;
			padding: 0;
			position: relative;
			display: flex;
			align-items: center;

			a {
				color: $blue;
				font-size: 14px;
				line-height: 20px;
				text-decoration-line: none;
			}

			svg {
				width: 6.5px;
				margin-left: 10px;
				margin-right: 10px;
			}

			&:last-child {
				svg {
					display: none;
					@include mq(phone) {
						display: block;
						transform: rotate(180deg);
					}
				}
				a {
					color: $gray;
				}
			}
		}
	}
}
</style>
