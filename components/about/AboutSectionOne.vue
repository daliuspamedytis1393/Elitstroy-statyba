<template>
  <section class="about-us-section pb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="about-us-img me-15" data-aos="fade-right" data-aos-delay="400">
            <nuxt-img loading="lazy" format="webp" src="/image/apie-mus/apie-mus.jpeg" alt="Image" />

            <div class="experience">
              <div class="experience-bg">
                <span>{{ websiteData.year }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-content ms-15" data-aos="fade-left" data-aos-delay="400">
            <h2>{{ websiteData.title }}</h2>
            <p>
              {{ websiteData.description }}
            </p>
            <ul v-for="(item, index) in websiteData.suggestions" :key="index">
              <li>
                <i class="icofont-hand-drawn-right"></i>
                {{ item }}
              </li>
            </ul>

            <nuxt-link to="/kontaktai" class="main-btn">
              <span>
                {{ websiteData.buttonName }}
                <i class="icofont-arrow-right"></i>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSectionOne',
  computed: {
    websiteData() {
      return this.$store.state.apieMusData[0]
    },
  },
}
</script>

<style scoped lang="scss">
.about-us-img {
  border-top: 5px solid $main-color;
  border-right: 5px solid $main-color;
  padding-top: 20px;
  padding-right: 20px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 991px) {
    margin-bottom: 30px;
    padding-top: 10px;
    padding-right: 10px;
  }

  .experience {
    background-color: rgba(245, 94, 26, 0.9);
    border-radius: 50%;
    display: inline-block;
    padding: 25px;
    position: absolute;
    left: 0;
    right: 0;
    max-width: 180px;
    margin: auto;
    bottom: -85px;
    @media only screen and (max-width: 991px) {
      max-width: 102px;
      padding: 16px;
      bottom: 20px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: 5px dashed $white-color;
      border-radius: 50%;
      animation: rotation 50s infinite linear;
    }

    .experience-bg {
      width: 130px;
      height: 130px;
      background-color: $main-color;
      text-align: center;
      color: $white-color;
      position: relative;
      border-radius: 50%;
      @media only screen and (max-width: 991px) {
        width: 70px;
        height: 70px;
      }

      span {
        font-size: 26px;
        font-weight: 600;
        font-family: $heading-font-family;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        line-height: 1;
        @media only screen and (max-width: 991px) {
          font-size: 15px;
        }
      }
    }
  }

  &.style-two {
    padding: 0;
    border: none;
    max-width: 491px;
    margin-top: 80px;
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin-top: 0;
      max-width: 100%;
      img {
        width: 100%;
      }
    }

    .experience {
      top: -75px;
      left: auto;
      right: -80px;
      bottom: auto;
      @media only screen and (max-width: 1199px) {
        top: 10px;
        right: 10px;
      }
    }

    .about-img-child {
      max-width: 100px;
      margin: -50px auto 0;

      img {
        border-radius: 50%;
        border: 5px solid $white-color;
        box-shadow: $box-shadow;
      }
    }
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.about-content {
  .up-title {
    font-size: 18px;
    color: $main-color;
    font-weight: 700;
    display: block;
    margin-bottom: 10px;
    @media only screen and (max-width: 991px) {
      font-size: 15px;
      margin-bottom: 6px;
    }
  }

  h2 {
    font-size: 45px;
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 30px;
  }

  ul {
    padding-left: 0;
    margin-bottom: 30px;
    list-style: none;

    li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 12px;
      font-weight: 500;

      &:last-child {
        margin-bottom: 0;
      }

      i {
        position: absolute;
        top: 3px;
        left: 0;
        color: $main-color;
      }
    }
  }

  .progress-bars {
    margin-bottom: 60px;

    .progress-title-holder {
      position: relative;
    }

    .progress-title {
      font-size: 18px;
      font-weight: 500;
      font-family: $body-font-family;
    }

    .progress-number-wrapper {
      width: 100%;
      z-index: 10;
      font-size: 11px;
      line-height: 24px;
      height: 24px;
      letter-spacing: 0px;
      font-weight: 600;
      font-style: normal;
      text-transform: none;
      color: $white-color;
    }

    .progress-number-mark {
      margin-bottom: 4px;
      border-radius: 3px;
      color: $heading-color;
      padding: 0 8px;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      text-align: right;
      font-size: 16px;
      font-weight: 600;
      padding: 0;
    }

    .progress-content-outter,
    .b-progress {
      height: 6px;
      background-color: #e9e9e9;
    }

    .progress-content,
    .b-progress-bar {
      height: 6px;
      background-color: $main-color;
      width: 0%;
    }
  }

  @media only screen and (max-width: 767px) {
    h2 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
    ul {
      margin-bottom: 25px;

      li {
        font-size: 15px;
      }
    }
    .progress-bars {
      margin-bottom: 30px;

      .progress-title {
        font-size: 16px;
      }
    }
  }

  &.style-two {
    .progress-bars {
      margin-bottom: 15px;
    }

    .main-btn {
      margin-top: 50px;
    }
  }
}
</style>
