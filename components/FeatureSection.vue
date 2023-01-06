<template>
	<section class="features-section pb-70">
		<div class="container">
			<div class="row d-flex justify-content-between">
				<div class="col-lg-3 col-sm-6">
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						class="main-features-item"
					>
						<i class="main-icon icofont-building-alt"></i>
						<i class="shape-icon icofont-building-alt"></i>
						<h3>Statybos darbai</h3>
					</div>
				</div>

				<div class="col-lg-3 col-sm-6">
					<div
						data-aos="fade-up"
						data-aos-delay="400"
						class="main-features-item"
					>
						<i class="main-icon icofont-calculations"></i>
						<i class="shape-icon icofont-calculations"></i>
						<h3>Projektavimas</h3>
					</div>
				</div>

				<div class="col-lg-3 col-sm-6">
					<div
						data-aos="fade-up"
						data-aos-delay="600"
						class="main-features-item"
					>
						<i class="main-icon icofont-industries"></i>
						<i class="shape-icon icofont-industries"></i>
						<h3>Rekonstrukcija</h3>
					</div>
				</div>

				<div class="col-lg-3 col-sm-6">
					<div
						data-aos="fade-up"
						data-aos-delay="800"
						class="main-features-item"
					>
						<i class="main-icon icofont-under-construction-alt"></i>
						<i
							class="shape-icon icofont-under-construction-alt"
						></i>
						<h3>Betonavimo darbai</h3>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'FeatureSection',
}
</script>

<style scoped lang="scss">
.main-features-item {
	text-align: center;
	background-color: $white-color;
	box-shadow: $box-shadow;
	padding: 40px 30px;
	border-bottom: 3px solid #d8d8d8;
	position: relative;
	z-index: 1;
	transition: $transition;
	margin-bottom: 30px;
	@media only screen and (max-width: 991px) {
		padding: 30px;
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		overflow: hidden;
		padding: 20px;
	}
	&::before {
		content: '';
		position: absolute;
		bottom: -3px;
		right: 0;
		width: 0;
		height: 3px;
		background-color: $main-color;
		transition: $transition;
	}
	.main-icon {
		display: inline-block;
		width: 75px;
		height: 75px;
		line-height: 75px;
		text-align: center;
		font-size: 40px;
		color: $main-color;
		border: 1px solid $main-color;
		border-radius: 50%;
		margin-bottom: 20px;
		transition: $transition;
		@media only screen and (max-width: 991px) {
			margin-bottom: 15px;
			width: 70px;
			height: 70px;
			line-height: 70px;
			font-size: 35px;
		}
	}
	h3 {
		font-size: 25px;
		margin-bottom: 0;
		@media only screen and (max-width: 1199px) {
			font-size: 22px;
		}
	}
	.shape-icon {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		font-size: 200px;
		color: rgba(245, 94, 26, 0);
		transition: $transition;
	}
	&:hover {
		.main-icon {
			background-color: $main-color;
			color: $white-color;
		}
		.shape-icon {
			color: rgba(245, 94, 26, 0.07);
		}
		&::before {
			width: 100%;
			right: auto;
			left: 0;
		}
	}
}
</style>
