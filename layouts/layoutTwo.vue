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
import Header from '~/components/header/Header'
import CallButton from '~/components/CallButton.vue'
import FooterSection from '~/components/FooterSection'
import LazyHydrate from 'vue-lazy-hydration'

import aosMixin from '~/mixins/aos-mixin'
export default {
  name: 'layoutTwo',
  components: { FooterSection, Header, MobileMenu, CallButton, LazyHydrate },
  mixins: [aosMixin],
  data() {
    return {
      menu: [
        {
          title: 'Pagrindinis',
          to: '/',
        },
        {
          title: 'Apie mus',
          to: '/apie-mus/',
        },
        {
          title: 'Projektai',
          to: '/projektai/',
        },

        {
          title: 'Kontaktai',
          href: '/kontaktai/',
        },
      ],
    }
  },
}
</script>
