<template>
  <section class="project-details-section pt-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="project-details-img"></div>
        </div>
        <div class="col-lg-4">
          <div class="project-left-sidebar">
            <h3>All Projects</h3>
            <ul>
              <li>
                <nuxt-link to="/services">Folat This Clening.</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/services">Professional Cleaning.</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/services">Reasonable Service.</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/services">Embarrassing Clening..</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/services">Variations Clening.</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="project-details-cntent ptb-50">
        <p>
          will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our
          professional this to It uses a dictionary of 2200 Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable. The generated Ipsum is therefore always free from
          repetition, injected humour,sure there isn’t anything embarrassing hidden in the middle of text. reenergize
          your ome and enhance your life. From everyday housekeeping to routine cleanings, our professional this to It
          uses a dictionary of 2200 Latin words, combined with a handful of model sentence structures, to generate Lorem
          Ipsum which looks reasonable. The generated psum is..
        </p>

        <p>
          will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our
          professional this to It uses a dictionary of 2200 Latin words, combined with a handful of model sentence
          structures, members can provide you. members can provide you.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceDetailSection',
}
</script>

<style scoped lang="scss">
.project-left-sidebar {
  background-color: #f2f2f2;
  padding: 30px;
  @media only screen and (max-width: 767px) {
    padding: 20px;
  }

  h3 {
    font-size: 25px;
    margin-bottom: 25px;
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style-type: none;

    li {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        display: block;
        background-color: $white-color;
        padding: 12px 20px;

        &:hover {
          background-color: $main-color;
          color: $white-color;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    h3 {
      margin-bottom: 15px;
    }
    ul {
      li {
        margin-bottom: 15px;
      }
    }
  }
}

.ptb-50 {
  padding-top: 50px;
  padding-bottom: 50px;
}

.project-details-img {
  background-image: url(~/assets/images/projects/projects-1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  @media only screen and (max-width: 767px) {
    height: 400px;
    margin-top: 30px;
    &.mt-0 {
      margin-bottom: 30px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 500px;
    margin-top: 30px;
    &.mt-0 {
      margin-bottom: 30px;
    }
  }
}
</style>
