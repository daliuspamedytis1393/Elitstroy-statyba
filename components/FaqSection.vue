<template>
	<section class="faq-section ptb-100">
		<div class="container">
			<main-title
				:styles="true"
				sub-title="FAQ"
				title="We Have 37+ Years Of Experience Helped Success"
				text="Louasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
					voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
					architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam."
			/>

			<div class="row align-items-center">
				<div class="col-lg-6">
					<accordion />
				</div>

				<div class="col-lg-6">
					<div class="faq-img">
						<img src="~assets/images/faq-img.jpg" alt="Image" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Accordion from '~/components/Accordion'
export default {
	name: 'FaqSection',
	components: { Accordion },
}
</script>

<style scoped lang="scss">
.faq-section {
	background-image: url(~/assets/images/faq-bg.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	z-index: 1;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #251f1a;
		opacity: 0.96;
		z-index: -1;
	}
}

.faq-img {
	max-width: 500px;
	margin: auto;
	position: relative;
	z-index: 1;
	&::before {
		content: '';
		position: absolute;
		top: 0px;
		right: -15px;
		height: 100%;
		width: 100%;
		border: 5px solid $main-color;
		border-radius: 50%;
		z-index: -1;
	}
	img {
		border-radius: 50%;
	}
	@media only screen and (max-width: 991px) {
		margin-top: 30px;
		&::before {
			display: none;
		}
	}
}
</style>
