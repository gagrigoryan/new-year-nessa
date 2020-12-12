<template>
  <div class="countdown">
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  data: () => ({
    count: 3
  }),
  mounted() {
    setTimeout(() => {
      this.count--
    }, 1500)
    setTimeout(() => {
      this.count--
    }, 3000)
    setTimeout(() => {
      this.count--
    }, 4500)
    setTimeout(() => {
      this.$emit('end')
      this.$store.dispatch('changeQuestionNumber', 1)
    }, 5000)
  }
}
</script>

<style lang="sass" scoped>
.countdown
  position: fixed
  top: 0
  left: 0
  background: #000
  opacity: .85
  display: flex
  justify-content: center
  align-items: center
  color: #fff
  width: 100%
  height: 100vh
  z-index: 999

h1
  font-size: 86px
</style>