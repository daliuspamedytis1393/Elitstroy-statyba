<template>
  <div>
    <page-banner
      class="bg-1"
      page-name="Jūsų užklausa sėkmingai išsiųsta"
      :links="[
       
        { name: 'Eiti į pagrindinį puslapį', url: '/' },
        { name: '', url: '/sekmingai-issiusta' },
      ]"
    />
  </div>
</template>

<script>
import PageBanner from '~/components/banner/PageBanner'

export default {
  name: 'sekmingai-issiusta',
  components: { PageBanner },
  layout: 'layoutTwo',
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
