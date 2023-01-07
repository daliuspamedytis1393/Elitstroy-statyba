<template>
	<div>
		<HeaderSectionTwo :menu="menu" />

		<MobileMenu :menu="menu" />

		<Nuxt />

		<CallButton />

		<FooterSection />
	</div>
</template>
<script>
import MobileMenu from '~/components/header/MobileMenu'
import FooterSection from '~/components/FooterSection'
import HeaderSectionTwo from '~/components/header/HeaderSectionTwo'
import CallButton from '~/components/CallButton.vue'
import aosMixin from '~/mixins/aos-mixin'
export default {
	components: { HeaderSectionTwo, FooterSection, MobileMenu, CallButton },
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
	fetch() {
		this.$nextTick(() => {
			if (process.client) {
				this.$nuxt.$loading.start()

				this.$nuxt.$loading.finish()
			}
		})
	},
}
</script>
