<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-content">
        <h1 data-aos="fade-up" data-aos-delay="200">
          {{ websiteData.title }}
        </h1>

        <ul data-aos="fade-up" data-aos-delay="600">
          <li></li>
        </ul>

        <nuxt-link to="/kontaktai/" class="main-btn" data-aos="fade-up" data-aos-delay="600">
          <span>
            {{ websiteData.buttonName }}
            <i class="icofont-arrow-right"></i>
          </span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  computed: {
    websiteData() {
      return this.$store.state.pagrindinisData[0]
    },
  },
}
</script>

<style scoped lang="scss">
.banner-section {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 250px;
  padding-bottom: 200px;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 991px) {
    padding-top: 250px;
    padding-bottom: 80px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 991px) {
      background-color: rgba(255, 255, 255, 0.7);
      z-index: -1;
    }
  }

  &.bg-1 {
    position: relative;
    z-index: 2;
    background-color: $black-color;

    &::before {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/image/main.jpg);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: '';
      background-position: center;
      background-size: cover;
      animation: opacity 3s ease-out forwards;
      background-color: rgba(2, 1, 1, 0.7);
    }
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.banner-content {
  max-width: 700px;
  position: relative;
  color: white;

  h1 {
    color: $white-color !important;
    font-size: 64px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 34px;
    font-size: 19px;
    max-width: 600px;
  }

  ul {
    padding-left: 0;
    margin-bottom: 40px;
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 50px;
      position: relative;
      padding-left: 40px;

      &:last-child {
        margin-right: 0;
      }

      i {
        color: $main-color;
        font-size: 30px;
        position: absolute;
        top: -3px;
        left: 0;
      }

      h3 {
        font-weight: 600;
        font-size: 19px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    h1 {
      font-size: 40px;
      margin-top: -12px;
    }
    p {
      font-size: 16px;
      margin-bottom: 25px;
    }
    ul {
      margin-bottom: 25px;
    }
  }

  .banner-shape-2 {
    position: absolute;
    bottom: -50px;
    left: -50px;
  }

  &.style-two {
    h1 {
      color: $white-color;
    }

    p {
      color: $white-color;
    }

    ul {
      li {
        h3 {
          color: $white-color;
        }
      }
    }
  }

  &.style-three {
    margin: auto;
    text-align: center;
  }
}
</style>
