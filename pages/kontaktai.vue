<template>
  <div>
    <PageBanner
      class="bg-1"
      :page-name="websiteData.title"
      :links="[{ name: 'Pagrindinis', url: '/' }, { name: websiteData.title }]"
    />
      <div class="contact-section ptb-100">
        <div class="container">
          <div class="contact-wrap">
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-form ptb-100">
                  <h2>{{ websiteData.contactTitle }}</h2>
                 
                </div>
              </div>

              <div class="col-lg-6 pe-0">
                <div class="contact-map">
                  <iframe
                    :src="websiteData.googleMaps"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PageBanner from '~/components/banner/PageBanner'

export default {
  scrollToTop: true,
  name: 'apie-mus',
  components: { PageBanner },
  layout: 'layoutTwo',
  computed: {
    websiteData() {
      return this.$store.state.kontaktaiData[0]
    },
    seoData() {
      return this.$store.state.seoData[0]
    },
  },
  head() {
    return {
      title: this.seoData.contactsMetaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoData.contactsMetaDescription,
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
