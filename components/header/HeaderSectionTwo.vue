<template>
  <header class="header-section fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light style-two">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">
          <nuxt-img
            loading="lazy"
            height="54"
            width="54"
            src="/image/logo.png"
            alt="Kompanijos logotipas"
          />
          <h4 class="header-title">Elitstroy</h4>
        </nuxt-link>

        <a id="mobile_menu" class="mobile-menu" @click="OpenMobileMenu">
          <div class="mobile-menu-btn">
            <div class="mobile-menu-bar"></div>
          </div>
        </a>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav style-two m-auto">
            <li v-for="(item, index) in menu" :key="'level-1-' + index" class="nav-item">
              <nuxt-link v-if="item.href" :to="item.href" class="nav-link" exact-active-class="active">
                {{ item.title }}
              </nuxt-link>
              <template v-else>
                <a href="javascript:void(0);" class="nav-link dropdown-toggles">{{ item.title }}</a>

                <ul class="sub-menu">
                  <li v-for="(subitem, index2) in item.child" :key="'level-2-' + index2" class="nav-item">
                    <nuxt-link v-if="subitem.href" :to="subitem.href" class="nav-link" exact-active-class="active">
                      {{ subitem.title }}
                    </nuxt-link>
                    <template v-else>
                      <a href="#" class="nav-link dropdown-toggles">{{ item.title }}</a>

                      <ul class="sub-menu-sub">
                        <li v-for="(subsubitem, index3) in subitem.child" :key="'level-3-' + index3" class="nav-item">
                          <nuxt-link :to="subsubitem.href" class="nav-link" exact-active-class="active">
                            {{ subsubitem.title }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </template>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { headerScroll, OpenMobileMenu } from '~/mixins/headerFunctions'

export default {
  name: 'HeaderSectionTwo',
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    headerScroll()
  },
  methods: {
    OpenMobileMenu() {
      OpenMobileMenu()
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  &.is-fixed {
    position: fixed;
    top: 0;
    z-index: 9999;
    transform: translate3d(0, -100%, 0);
    background-color: $white-color;
    box-shadow: $box-shadow;
    &.style-two {
      background-color: #0a0a0a;
    }
  }
  &.can-animate {
    transition: transform 0.3s ease, visibility 0s 0.3s linear;
  }
  &.scroll-up {
    transform: translate3d(0, 0, 0);
  }
}
.up-header-content {
  position: relative;
  @media only screen and (max-width: 991px) {
    background-color: $main-color;
  }
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    text-align: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: $main-color;
    @media only screen and (max-width: 991px) {
      z-index: -1;
    }
  }
  .header-info-content {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    li {
      display: inline-block;
      margin-right: 30px;
      position: relative;
      padding-left: 22px;
      color: $white-color;
      font-size: 15px;
      @media only screen and (max-width: 767px) {
        margin-right: 15px;
      }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 13px;
        margin-right: 12px;
      }
      i {
        position: absolute;
        top: 5px;
        left: 0;
      }
      a {
        color: $white-color;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .header-social-content {
    padding-left: 0;
    margin-bottom: 0;
    list-style-type: none;
    text-align: right;
    @media only screen and (max-width: 767px) {
      text-align: left;
      padding-bottom: 15px;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
      text-align: center;
      padding-bottom: 15px;
    }
    li {
      display: inline-block;
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
      a {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: inline-block;
        border: 1px solid $white-color;
        border-radius: 50px;
        color: $white-color;
        font-size: 14px;
        &:hover {
          background-color: $main-color;
          border-color: $main-color;
        }
      }
    }
  }
}

.navbar {
  background-color: $white-color;
  box-shadow: $box-shadow;
  &.style-two {
    background-color: transparent;
    box-shadow: none;
  }
  &.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    background-color: $white-color;
    box-shadow: $box-shadow;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
    &.style-two {
      background-color: $heading-color;
    }
  }
}
.navbar-nav {
  display: inline-block;
  list-style: none;
  text-align: right;
  margin: 0;
  padding: 0;
  &.style-two {
    .nav-item {
      .nav-link {
        color: $white-color;
        &.dropdown-toggles {
          &:after {
            color: $white-color;
          }
        }
        &.active {
          color: $main-color;
          &:after {
            color: $main-color;
          }
        }
      }
    }
  }
  .nav-item {
    display: inline-block;
    margin-right: 35px;
    position: relative;
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      margin-right: 18px;
    }
    &:last-child {
      margin-right: 0;
    }
    .nav-link {
      display: inline-block;
      font-size: 19px;
      font-weight: 500;
      color: $heading-color;
      text-transform: capitalize;
      padding: 30px 0;
      transition: all 0.3s linear 0s;
      text-decoration: none;
      position: relative;
      font-family: $heading-font-family;
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 18px;
      }
      &.dropdown-toggles {
        padding-right: 16px;
        &:after {
          content: '\efc2';
          font-family: IcoFont !important;
          color: $heading-color;
          font-size: 12px;
          position: absolute;
          right: 0;
          top: 36px;
          transition: $transition;
        }
      }
      &:hover {
        &:before {
          transform: scale(1);
        }
      }
      &.active {
        &:before {
          transform: scale(1);
        }
      }
    }
    .sub-menu {
      position: absolute;
      width: 250px;
      text-align: left;
      top: 100%;
      transition: $transition;
      border-top: 3px solid $main-color;
      box-shadow: $box-shadow;
      visibility: hidden;
      opacity: 0;
      z-index: 9999;
      background: $white-color;
      display: block;
      border-radius: 0;
      padding-left: 0;
      margin-bottom: 0;
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        max-width: 200px;
      }
      .nav-item {
        display: block;
        margin: 0;
        .nav-link {
          color: $heading-color;
          padding: 15px 15px;
          display: block;
          line-height: 1;
          text-transform: capitalize;
          font-weight: 600;
          &.dropdown-toggles {
            &:after {
              right: 15px !important;
              top: 18px !important;
            }
          }
          &::before {
            display: none;
          }
          &.active {
            background: $main-color;
            color: $white-color;
          }
          &:hover {
            background: $main-color;
            color: $white-color;
          }
        }
        .sub-menu-sub {
          position: absolute;
          width: 250px;
          text-align: left;
          top: 100%;
          transition: $transition;
          border-top: 3px solid $main-color;
          box-shadow: $box-shadow;
          visibility: hidden;
          opacity: 0;
          z-index: 9999;
          background: $white-color;
          display: block;
          border-radius: 0;
          padding-left: 0;
          margin-bottom: 0;
          left: 250px;
          top: 0 !important;
          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            max-width: 200px;
            left: 200px;
          }
          .nav-item {
            display: block;
            margin: 0;
            .nav-link {
              color: $heading-color;
              padding: 15px 15px;
              display: block;
              line-height: 1;
              text-transform: capitalize;
              font-weight: 600;
              &::before {
                display: none;
              }
              &.active {
                background: $main-color;
                color: $white-color;
              }
              &:hover {
                background: $main-color;
                color: $white-color;
              }
            }
          }
        }
        &:hover {
          .sub-menu-sub {
            top: 100%;
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
    &:hover {
      .sub-menu {
        top: 100%;
        visibility: visible;
        opacity: 1;
      }
    }
  }
}

.header-title {
  color: white;
}

.mobile-menu {
  width: 50px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transition: $transition;
  float: right;
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    width: unset;
    height: unset;
    padding: 7px 5px;
    margin-left: 20px;
  }
  .mobile-menu-btn {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 24px;
    .mobile-menu-bar {
      position: absolute;
      width: 30px;
      height: 3px;
      background-color: $white-color;
      top: 0;
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition-duration: 0.275s;
      &:before {
        display: block;
        content: '';
        top: 10px;
        transition: opacity 0.125s ease 0.275s;
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: $white-color;
      }
      &:after {
        display: block;
        content: '';
        top: 20px;
        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: $white-color;
      }
    }
  }
  &.open {
    opacity: 0;
  }
}
</style>
