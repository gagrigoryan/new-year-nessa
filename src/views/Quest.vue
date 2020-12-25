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
          <div v-if="!end" class="">
            <h2>
              {{ question.question }}
            </h2>
            <v-text-field
                v-if="id !== '7'"
                v-model="question.answer"
                class="mt-4"
                dense
                filled
                outlined
            >
            </v-text-field>
            <v-date-picker
                v-else
                class="my-4"
                v-model="question.answer"
                elevation="5"
                locale="RU"
            ></v-date-picker>
            <v-btn
                :disabled="question.answer.length === 0"
                @click="clickHandler"
            >
              Далее
            </v-btn>
            <v-btn
                v-if="id !== '2'"
                :to="`/quest/${id - 1}`"
                class="ml-2"
                color="red lighten-1"
            >
              Назад
            </v-btn>
          </div>
          <div v-else class="text-center py-6">
            <v-icon size="80">mdi-check</v-icon>
            <h3 class="my-3">Псе прошло успешно!</h3>
            <h4 class="">Спасибо за все и с Наступающим Новым Годом!</h4>
          </div>
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
    dialog: false,
    end: false
  }),
  mounted() {
    setTimeout(() => {
      this.dialog = true
    })
  },
  methods: {
    async clickHandler () {
      if (parseInt(this.id) < 7)
        this.$router.push(`/quest/${parseInt(this.id)+1}`)
      else {
        const result = JSON.stringify(this.$store.getters.getAsks)
        const url = this.$store.getters.getFetchUrl
        const response = await fetch(url + 'result.json', {
          method: "POST",
          body: result
        })
        const data = await response.json()
        if (data.name) {
          setTimeout(() => {
            this.dialog = false
          }, 50)
          setTimeout(() => {
            this.end = true
            this.dialog = true
          }, 400)


        }
      }

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