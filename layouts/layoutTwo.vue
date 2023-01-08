<template>
	<div>
		<Header :menu="menu" />

		<MobileMenu :menu="menu" />

		<Nuxt />

		<CallButton />

		<FooterSection />
	</div>
</template>

<script>
import MobileMenu from '~/components/header/MobileMenu'
import Header from '~/components/header/Header'
import CallButton from '~/components/CallButton.vue'
import FooterSection from '~/components/FooterSection'

import aosMixin from '~/mixins/aos-mixin'
export default {
	name: 'layoutTwo',
	components: { FooterSection, Header, MobileMenu, CallButton },
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
