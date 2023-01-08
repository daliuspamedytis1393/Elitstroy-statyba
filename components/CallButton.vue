<template>
  <section class="call-buton">
    <a class="cc-calto-action-ripple" :href="`tel:${websiteData.phone}`"><i class="fa fa-phone"></i> </a>
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
.call-buton .cc-calto-action-ripple {
  z-index: 99999;
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: $main-color;
  width: 3.5rem;
  height: 3.5rem;
  padding: 1rem;
  border-radius: 100%;
  color: $white-color;
  animation: cc-calto-action-ripple 0.6s linear infinite;
  display: flex;
  justify-items: center;
  align-items: center;
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.call-buton .cc-calto-action-ripple i {
  transition: 0.3s ease;
  font-size: 2rem;
}

.call-buton .cc-calto-action-ripple:hover i {
  transform: rotate(135deg);
}

@keyframes cc-calto-action-ripple {
  0% {
    -webkit-box-shadow: 0 4px 10px rgba(236, 139, 0, 0.2), 0 0 0 0 rgba(236, 139, 0, 0.2),
      0 0 0 5px rgba(236, 139, 0, 0.2), 0 0 0 10px rgba(236, 139, 0, 0.2);
    box-shadow: 0 4px 10px rgba(236, 139, 0, 0.2), 0 0 0 0 rgba(236, 139, 0, 0.2), 0 0 0 5px rgba(236, 139, 0, 0.2),
      0 0 0 10px rgba(236, 139, 0, 0.2);
  }
  100% {
    -webkit-box-shadow: 0 4px 10px rgba(236, 139, 0, 0.2), 0 0 0 5px rgba(236, 139, 0, 0.2),
      0 0 0 10px rgba(236, 139, 0, 0.2), 0 0 0 20px rgba(236, 139, 0, 0);
    box-shadow: 0 4px 10px rgba(236, 139, 0, 0.2), 0 0 0 5px rgba(236, 139, 0, 0.2), 0 0 0 10px rgba(236, 139, 0, 0.2),
      0 0 0 20px rgba(236, 139, 0, 0);
  }
}
</style>
