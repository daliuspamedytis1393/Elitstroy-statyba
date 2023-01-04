<template>
  <main class="max-w-[1366px] mx-auto">
    <Header />
    <div>
      <ColorModePicker />
      <nuxt />
    </div>
  </main>
</template>
<script>
import Header from '~/components/general/Header.vue'
import ColorModePicker from '~/components/general/ColorModePicker.vue'

export default {
  components: {
    Header,
    ColorModePicker
  }
}
</script>
