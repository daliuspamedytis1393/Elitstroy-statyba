<template>
  <div>
    <page-banner
      class="bg-1"
      page-name="Atlikti darbai"
      :links="[
        { name: 'Pagrindinis', url: '/' },
        { name: 'Projektai', url: '/projektai' },
      ]"
    />

    <project-section />
  </div>
</template>

<script>
import PageBanner from '~/components/banner/PageBanner'
export default {
  name: 'projects',
  components: { PageBanner },
  layout: 'layoutTwo',
  computed: {
    seoData() {
      return this.$store.state.seoData[0]
    }
  },
  head() {
    return {
      title: this.seoData.projectsMetaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoData.projectsMetaDescription,
        },
      ],
    }
  },
}
</script>
