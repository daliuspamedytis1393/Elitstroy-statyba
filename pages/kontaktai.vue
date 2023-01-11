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
                <form
                  class="form-contact"
                  name="contacts"
                  method="POST"
                  action="/sekmingai-issiusta/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  data-netlify-recaptcha="true"
                >
                  <input type="hidden" name="form-name" value="contacts" />

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="name"></label>
                        <input type="text" name="name" required class="form-control" placeholder="Vardas" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="email"></label>
                        <input type="email" name="email" required class="form-control" placeholder="El. paštas" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label for="body"></label>
                        <textarea
                          cols="30"
                          rows="10"
                          name="message"
                          required
                          class="form-control"
                          placeholder="Žinutė"
                        ></textarea>
                      </div>
                    </div>
                    <div class="captcha" data-netlify-recaptcha="true"></div>
                    <div class="col-12">
                      <button type="submit" class="main-btn">
                        <span>Siųsti</span>
                      </button>
                    </div>
                  </div>
                </form>
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

<style lang="scss" scoped>
.captcha {
  margin: 30px 0;
}
</style>
