<template>
  <div>
    <aside id="menu_slide_bar" class="menu-slide-bar">
      <div class="close-mobile-menu">
        <div class="mobile-logo">
          <Logo color-class="text-black" />
        </div>

        <div class="close-btn" @click="CloseMobileMenu">
          <i class="icofont-close-line"></i>
        </div>
      </div>
      <client-only>
        <sidebar-menu :menu="menu" theme="white-theme" class="side-mobile-menu" @item-click="onItemClick">
          <template v-slot:dropdown-icon="{ isOpen }">
            <span v-if="!isOpen"><i class="icofont-plus"></i></span>
            <span v-else><i class="icofont-minus"></i></span>
          </template>
        </sidebar-menu>
      </client-only>
    </aside>
    <div id="body_overlay" class="body-overlay" @click="CloseMobileMenu"></div>
  </div>
</template>

<script>
import { CloseMobileMenu } from '~/mixins/headerFunctions'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  name: 'MobileMenu',
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  methods: {
    CloseMobileMenu() {
      CloseMobileMenu()
    },
    onItemClick(event, item) {
      if (item.href) {
        this.CloseMobileMenu()
      }
    },
  },
}
</script>

<style lang="scss">
.logo {
  height: 54px;
  width: 54px;
}
.menu-slide-bar {
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: -360px;
  width: 320px;
  padding: 20px;
  height: 100%;
  display: block;
  background-color: $white-color;
  z-index: 99999;
  transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  box-shadow: $box-shadow;
  &.show {
    left: 0;
  }
}
.close-mobile-menu {
  margin-bottom: 15px;
  .close-btn {
    position: absolute;
    font-size: 25px;
    top: 24px;
    right: 20px;
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 31px;
    color: black;
  }
}
.on-side {
  overflow: hidden;
}
.body-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  left: -100%;
  transition: $transition;
  &.active {
    left: 0;
  }
}

.mobileMenus {
  .mm-collapse {
    &:not(.mm-show) {
      display: none;
    }
  }
  .mm-collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition-timing-function: ease;
    transition-duration: 0.35s;
    transition-property: height, visibility;
  }
}
.for-mobile {
  display: none;
  @media only screen and (max-width: 991px) {
    display: block;
  }
}

.v-sidebar-menu.vsm_white-theme {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent !important;

  .vsm--scroll-wrapper {
    height: 100%;
    overflow: inherit;
  }

  .vsm--link {
    padding: 13px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 14px;
    color: $heading-color;
    font-weight: 600;
    background: transparent;
    text-transform: uppercase;
    position: relative;
    transition: $transition;

    &:hover {
      color: $main-color;
      background: transparent;
      padding-left: 5px;
    }

    &.active {
      color: $main-color;
      padding-left: 5px;
    }
  }

  .vsm--dropdown .vsm--list {
    background-color: transparent !important;
    padding-left: 15px;
  }

  .vsm--toggle-btn {
    display: none !important;
  }
}
</style>
