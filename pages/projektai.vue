<template>
  <div>
    <PageBanner
      class="bg-1"
      :page-name="projectsSection.pageTitle"
      :links="[
        { name: 'Pagrindinis', url: '/' },
        { name: 'Projektai', url: '/projektai' },
      ]"
    />

    <LazyHydrate when-visible>
      <ProjectSection />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import PageBanner from '~/components/banner/PageBanner'

export default {
  scrollToTop: true,
  name: 'projects',
  components: { PageBanner, LazyHydrate },
  layout: 'layoutTwo',
  computed: {
    seoData() {
      return this.$store.state.seoData[0]
    },
    projectsSection() {
      return this.$store.state.projektaiData[0]
    },
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
