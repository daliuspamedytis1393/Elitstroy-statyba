<template>
  <div>
    <section class="footer-section pt-100 pb-70">
      <div class="container">
        <div class="back-to-top text-center" @click="moveUp">
          <i class="icofont-simple-up"></i>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="main-footer-item" data-aos="fade-up" data-aos-delay="100">
              <nuxt-link to="/" class="footer-logo">
                <nuxt-img
                  loading="lazy"
                  height="54"
                  width="54"
                  src="/image/logo.png"
                  alt="Kompanijos logotipas"
				  placeholder
                />
                <h4 class="footer-title">Elitstroy</h4>
              </nuxt-link>
            </div>
          </div>

          <div class="col-lg-6 col-sm-6">
            <div class="main-footer-item" data-aos="fade-up" data-aos-delay="400">
              <h3>Kontaktai</h3>

              <ul class="contact-info">
                <li>
                  <i class="icofont-clock-time"></i>
                  <span>
                    {{ websiteData.workTime }}
                  </span>
                </li>

                <li>
                  <i class="icofont-location-pin"></i>
                  <span>
                    {{ websiteData.address }}
                  </span>
                </li>
                <li>
                  <i class="icofont-location-pin"></i>
                  <a :href="`mailto:${websiteData.email}`">
                    {{ websiteData.email }}
                  </a>
                </li>
                <li>
                  <i class="icofont-phone"></i>
                  <a :href="`tel:${websiteData.phone}`"> {{ websiteData.phone }}</a>
                </li>
                <li>
                  <i class="icofont-bag-alt"></i>
                  <span> {{ websiteData.companyNumber }}</span>
                </li>
                <li>
                  <i class="icofont-address-book"></i>
                  <span> {{ websiteData.pvm }} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="copy-right-section">
      <div class="container">
        <p>Autorių teisės © {{ websiteData.year }} UAB Elitstroy. Visos teisės saugomos.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
  computed: {
    websiteData() {
      return this.$store.state.pagrindinisData[0]
    },
  },
  methods: {
    moveUp() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-section {
  background-color: #0a0a0a;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
}
.footer-title {
  color: white;
}
.main-footer-item {
  margin-bottom: 30px;
  .footer-logo {
    margin-bottom: 20px;
    display: block;
  }
  h3 {
    font-size: 30px;
    color: $white-color;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 25px;
    color: $white-color;
  }
  .footer-social-content {
    padding-left: 0;
    margin-bottom: 0;
    list-style-type: none;
    li {
      display: inline-block;
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
      a {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: inline-block;
        background-color: rgba(255, 255, 255, 0.06);
        border-radius: 50px;
        color: $white-color;
        font-size: 14px;
        &:hover {
          background-color: $main-color;
          border-color: $main-color;
        }
      }
    }
  }
  .import-link {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    li {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        color: $white-color;
        &:hover {
          color: $main-color;
        }
      }
    }
  }
  .contact-info {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    li {
      position: relative;
      padding-left: 30px;
      color: $white-color;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      i {
        position: absolute;
        top: 4px;
        left: 0;
        color: $main-color;
      }
      a {
        color: $white-color;
        &:hover {
          color: $main-color;
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    h3 {
      font-size: 25px;
    }
    .import-link {
      li {
        margin-bottom: 8px;
      }
    }
  }
}
.copy-right-section {
  background-color: #0a0a0a;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  p {
    color: $white-color;
  }
}
</style>
