<template>
  <section class="testimonial-section ptb-100">
    <div class="container">
      <main-title :sub-title="testimonialSection.pageTitle" :title="testimonialSection.title" />
      <owl-carousel
        class="testimonial-slider"
        :items="options.items"
        :nav="options.nav"
        :loop="options.loop"
        :margin="options.margin"
        :autoplay="true"
        :dots="options.dot"
        :autoplay-speed="options.smartSpeed"
        :autoplay-hover-pause="options.autoplayHoverPause"
        :center="true"
      >
        <div v-for="(item, index) in testimonialSection.reviews" :key="index">
          <testimonial-item
            :key="index"
            :image="item.photo"
            :name="item.name"
            :text="item.review"
            :numbers="item.starCount"
          />
        </div>
      </owl-carousel>
    </div>
  </section>
</template>

<script>
import TestimonialItem from './TestimonialItem.vue'

export default {
  name: 'TestimonialSection',
  components: { TestimonialItem },
  data() {
    return {
      options: {
        items: 1,
        loop: true,
        margin: 30,
        nav: false,
        dot: false,
        smartSpeed: 800,
        autoplayHoverPause: true,
        center: true,
      },
    }
  },
  computed: {
    testimonialSection() {
      return this.$store.state.atsiliepimaiData[0]
    },
  },
}
</script>
