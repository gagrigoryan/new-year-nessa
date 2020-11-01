<template>
  <v-app
    class="app"
  >
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
      <profile-component />
    </div>
  </v-app>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent";

export default {
  name: 'App',

  components: {
    ProfileComponent
  },

  data: () => ({
    //
  }),
  mounted() {
  },
  methods: {
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
