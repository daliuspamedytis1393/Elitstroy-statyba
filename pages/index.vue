<template>
  <div>
    <banner class="bg-1" />

    <service-section />

    <project-section />

    <testimonial-section />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: 'IndexPage',
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
