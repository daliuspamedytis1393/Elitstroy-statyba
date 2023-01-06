<template>
	<div>
		<HeaderSectionTwo :menu="menu" />

		<MobileMenu :menu="menu" />

		<Nuxt />

		<FooterSection />
	</div>
</template>

<script>
import MobileMenu from '~/components/header/MobileMenu'
import HeaderSectionTwo from '~/components/header/HeaderSectionTwo'
import FooterSection from '~/components/FooterSection'

import aosMixin from '~/mixins/aos-mixin'
export default {
	name: 'layoutTwo',
	components: { FooterSection, HeaderSectionTwo, MobileMenu },
	mixins: [aosMixin],
	data() {
		return {
			menu: [
				{
					title: 'Pagrindinis',
					href: '/',
				},
				{
					title: 'Apie mus',
					href: '/apie-mus',
				},
				{
					title: 'Projektai',
					href: '/projektai',
				},

				{
					href: '/kontaktai',
					title: 'Kontaktai',
				},
			],
		}
	},
}
</script>
