<template>
	<div>
		<page-banner
			class="bg-1"
			page-name="Apie mus"
			:links="[
				{ name: 'Pagrindinis', url: '/' },
				{ name: 'Apie mus', url: '/apie-mus' },
			]"
		/>

		<about-section-two />

		<about-section-one class="ptb-100" />

		<feature-section class="pt-100" />
	</div>
</template>

<script>
import PageBanner from '~/components/banner/PageBanner'

export default {
	name: 'about',
	components: { PageBanner },
	layout: 'layoutTwo',
}
</script>
