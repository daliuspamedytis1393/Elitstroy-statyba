<template>
  <nuxt-link class="navbar-brand" to="/">
    <nuxt-img
      height="150"
      width="150"
      class="logo"
      src="/image/logo.png"
      lazy="loading"
      placeholder
      format="webp"
      alt="Kompanijos logotipas"
    />
    <h4 class="title" :class="colorClass">Elitstroy</h4>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    colorClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  height: 54px;
  width: 54px;
}

.title {
  color: white;
  margin-top: 5px;
  font-size: 18px;
}
</style>
