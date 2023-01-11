import AOS from 'aos'

export default {
  mounted() {
    AOS.init({
      easing: 'ease',
      duration: 800,
      once: true,
      disable() {
        const maxWidth = 821
        return window.innerWidth < maxWidth
      },
    })
  },
}
