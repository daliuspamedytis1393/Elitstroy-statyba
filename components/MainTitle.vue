<template>
  <div class="main-section-title-wrap">
    <div class="row">
      <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
        <div class="main-section-title left-title" :class="styles ? 'white-title' : ''">
          <span class="up-title"> {{ subTitle }}</span>
          <h2>{{ title }}</h2>
        </div>
      </div>
      <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
        <p :class="styles ? 'p-style' : ''">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    title: {
      type: String,
      required: true,
    },

    subTitle: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    styles: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
