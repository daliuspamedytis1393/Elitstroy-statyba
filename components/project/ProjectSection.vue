<template>
  <section class="projects-section pt-100 pb-70">
    <div class="container">
      <main-title sub-title="Projektai" :title="projectsSection.title" />

      <div class="row justify-content-center">
        <div v-for="(item, index) in projectsSection.projects" :key="index" class="col-lg-4 col-md-6">
          <ProjectItem
            data-aos="fade-up"
            :data-aos-delay="getDelay(index + 1)"
            :image="item.photo"
            :title="item.name"
            :description="item.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectItem from '~/components/project/ProjectItem'

export default {
  name: 'ProjectSection',
  components: { ProjectItem },
  computed: {
    projectsSection() {
      return this.$store.state.projektaiData[0]
    },
  },
  methods: {
    getDelay(index) {
      return (200 * index).toString()
    },
  },
}
</script>
