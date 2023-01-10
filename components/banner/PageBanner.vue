<template>
  <section class="page-banner-section">
    <div class="container">
      <div class="page-banner-content">
        <h2>{{ pageName }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pageBanner',
  props: {
    pageName: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.page-banner-section {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
  z-index: 1;
  padding-top: 240px;
  padding-bottom: 200px;

  @media only screen and (max-width: 991px) {
    padding-top: 120px;
    padding-bottom: 70px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding-top: 140px;
    padding-bottom: 100px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 5, 9, 0.5);
    z-index: -1;
  }
  &.bg-1 {
    position: relative;
    z-index: 2;
    background-color: $black-color;

    &::before {
      background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/image/main.jpg);
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
  &.bg-3 {
    background-image: url(~assets/images/error-img.png);
  }
}
.page-banner-content {
  max-width: 600px;
  margin: auto;
  text-align: center;
  h2 {
    font-size: 50px;
    color: $white-color;
    margin-bottom: 20px;
  }
  ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style-type: none;
    line-height: 1;
    li {
      display: inline-block;
      color: $main-color;
      position: relative;
      margin-right: 30px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: -19px;
        width: 1px;
        height: 100%;
        background-color: $main-color;
        transform: rotate(15deg);
      }
      a {
        color: $white-color;
        &:hover {
          color: $main-color;
        }
      }
      &:last-child {
        margin-right: 0;
        &::before {
          display: none;
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 35px;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 15px;
      }
    }
  }
}
</style>
