<template>
  <div class="solution-section bg-color-f9f9f9">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="solution-form ptb-100" data-aos="fade-right" data-aos-delay="400">
            <h2>We Are Always Ready To Solution Your All Problem.</h2>

            <form class="form-solution">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Phone" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Contact Subject" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea cols="30" rows="10" class="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="main-btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-6 pe-0">
          <div class="solution-bg-img" data-aos="fade-left" data-aos-delay="200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionSection',
}
</script>

<style scoped lang="scss">
.solution-section {
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    .pe-0 {
      padding-right: 12px !important;
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    .container-fluid {
      max-width: 540px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .container-fluid {
      max-width: 720px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .container-fluid {
      max-width: 960px;
    }
    .pe-0 {
      padding-right: 12px !important;
    }
  }
}

.solution-form {
  max-width: 535px;
  margin-left: auto;
  margin-right: 100px;
  @media only screen and (max-width: 767px) {
    margin-right: 0;
    padding-bottom: 30px;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    max-width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-right: 0;
    padding-bottom: 30px;
    max-width: 100%;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: 0;
  }

  h2 {
    font-size: 45px;
    margin-bottom: 50px;
    margin-top: -10px;
    @media only screen and (max-width: 991px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
}

.form-solution {
  .form-group {
    .form-control {
      border-color: #dddddd;
      background-color: $white-color;
    }
  }

  .main-btn {
    border-radius: $border-radius;
  }
}

.solution-bg-img {
  background-image: url(~/assets/images/solution-img.jpg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  @media only screen and (max-width: 991px) {
    height: 400px;
  }
}
</style>
