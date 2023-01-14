<template>
  <section class="call-button-wrapper">
    <a class="call-button" aria-label="Skambinti į telefono numerį" :href="`tel:${websiteData.phone}`"
      ><i class="icofont-phone"></i>
    </a>
  </section>
</template>

<script>
export default {
  computed: {
    websiteData() {
      return this.$store.state.pagrindinisData[0]
    },
  },
}
</script>

<style lang="scss">
.call-button-wrapper .call-button {
  z-index: 999919;
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: $main-color;
  width: 3.5rem;
  height: 3.5rem;
  padding: 12px;
  border-radius: 100%;
  color: $white-color;
  display: flex;
  justify-items: center;
  align-items: center;
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.call-button-wrapper .call-button i {
  transition: 0.3s ease;
  font-size: 2rem;
}

.call-button-wrapper .call-button:hover i {
  transform: rotate(135deg);
}
</style>
