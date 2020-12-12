<template>
  <div>
    <v-dialog
        v-model="dialog"
        dark
        persistent
        max-width="320"
        width="300"
    >
      <v-card>
        <v-card-title class="headline">
          Режим<br> энергосбережения
        </v-card-title>
        <v-card-subtitle class="text-center mt-2">
          <v-icon size="70" color="green darken-1">mdi-battery-heart-outline</v-icon>
        </v-card-subtitle>
        <v-card-text>Пожалуйста выключи режим энергосбережения!!!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              @click="dialog = false"
              text
          >
            Готово
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="" v-if="!dialog">
      <div class="video">
        <div class="video__wrapper" />
        <video
            src="@/assets/videos/video1.mp4"
            type="video/mp4"
            id="video"
            playsinline loop muted autoplay
        >
        </video>
      </div>
      <div class="profile">
        <profile-component v-on:start="startQuest" />
      </div>
    </div>
    <Countdown v-if="questStart" @end="endCountDown" />
  </div>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent";
import Countdown from "@/components/Countdown";

export default {
  name: 'App',

  components: {
    ProfileComponent,
    Countdown
  },

  data: () => ({
    dialog: true,
    questStart: false
  }),
  mounted() {
    setTimeout(() => {
      this.dialog = true
    }, 500)
  },
  methods: {
    startQuest () {
      this.questStart = true
    },
    endCountDown () {
      this.questStart = false
    }
  }
};
</script>

<style lang="sass">
.video
  width: 100%
  height: 100vh
  position: absolute
  overflow: hidden
  top: 0
  left: 0
  &__wrapper
    width: 100%
    height: 100%
    background-color: #000
    opacity: .6
    position: absolute
    top: 0
    left: 0
    z-index: 2
  video
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    min-width: 100%
    min-height: 100%
    height: 100vh
    width: 100%
    object-fit: cover
    transition: all .4s ease

.profile
  z-index: 5
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
</style>
