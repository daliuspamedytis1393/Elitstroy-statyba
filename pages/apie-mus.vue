<template>
  <div>
    <page-banner
      class="bg-1"
      :page-name="websiteData.title"
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
      title: seoData.aboutUsMetaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: seoData.aboutUsMetaDescription,
        },
      ],
    }
  },
}
</script>
