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

    <form
      name="contacts"
      action="/sekmingai-issiusta/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="form-contact"
      hidden
    >
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group"><input name="name" required placeholder="Vardas" class="form-control" /></div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <input type="email" name="email" required placeholder="Elektroninis paštas" class="form-control" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group">
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              placeholder="Jūsų žinutė"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="main-btn"><span>Siųsti</span></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  scrollToTop: true,
  name: 'IndexPage',
  components: {
    LazyHydrate,
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
