<template>
  <div>
    <page-banner
      class="bg-3"
      page-name="Atsiprašome, šio puslapio nerasta"
      :links="[{ name: 'Pagrindinis', url: '/' }, { name: 'Klaida' }]"
    />
    <div class="error-page-section ptb-100">
      <div class="container">
        <div class="error-page-content text-center">
          <nuxt-link to="/" class="main-btn">
            <span>Eiti į Pagrindinis</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageBanner from '~/components/banner/PageBanner'
export default {
  name: 'error',
  components: { PageBanner },
  layout: 'layoutTwo',
}
</script>
