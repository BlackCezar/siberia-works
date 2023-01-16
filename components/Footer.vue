<template>
	<footer>
		<UiContainer>
			<div class="footer-columns">
				<div class="logo">
					<LogoIcon />
				</div>
				<ul class="menu">
					<li><a href="#">О редакции</a></li>
					<li><a href="#">Популярное</a></li>
					<li><a href="#">Популярное</a></li>
					<li><a href="/">Новости</a></li>
					<li><a href="#">Пользовательское соглашение</a></li>
				</ul>
				<div class="description">
					© ООО «СИБИРЬ РАБОТАЕТ», 2022. Сообщения и материалы
					сетевого издания «СИБИРЬ РАБОТАЕТ» (зарегистрировано
					Федеральной службой по надзору в сфере связи, информационных
					технологий и массовых коммуникаций (Роскомнадзор) 03.12.2022
					за номером ЭЛ №ФС77-82385) сопровождаются пометкой «СИБИРЬ
					РАБОТАЕТ». Отдельные публикации могут содержать информацию,
					не предназначенную для пользователей до 18 лет.
				</div>
				<div class="contacts">
					<UIButton>Написать нам</UIButton>
					<div class="socials">
						<a href="#">
							<InstagramIcon />
						</a>
						<a href="#">
							<OkIcon />
						</a>
						<a href="#">
							<FacebookIcon />
						</a>
						<a href="#">
							<TwitterIcon />
						</a>
						<a href="#">
							<PinterestIcon />
						</a>
						<a href="#">
							<SpotifyIcon />
						</a>
						<a href="#">
							<VkIcon />
						</a>
						<a href="#">
							<TelegramIcon />
						</a>
						<a href="#">
							<YoutubeIcon />
						</a>
						<a href="#">
							<YandexMusicIcon />
						</a>
						<a href="#">
							<SubtractIcon />
						</a>
					</div>
				</div>
			</div>
		</UiContainer>
		<div class="made-by">сделано для тестового проекта</div>
	</footer>
</template>

<script>
import LogoIcon from '@/assets/imgs/icons/logo-short.svg'
import InstagramIcon from '@/assets/imgs/icons/socials/instagram.svg'
import OkIcon from '@/assets/imgs/icons/socials/ok.svg'
import FacebookIcon from '@/assets/imgs/icons/socials/facebook.svg'
import SubtractIcon from '@/assets/imgs/icons/socials/subtract.svg'
import YandexMusicIcon from '@/assets/imgs/icons/socials/yandex-music.svg'
import PinterestIcon from '@/assets/imgs/icons/socials/pinterest.svg'
import TwitterIcon from '@/assets/imgs/icons/socials/twitter.svg'
import VkIcon from '@/assets/imgs/icons/socials/vk.svg'
import SpotifyIcon from '@/assets/imgs/icons/socials/spotify.svg'
import YoutubeIcon from '@/assets/imgs/icons/socials/youtube.svg'
import TelegramIcon from '@/assets/imgs/icons/socials/telegram.svg'
import UIButton from '~/components/ui/Button.vue'

export default {
	name: 'FooterComponent',
	components: {
		UIButton,
		LogoIcon,
		InstagramIcon,
		OkIcon,
		FacebookIcon,
		SubtractIcon,
		TwitterIcon,
		PinterestIcon,
		YandexMusicIcon,
		YoutubeIcon,
		TelegramIcon,
		SpotifyIcon,
		VkIcon,
	},
}
</script>

<style lang="scss" scoped>
footer {
	background-color: $black;
	padding: 52px 0px 0px;

	.footer-columns {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr 1fr;
		justify-content: space-between;
		align-items: flex-start;
		@include mq(phone) {
			grid-template-columns: 1fr;
			justify-items: center;
			justify-content: center;

			.logo {
				margin-bottom: 50px;
			}
		}

		.menu {
			padding: 0 5px;
			margin: 0;
			display: flex;
			flex-direction: column;
			@include mq(phone) {
				align-items: center;
			}

			li {
				list-style-type: none;
				margin-bottom: 20px;

				a {
					color: $grayLight;
					font-size: 16px;
					line-height: 20px;
					text-transform: uppercase;
					text-decoration-line: none;
				}
			}
		}

		.description {
			padding: 0 5px;
			margin: 0;
			color: $grayLight;
			font-size: 12px;
			line-height: 20px;
			@include mq(phone) {
				grid-row: 4;
			}
		}

		.contacts {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			@include mq(phone) {
				align-items: center;
			}

			.socials {
				display: flex;
				margin-top: 72px;
				flex-wrap: wrap;
				justify-content: flex-end;
				@include mq(phone) {
					justify-content: center;
					margin-top: 40px;
					margin-bottom: 31px;
				}

				a {
					display: block;
					margin-left: 9px;
					margin-bottom: 9px;
				}
			}
		}
	}
	.made-by {
		text-align: center;
		padding: 18px 0;
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 16px;
		color: $white;
		background: rgba(23, 29, 37, 0.5);
	}
	.container {
		padding-bottom: 28px;
	}
}
</style>
<style lang="scss">
footer svg path {
	fill: white;
}
footer .logo svg path {
	fill: $blue;
}
</style>
