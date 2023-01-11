<template>
  <div>
    <PageBanner
      class="bg-1"
      :page-name="websiteData.title"
      :links="[
        { name: 'Pagrindinis', url: '/' },
        { name: 'Apie mus', url: '/apie-mus/' },
      ]"
    />

    <LazyHydrate when-visible>
      <AboutSection class="pt-100" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <FeatureSection class="pt-100" />
    </LazyHydrate>
  </div>
</template>

<script>
import PageBanner from '~/components/banner/PageBanner'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  scrollToTop: true,
  name: 'about',
  components: { PageBanner, LazyHydrate },
  layout: 'layoutTwo',
  computed: {
    websiteData() {
      return this.$store.state.apieMusData[0]
    },
    seoData() {
      return this.$store.state.seoData[0]
    },
  },
  head() {
    return {
      title: this.seoData.aboutUsMetaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoData.aboutUsMetaDescription,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://elitstroy.lt' + this.$route.path,
        },
      ],
    }
  },
}
</script>
