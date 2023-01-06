<template>
	<div class="main-testimonial-item">
		<img :src="image" alt="Image" />
		<p>{{ text }}</p>
		<h3>{{ name }}</h3>
		<span>{{ title }}</span>
		<ul>
			<li>
				<i class="icofont-star"></i>
			</li>
			<li>
				<i class="icofont-star"></i>
			</li>
			<li>
				<i class="icofont-star"></i>
			</li>
			<li>
				<i class="icofont-star"></i>
			</li>
			<li>
				<i class="icofont-star"></i>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TestimonialItem',
	props: {
		image: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped lang="scss">
.testimonial-slider {
	.owl-carousel {
		.owl-item {
			img {
				width: auto;
				margin: auto;
				margin-bottom: 20px;
			}
		}
	}
}

.main-testimonial-item {
	max-width: 700px;
	margin: auto;
	text-align: center;
	img {
		margin-bottom: 20px;
	}
	p {
		font-style: italic;
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 20px;
		@media only screen and (max-width: 991px) {
			font-size: 15px;
		}
	}
	h3 {
		font-size: 22px;
	}
	span {
		display: block;
		margin-bottom: 20px;
	}
	ul {
		padding-left: 0;
		margin-bottom: 0;
		list-style-type: none;
		line-height: 1;
		li {
			display: inline-block;
			margin-right: 5px;
			&:last-child {
				margin-right: 0;
			}
			i {
				color: #ffcc00;
			}
		}
	}
}
</style>
