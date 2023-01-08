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

    <about-section class="pt-100" />

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
          href: 'https://elitstroy.lt' + this.$route.path
        }
      ],
    }
  },
}
</script>
