<template>
  <div class="wrapper">
    <v-img
        width="100%"
        height="100vh"
        :src="question.background"
    >
      <v-dialog
        v-model="dialog"
        dark
        persistent
      >
        <v-card ref="card" class="px-4 pt-4 pb-6">
          <h2>
            {{ question.question }}
          </h2>
          <v-text-field
              outlined
              dense
              filled
              class="mt-4"
              v-model="question.answer"
          >
          </v-text-field>
          <v-btn
            :disabled="question.answer.length === 0"
            @click="clickHandler"
          >
            Далее
          </v-btn>
        </v-card>
      </v-dialog>
    </v-img>
  </div>
</template>

<script>

export default {
  name: "Quest",
  components: {
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    question () {
      return this.$store.getters.getAsks[this.id]
    }
  },
  data: () => ({
    dialog: false
  }),
  mounted() {
    setTimeout(() => {
      this.dialog = true
    })
  },
  methods: {
    clickHandler () {
      if (this.id < 3)
        this.$router.push(`/quest/${parseInt(this.id)+1}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  height: 100vh
  overflow: hidden
</style>