<template>
	<section class="page-banner-section">
		<div class="container">
			<div class="page-banner-content">
				<h2>{{ pageName }}</h2>
				<ul>
					<template v-for="(item, index) in links">
						<li v-if="index + 1 === links.length" :key="index">
							{{ item.name }}
						</li>
						<li v-else :key="index">
							<nuxt-link :to="item.url">{{
								item.name
							}}</nuxt-link>
						</li>
					</template>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'pageBanner',
	props: {
		pageName: {
			type: String,
			required: true,
		},
		links: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped lang="scss">
.page-banner-section {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	position: relative;
	z-index: 1;
	padding-top: 240px;
	padding-bottom: 200px;

	@media only screen and (max-width: 991px) {
		padding-top: 110px;
		padding-bottom: 70px;
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		padding-top: 140px;
		padding-bottom: 100px;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(1, 5, 9, 0.77);
		z-index: -1;
	}
	&.bg-1 {
		background-image: url(~assets/images/kontaktai/kontaktai.jpg);
	}
	&.bg-2 {
		background-image: url(~assets/images/page-bg/page-bg-2.jpg);
	}
	&.bg-3 {
		background-image: url(~assets/images/error-img.png);
	}
	&.bg-4 {
		background-image: url(~assets/images/page-bg/page-bg-4.jpg);
	}
	&.bg-5 {
		background-image: url(~assets/images/page-bg/page-bg-5.jpg);
	}
	&.bg-6 {
		background-image: url(~assets/images/page-bg/page-bg-6.jpg);
	}
	&.bg-7 {
		background-image: url(~assets/images/page-bg/page-bg-7.jpg);
	}
}
.page-banner-content {
	max-width: 600px;
	margin: auto;
	text-align: center;
	h2 {
		font-size: 50px;
		color: $white-color;
		margin-bottom: 20px;
	}
	ul {
		padding-left: 0;
		margin-bottom: 0;
		list-style-type: none;
		line-height: 1;
		li {
			display: inline-block;
			color: $main-color;
			position: relative;
			margin-right: 30px;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				right: -19px;
				width: 1px;
				height: 100%;
				background-color: $main-color;
				transform: rotate(15deg);
			}
			a {
				color: $white-color;
				&:hover {
					color: $main-color;
				}
			}
			&:last-child {
				margin-right: 0;
				&::before {
					display: none;
				}
			}
		}
	}
	@media only screen and (max-width: 991px) {
		h2 {
			font-size: 35px;
			margin-bottom: 10px;
		}
		ul {
			li {
				font-size: 15px;
			}
		}
	}
}
</style>
