<template>
  <div :class="loading ? 'preloader' : 'preloader preloader-deactivate'">
    <div class="content">
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreLoader',
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style scoped lang="scss">
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0a0a0a;
  z-index: 99999;
  .content {
    position: absolute;
    width: 80px;
    height: 80px;
    animation: spin-six 2.5s infinite cubic-bezier(0.17, 0.72, 0.55, 1.66);
    left: 50%;
    top: 50%;
    transform: translate(-50px, -50px);
  }
  .ball {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 11%;
    height: 50%;
    background-color: transparent;
    transform-origin: bottom center;
    overflow: visible;
    &:nth-of-type(2) {
      transform: translate(-50%, 0) rotate(36deg);
    }
    &:nth-of-type(3) {
      transform: translate(-50%, 0) rotate(72deg);
    }
    &:nth-of-type(4) {
      transform: translate(-50%, 0) rotate(108deg);
    }
    &:nth-of-type(5) {
      transform: translate(-50%, 0) rotate(144deg);
    }
    &:nth-of-type(6) {
      transform: translate(-50%, 0) rotate(180deg);
    }
    &:nth-of-type(7) {
      transform: translate(-50%, 0) rotate(216deg);
    }
    &:nth-of-type(8) {
      transform: translate(-50%, 0) rotate(252deg);
    }
    &:nth-of-type(9) {
      transform: translate(-50%, 0) rotate(288deg);
    }
    &:nth-of-type(10) {
      transform: translate(-50%, 0) rotate(324deg);
    }
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 56%;
      border-radius: 70px;
      background-color: $main-color;
    }
    &::after {
      position: absolute;
      content: '';
      bottom: -100;
      left: 0;
      width: 100%;
      height: 56%;
      border-radius: 70px;
      background-color: $main-color;
      animation: opacity-six 2.5s infinite linear;
      opacity: 0;
    }
  }
  &.preloader-deactivate {
    visibility: hidden;
  }
}
@keyframes spin-six {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes opacity-six {
  20% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
