<template>
  <div id="accordionExample" class="accordion">
    <div class="accordion-item">
      <h2 id="headingOne" class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i class="icofont-check"></i>
          Maecenas facilisis erat id odio
        </button>
      </h2>

      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            There are many variations of passages of is psum available, but the majority have suffered alteration in
            some we form, by injected humour, variations of passages of is psum available, but the ariations of
          </p>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 id="headingTwo" class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <i class="icofont-check"></i>
          Phasellus et vehicula nulla
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            There are many variations of passages of is psum available, but the majority have suffered alteration in
            some we form, by injected humour, variations of passages of is psum available, but the ariations of
          </p>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 id="headingThree" class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          <i class="icofont-check"></i>
          Maecenas malesuada
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            There are many variations of passages of is psum available, but the majority have suffered alteration in
            some we form, by injected humour, variations of passages of is psum available, but the ariations of
          </p>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 id="headingFour" class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          <i class="icofont-check"></i>
          Why you join our team
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            There are many variations of passages of is psum available, but the majority have suffered alteration in
            some we form, by injected humour, variations of passages of is psum available, but the ariations of
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
}
</script>

<style scoped lang="scss">
.accordion {
  &.style-two {
    .accordion-item {
      .accordion-header {
        .accordion-button {
          border: 1px solid #dddddd;
          @media only screen and (max-width: 991px) {
            font-size: 18px;
          }
        }
      }
    }
  }
}
.accordion-item {
  margin-bottom: 20px;
  border-radius: $border-radius;
  border: none;
  &:last-child {
    margin-bottom: 0;
  }
  .accordion-header {
    .accordion-button {
      border-radius: $border-radius;
      box-shadow: $box-shadow;
      font-size: 22px;
      font-weight: 600;
      padding: 15px;
      &:focus {
        box-shadow: none;
      }
      &:not(.collapsed) {
        background-color: $main-color;
        color: $white-color;
        box-shadow: none;
        border-radius: $border-radius $border-radius 0 0;
        border-color: $white-color;
        i {
          background-color: $white-color;
          color: $main-color;
        }
      }
      &::after {
        content: '\ea86';
        font-family: IcoFont !important;
        background-image: unset;
        font-size: 25px;
        width: auto;
        height: auto;
      }
      i {
        color: $white-color;
        background-color: $main-color;
        border-radius: 50px;
        margin-right: 10px;
        transition: $transition;
        width: 25px;
        height: 25px;
        line-height: 27px;
        text-align: center;
        display: inline-block;
      }
    }
  }
  .accordion-body {
    border: none;
    border-top: none;
    border-radius: 0 0 $border-radius $border-radius;
    background-color: $white-color;
    padding: 15px;
  }
  &:first-of-type {
    .accordion-button {
      border-radius: $border-radius;
    }
  }
  &:last-of-type {
    .accordion-button {
      &.collapsed {
        border-radius: $border-radius;
      }
    }
  }
}
</style>
