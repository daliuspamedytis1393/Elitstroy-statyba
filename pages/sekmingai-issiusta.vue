<template>
  <div class="page">
    <div class="page__wrapper">
      <h1 class="page__title">Jūsų žinutė sėkmingai išsiųsta</h1>
      <nuxt-link to="/" class="main-btn">
        <span>
          Eiti į pagrindinis
          <i class="icofont-arrow-right"></i>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import PageBanner from '~/components/banner/PageBanner'

export default {
  name: 'sekmingai-issiusta',
  components: { PageBanner },
  layout: 'empty',
  head() {
    return {
      title: 'Žinutė išsiųsta',
      meta: [
        {
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #0a0a0a;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;

  &__title {
    margin-bottom: 40px;
    color: $white-color;
  }

  &__wrapper {
    margin: 0 auto;
  }
}
</style>
