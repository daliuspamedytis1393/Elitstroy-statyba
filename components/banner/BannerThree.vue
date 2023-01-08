<template>
	<section class="banner-section bg-3">
		<div class="container">
			<div class="banner-content style-two style-three">
				<h1 data-aos="fade-up" data-aos-delay="200">
					Ieškote statybos paslaugų ?
				</h1>

				<a
					href="/kontaktai"
					class="main-btn"
					data-aos="fade-up"
					data-aos-delay="600"
				>
					<span>
						{{websiteData.buttonName}}
						<i class="icofont-arrow-right"></i>
					</span>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'BannerThree',
	computed: {
		websiteData() {
			return this.$store.state.pagrindinisData[0]
		}
	},
}
</script>

<style scoped lang="scss">
.banner-section {
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	padding-top: 250px;
	padding-bottom: 200px;
	position: relative;
	z-index: 1;

	@media only screen and (max-width: 991px) {
		padding-top: 200px;
		padding-bottom: 60px;
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		padding-top: 120px;
		padding-bottom: 120px;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		@media only screen and (max-width: 991px) {
			background-color: rgba(255, 255, 255, 0.7);
			z-index: -1;
		}
	}

	&.bg-1 {
		background-image: url(/image/main.jpg);

		&::before {
			background-color: rgba(2, 1, 1, 0.7);
		}
	}

	&.bg-2 {
		padding-top: 280px;
		padding-bottom: 235px;
		@media only screen and (max-width: 767px) {
			padding-top: 115px;
			padding-bottom: 170px;
		}
		@media only screen and (min-width: 768px) and (max-width: 991px) {
			padding-top: 130px;
			padding-bottom: 185px;
		}

		@media only screen and (min-width: 992px) and (max-width: 1199px) {
			padding-top: 230px;
		}

		&::before {
			background-color: rgba(2, 1, 1, 0.6);
		}
	}

	&.bg-3 {
		background-image: url(~/assets/images/banner/banner-bg-3.jpg);
		padding-top: 280px;
		padding-bottom: 235px;
		@media only screen and (max-width: 991px) {
			padding-top: 130px;
			padding-bottom: 70px;
		}

		&::before {
			background-color: rgba(2, 1, 1, 0.81);
		}
	}
}

.banner-content {
	max-width: 700px;
	position: relative;
	color: white;

	h1 {
		color: $white-color !important;
		font-size: 92px;
		margin-bottom: 10px;
	}

	p {
		margin-bottom: 34px;
		font-size: 19px;
		max-width: 600px;
	}

	ul {
		padding-left: 0;
		margin-bottom: 40px;
		list-style-type: none;

		li {
			display: inline-block;
			margin-right: 50px;
			position: relative;
			padding-left: 40px;

			&:last-child {
				margin-right: 0;
			}

			i {
				color: $main-color;
				font-size: 30px;
				position: absolute;
				top: -3px;
				left: 0;
			}

			h3 {
				font-weight: 600;
				font-size: 19px;
			}
		}
	}

	@media only screen and (max-width: 991px) {
		h1 {
			font-size: 40px;
			margin-top: -12px;
		}
		p {
			font-size: 16px;
			margin-bottom: 25px;
		}
		ul {
			margin-bottom: 25px;
		}
	}

	.banner-shape-2 {
		position: absolute;
		bottom: -50px;
		left: -50px;
	}

	&.style-two {
		h1 {
			color: $white-color;
		}

		p {
			color: $white-color;
		}

		ul {
			li {
				h3 {
					color: $white-color;
				}
			}
		}
	}

	&.style-three {
		margin: auto;
		text-align: center;
	}
}
</style>
