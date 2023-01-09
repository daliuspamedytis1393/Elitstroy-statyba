<template>
  <div class="main-services-item">
    <i :class="icon"></i>
    <h3>
      {{ title }}
    </h3>
    <p class="text-black">{{ description }}</p>
    <nuxt-img
      format="webp"
      loading="lazy"
      src="image/services-card-shape.png"
      :placeholder="15"
      class="services-card-shape"
      alt="Image"
    />
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.main-services-item {
  padding: 40px;
  border: 1px dashed $main-color;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-bottom: 30px;
  @media only screen and (max-width: 1199px) {
    padding: 20px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: $main-color;
    transition: $transition;
    z-index: -1;
  }
  i {
    font-size: 70px;
    color: $main-color;
    line-height: 1;
    margin-bottom: 15px;
    display: inline-block;
    transition: $transition;
  }
  h3 {
    font-size: 25px;
    letter-spacing: 1px;
    margin-bottom: 15px;
    @media only screen and (max-width: 767px) {
      font-size: 22px;
    }
    a {
      color: $white-color;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.8);
  }
  .main-detail-btn {
    color: $white-color;
    i {
      color: $white-color;
    }
  }
  .services-card-shape {
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    opacity: 0;
    transition: $transition;
    z-index: -1;
  }
  &.style-two {
    i {
      color: $main-color;
    }
    h3 {
      a {
        color: $heading-color;
      }
    }
    p {
      color: $body-color;
      transition: $transition;
    }
    .main-detail-btn {
      color: $body-color;
      i {
        color: $body-color;
      }
    }
  }
  &:hover {
    &::before {
      width: 100%;
      right: auto;
      left: 0;
    }
    i {
      color: $white-color;
    }
    .services-card-shape {
      opacity: 0.5;
    }
    &.style-two {
      i {
        color: $white-color;
      }
      h3 {
        a {
          color: $white-color;
        }
      }
      p {
        color: $white-color;
      }
      .main-detail-btn {
        color: $white-color;
        i {
          color: $white-color !important;
        }
      }
      .services-card-shape {
        opacity: 0.1;
      }
    }
  }
  &.active {
    border: 1px solid $main-color !important;
    &::before {
      width: 100%;
      right: auto;
      left: 0;
    }
    i {
      color: $white-color;
    }
    .services-card-shape {
      opacity: 0.5;
    }
    .main-detail-btn {
      i {
        color: $white-color !important;
      }
    }
  }
}
</style>
