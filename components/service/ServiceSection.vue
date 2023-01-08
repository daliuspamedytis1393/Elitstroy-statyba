<template>
	<section class="services-section ptb-100">
		<div class="container">
			<div
				class="main-section-title white-title"
				data-aos="fade-up"
				data-aos-delay="200"
			>
				<span class="up-title">Paslaugos</span>
				<h2 class="text-black">Mūsų teikiamos paslaugos</h2>
			</div>
			<client-only>
				<owl-carousel
					class="services-slider owl-theme"
					:responsive="options.responsive"
					:nav="options.nav"
					:loop="options.loop"
					:margin="options.margin"
					:autoplay="true"
					:autoplay-speed="options.smartSpeed"
					:autoplay-hover-pause="options.autoplayHoverPause"
					:center="true"
				>
					<service-item
						v-for="(service, index) in serviceItem"
						:key="index"
						:icon="service.icon"
						:title="service.title"
						:description="service.description"
					/>
				</owl-carousel>
			</client-only>
		</div>

		<!-- <img
			src="~assets/images/services-bg-shape.png"
			class="services-bg-shape"
			alt="Image"
		/> -->
	</section>
</template>

<script>
import ServiceItem from '~/components/service/ServiceItem'

export default {
	name: 'ServiceSection',
	components: { ServiceItem },
	data() {
		return {
			options: {
				items: 1,
				loop: true,
				margin: 30,
				nav: false,
				smartSpeed: 800,
				autoplayHoverPause: true,
				center: true,
				responsive: {
					0: {
						items: 1,
					},
					576: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 3,
					},
					1200: {
						items: 3,
					},
					1500: {
						items: 3,
					},
				},
			},
			serviceItem: [
				{
					icon: 'icofont-building-alt',
					title: 'Statybos darbai',
					description:
						'Atliekame kapitalinį būsto remontą bei įrengiame naujos statybos butus, namus ir kotedžus.',
				},
				{
					icon: 'icofont-industries',
					title: 'Industries Pollution',
					description:
						'Louasi architecto beatae vitae dicta su voluptatem quia the voluptas so sequuntur magni dolores.',
				},
				{
					icon: 'icofont-under-construction-alt',
					title: 'Under-Construction',
					description:
						'Louasi architecto beatae vitae dicta su voluptatem quia the voluptas so sequuntur magni dolores.',
				},
				{
					icon: 'icofont-calculations',
					title: 'Projektavimas',
					description:
						'Louasi architecto beatae vitae dicta su voluptatem quia the voluptas so sequuntur magni dolores.',
				},
				{
					icon: 'icofont-industries',
					title: 'Rekonstrukcija',
					description:
						'Atliekame tam tikru pakeitimus esamoje statyboje',
				},
				{
					icon: 'icofont-under-construction-alt',
					title: 'Betonavimo darbai',
					description:
						'Betonuojame: Individualius namus Daugiabučius Mažus plotus Gamybines patalpas ir kt.',
				},
			],
		}
	},
}
</script>

<style scoped lang="scss">
.services-section {
	position: relative;
	overflow: hidden;
	z-index: 1;
	.services-bg-shape {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	&.bg-2 {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
}
</style>

<style lang="scss">
.services-slider {
	.owl-theme {
		.owl-dots {
			margin-top: 20px !important;
			line-height: 1;

			.owl-dot {
				@media only screen and (max-width: 991px) {
					margin-top: 0 !important;
				}

				span {
					margin-top: 0;
					margin-bottom: 0;
					background-color: transparent;
					border: 1px solid $main-color;
					transition: $transition;
					width: 15px;
					height: 15px;
				}

				&.active {
					span {
						background-color: $main-color;
						width: 15px;
						height: 15px;
					}
				}
			}
		}
	}

	.owl-item {
		&.active {
			&.center {
				.main-services-item {
					border: none;

					&::before {
						width: 100%;
						right: auto;
						left: 0;
					}

					.services-card-shape {
						opacity: 0.5;
					}

					i {
						color: $white-color;
					}
				}
			}
		}
	}
}
</style>
