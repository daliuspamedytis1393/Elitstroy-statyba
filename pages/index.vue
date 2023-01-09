<template>
  <div>
    <Banner class="bg-1" />

    <LazyHydrate when-visible>
      <ServiceSection />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ProjectSection />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <TestimonialSection />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  scrollToTop: true,
  name: 'IndexPage',
  components: {
    LazyHydrate
  },
  computed: {
    seoData() {
      return this.$store.state.seoData[0]
    },
  },
  head() {
    return {
      title: this.seoData.homepageMetaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoData.homepageMetaDescription,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://elitstroy.lt' + this.$route.path,
        },
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
}
</script>
