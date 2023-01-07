<template>

  <div>

    <banner-one class="bg-1" />

    <service-section />

    <testimonial-section />

    <project-section />

    <blog-section />

  </div>

</template>

<script>
 export default { name: 'IndexPage', head() { return { script: [ { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
}, ], } }, mounted() { return console.log(this.$store.state.pagrindinisData) } }
</script>

