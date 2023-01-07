<template>
  <div>
    <banner-one class="bg-1" />

    <service-section />

    <testimonial-section />

    <project-section />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return { script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }] }
  },
}
</script>
