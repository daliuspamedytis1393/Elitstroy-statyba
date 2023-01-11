<template>
  <div class="main-projects-item">
    <nuxt-img
      loading="lazy"
      :src="image"
      :placeholder="15"
      format="webp"
      class="projects-img"
      alt="Projektas ir jo informacija"
    />

    <div class="project-content hover-style">
      <div class="inner-border">
        <h3>
          {{ title }}
        </h3>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.main-projects-item {
  position: relative;
  margin-bottom: 30px;

  .projects-img {
    display: block;
    margin-bottom: -60px;
  }

  .project-content {
    text-align: center;
    background-color: $white-color;
    padding: 30px;
    position: relative;
    margin-left: 15px;
    margin-right: 15px;
    box-shadow: $box-shadow;
    @media only screen and (max-width: 991px) {
      margin-left: 0;
      margin-right: 0;
      padding: 20px;
    }

    h3 {
      font-size: 25px;
      @media only screen and (max-width: 991px) {
        font-size: 22px;
      }

      a {
        color: $heading-color;
      }
    }
  }

  &:hover {
    .project-content {
      h3 {
        a {
          color: $main-color;
        }
      }

      // &.hover-style {
      // 	&::before {
      // 		width: 100%;
      // 	}
      // 	&::after {
      // 		width: 100%;
      // 	}
      // 	.inner-border {
      // 		&::before {
      // 			height: 100%;
      // 		}
      // 		&::after {
      // 			height: 100%;
      // 		}
      // 	}
      // }
    }
  }
}
</style>
