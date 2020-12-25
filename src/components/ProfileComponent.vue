<template>
  <div
      class="profile px-5"
  >
    <v-avatar
        @click="clickAvatar"
        ref="avatarComponent"
        :style="{
          'border': avatarBorder,
        }" class="avatar" size="100">
      <v-img width="100" height="100" src="@/assets/img/avatar1.png"></v-img>
    </v-avatar>
    <v-row v-if="questionNumber !== 1" class="text mt-3 text-center">
      <v-col
        cols="12"
      >
        <div ref="title" class="title">
          <h1>{{ text }}</h1>
        </div>
      </v-col>
      <v-col
          cols="10"
          offset="1"
      >
        <p ref="text2" class="text2">Хочу поздравить тебя с наступающим Новым Годом!<br> Я для тебя подготовил маленький квест)</p>
      </v-col>
      <v-btn
          @click="start"
          class="mx-auto startButton"
          color="#d32f2f"
          dark
          ref="btnComponent"
      >
        Начнем
      </v-btn>
    </v-row>
    <v-bottom-sheet hide-overlay persistent v-model="questionSheet">
      <v-sheet
          class="text-center sheet rounded-t-xl pt-10 px-6"
          height="40vh"
      >
        <p class="">
          Нажми на самое прекрасное на этой странице :)
        </p>
        <div class="sheet__success">
          <v-fade-transition >
            <span v-if="answer">Умница)<br> Начало хорошее!</span>
          </v-fade-transition>
        </div>
        <v-btn
            :dark="answer"
            :disabled="!answer"
            color="#f06292"
            class="sheet__btn mt-5"
            :to="'/quest/2'"
        >
          Далее
        </v-btn>
      </v-sheet>
    </v-bottom-sheet>

  </div>
</template>

<script>
import { TimelineLite, Cubic, gsap, CSSPlugin } from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

export default {
  name: "ProfileComponent",
  components: {
  },
  computed: {
    questionNumber () {
      return this.$store.getters.getQuestionNumber
    },

    answer () {
      return this.$store.getters.getAsks[1].answer
    }
  },
  watch: {
    questionNumber (val) {
      if (val === 1) {
        this.questionSheet = true
        const avatar = this.$refs.avatarComponent.$el
        const tl = new TimelineLite()
        tl.to(avatar, .35, {
          y: 10,
          scale: 1.1
        })
      }
    }
  },
  data: () => ({
    profileTransform: '0',
    text: 'Дорогая Инесса!',
    avatarBorder: '2px solid #fff',
    questionSheet: false
  }),
  mounted() {
    const { text2, avatarComponent, title, btnComponent } = this.$refs
    const tl = new TimelineLite()
    const avatar = avatarComponent.$el
    const button = btnComponent.$el

    tl.to(avatar, .5, {
      opacity: 1,
      y: 50
    })

    tl.from(title, 1, {css:{width:0, opacity:0}, ease:Cubic.easeOut})

    tl.to(text2, .5, { opacity: 1})

    tl.to(button, .5, {css: { opacity: 1, y: 0}})
  },
  methods: {
    start () {
      this.$emit('start')
    },

    clickAvatar () {
      if (this.questionNumber === 1) {
        this.$store.state.asks[1].answer = true
        this.avatarBorder = '3px solid #66bb6a'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.profile
  color: #fff
  justify-content: center
  width: 100vw
  min-height: 400px


.title
  width: 300px
  height: 2rem
  opacity: 1
  display: block
  overflow: hidden
  margin: 0 auto
  white-space: nowrap
  text-overflow: ellipsis
  h1
    font-size: 1.6rem

.text2
  transition: all .4s ease
  font-size: 20px
  font-weight: 400
  opacity: 0


.startButton
  transform: translateY(100px)
  opacity: 0

.avatar
  transition: all .3s ease
  opacity: 0
  transform: translate(-50%, -50px)
  margin-left: 50%

.sheet
  p
    font-weight: 300
    font-size: 24px
  &__success
    color: #66bb6a
    min-height: 20px
    font-weight: 300
  &__btn
    text-transform: unset
</style>