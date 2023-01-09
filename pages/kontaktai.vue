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
                  action="/sekmingai-issiusta"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  id="contact-form"
                >
                  <input type="hidden" name="contacts" value="contacts" />

                  <input :value="this.$route.path" type="hidden" name="location" />
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input type="text" name="name" required class="form-control" placeholder="Vardas" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          required
                          class="form-control"
                          placeholder="Elektroninis paštas"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <textarea
                          cols="30"
                          rows="10"
                          name="message"
                          required
                          class="form-control"
                          placeholder="Jūsų žinutė"
                        ></textarea>
                      </div>
                    </div>
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
