<template>
  <div
      class="profile px-5"
  >
    <v-avatar :style="{'transform': `translateY(${ profileTransform })`}" class="avatar" size="100">
      <v-img width="100" height="100" src="@/assets/img/avatar1.png"></v-img>
    </v-avatar>
    <v-row v-if="textShow" class="text mt-3">
      <v-col>
        <vue-typer repeat="0"  type-delay="120" :text='text' />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: "ProfileComponent",
  components: {
    VueTyper
  },
  data: () => ({
    profileTransform: '0',
    text: 'Дорогая Инесса!',
    textShow: false
  }),
  mounted() {
    setTimeout(() => {
      this.profileTransform = '-100px'
      this.textShow = true
    }, 500)
  }
}
</script>

<style lang="sass" scoped>
.profile
  color: #fff
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  width: 100vw

.text
  transform: translateY(-100px)

.avatar
  border: 2px solid #fff
  transition: all 1s ease

</style>

<style lang="sass">
.vue-typer
  .char
    color: #fff !important
    font-size: 28px !important
    font-weight: 500

</style>