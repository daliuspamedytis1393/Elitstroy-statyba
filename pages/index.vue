<template>
  <div>
    <banner-one class="bg-1" />

    <service-section />

    <testimonial-section />

    <project-section />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    seoData() {
      return this.$store.state.seoData[0]
    }
  },
  head() {
    return {
      title: seoData.homepageMetaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: seoData.homepageMetaDescription,
        },
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
}
</script>
