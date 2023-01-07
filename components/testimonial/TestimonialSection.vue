<template>
	<section class="testimonial-section ptb-100">
		<div class="container">
			<main-title
				sub-title="Atsiliepimai"
				title="Ką kalba apie mus"
			/>
			<client-only>
				<owl-carousel
					class="testimonial-slider"
					:items="options.items"
					:nav="options.nav"
					:loop="options.loop"
					:margin="options.margin"
					:autoplay="true"
					:dots="options.dot"
					:autoplay-speed="options.smartSpeed"
					:autoplay-hover-pause="options.autoplayHoverPause"
					:center="true"
				>
					<div v-for="(item, index) in testimonialItem" :key="index">
						<testimonial-item
							:key="index"
							:image="item.image"
							:name="item.name"
							:title="item.title"
							:text="item.text"
						/>
					</div>
				</owl-carousel>
			</client-only>
		</div>
	</section>
</template>

<script>
import TestimonialItem from '~/components/testimonial/TestimonialItem'
import image1 from '~/assets/images/testimonial/testimonial-1.jpg'
import image2 from '~/assets/images/testimonial/testimonial-2.jpg'
export default {
	name: 'TestimonialSection',
	components: { TestimonialItem },
	data() {
		return {
			options: {
				items: 1,
				loop: true,
				margin: 30,
				nav: false,
				dot: false,
				smartSpeed: 800,
				autoplayHoverPause: true,
				center: true,
			},
			testimonialItem: [
				{
					image: image1,
					name: 'Inga Kubiliūtė',
					text: 'Ačiū už išklotas trinkeles ir sutvarkytą aplinką, vaizdas nuostabus!',
				},
				{
					image: image2,
					name: 'Mykolas Majauskas',
					text: 'Dėkoju už šauniai atliktus trinkelių klojimo darbus. Viskas puiku.',
				},
			],
		}
	},
}
</script>

<style scoped lang="scss">
.testimonial-section {
	background-image: url(~/assets/images/testimonial/testimonial-bg.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
