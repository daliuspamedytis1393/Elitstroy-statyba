<template>
  <div class="main-testimonial-item">
    <nuxt-img :src="image" loading="lazy" format="webp" :placeholder="15" alt="Image" />
    <p>{{ text }}</p>
    <h3>{{ name }}</h3>
    <ul>
      <li v-for="(number, index) in numbers">
        <i class="icofont-star"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TestimonialItem',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    numbers: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.testimonial-slider {
  .owl-carousel {
    .owl-item {
      img {
        width: 80px;
        height: auto;
        object-fit: cover;
        margin: auto;
        margin-bottom: 20px;
      }
    }
  }
}

.main-testimonial-item {
  max-width: 700px;
  margin: auto;
  text-align: center;
  img {
    margin-bottom: 20px;
    border-radius: 50%;
    width: 80px;
    object-fit: cover;
  }
  p {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    font-style: italic;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    @media only screen and (max-width: 991px) {
      font-size: 15px;
    }
  }
  h3 {
    font-size: 22px;
  }
  span {
    display: block;
    margin-bottom: 20px;
  }
  ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style-type: none;
    line-height: 1;
    li {
      display: inline-block;
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
      i {
        color: #ffcc00;
      }
    }
  }
}
</style>
