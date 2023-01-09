<template>
  <div>
    <LazyHydrate when-idle>
      <Header :menu="menu" />
    </LazyHydrate>

    <LazyHydrate when-idle>
      <MobileMenu :menu="menu" />
    </LazyHydrate>

    <Nuxt />

    <LazyHydrate when-idle>
      <CallButton />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <FooterSection />
    </LazyHydrate>
  </div>
</template>
<script>
import MobileMenu from '~/components/header/MobileMenu'
import FooterSection from '~/components/FooterSection'
import Header from '~/components/header/Header'
import CallButton from '~/components/CallButton.vue'
import aosMixin from '~/mixins/aos-mixin'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: { Header, FooterSection, MobileMenu, CallButton, LazyHydrate },
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
