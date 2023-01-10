<template>
  <section class="features-section pb-70">
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div v-for="(work, index) in darbaiData.works" :key="index" class="col-lg-3 col-sm-6">
          <div data-aos="fade-up" :data-aos-delay="calculateDelay(index)" class="main-features-item">
            <i class="main-icon" :class="work.iconName"></i>
            <i class="shape-icon" :class="work.iconName"></i>
            <h3>{{ work.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  name: 'FeatureSection',
  computed: {
    darbaiData() {
      return this.$store.state.darbaiData[0]
    },
  },
  methods: {
    calculateDelay(index){
      return 100 + (50 * (index + 1))
    }
  }
}
</script>

<style scoped lang="scss">
.main-features-item {
  text-align: center;
  background-color: $white-color;
  box-shadow: $box-shadow;
  padding: 40px 30px;
  border-bottom: 3px solid #d8d8d8;
  position: relative;
  z-index: 1;
  transition: $transition;
  margin-bottom: 30px;
  height: 250px;
  @media only screen and (max-width: 991px) {
    padding: 30px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    overflow: hidden;
    padding: 20px;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: -3px;
    right: 0;
    width: 0;
    height: 3px;
    background-color: $main-color;
    transition: $transition;
  }
  .main-icon {
    display: inline-block;
    width: 75px;
    height: 75px;
    line-height: 75px;
    text-align: center;
    font-size: 40px;
    color: $main-color;
    border: 1px solid $main-color;
    border-radius: 50%;
    margin-bottom: 20px;
    transition: $transition;
    @media only screen and (max-width: 991px) {
      margin-bottom: 15px;
      width: 70px;
      height: 70px;
      line-height: 70px;
      font-size: 35px;
    }
  }
  h3 {
    font-size: 20px;
    margin-bottom: 0;
    @media only screen and (max-width: 1199px) {
      font-size: 20px;
    }
  }
  .shape-icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 200px;
    color: rgba(245, 94, 26, 0);
    transition: $transition;
  }
  &:hover {
    .main-icon {
      background-color: $main-color;
      color: $white-color;
    }
    .shape-icon {
      color: rgba(245, 94, 26, 0.07);
    }
    &::before {
      width: 100%;
      right: auto;
      left: 0;
    }
  }
}
</style>
