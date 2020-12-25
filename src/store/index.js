import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fetchUrl: "https://nessav-df813-default-rtdb.firebaseio.com/",
        questionNumber: 0,
        asks: {
            1: {
                answer: false
            },
            2: {
                question: "Какие цветы ты любишь?",
                background: require('@/assets/img/quest/first.jpg'),
                answer: '',
                activeBtn: false
            },
            3: {
                question: "Какие конфеты ты любишь?",
                background: require('@/assets/img/quest/first.jpg'),
                answer: '',
                activeBtn: false
            },
            4: {
                question: "Какой твой любимый фильм?",
                background: require('@/assets/img/quest/first.jpg'),
                answer: '',
                activeBtn: false
            },
            5: {
                question: "Какую книгу бы прочитала, но нет времени?",
                background: require('@/assets/img/quest/first.jpg'),
                answer: '',
                activeBtn: false
            },
            6: {
                question: "Какое твое любимое блюдо?",
                background: require('@/assets/img/quest/first.jpg'),
                answer: '',
                activeBtn: false
            },
            7: {
                question: "Укажи день, когда ты будешь свободна!",
                background: require('@/assets/img/quest/first.jpg'),
                answer: '',
                activeBtn: false
            }
        }
    },
    mutations: {
        CHANGE_QUESTION_NUMBER (state, value) {
            state.questionNumber = value
        }
    },
    actions: {
        changeQuestionNumber ({ commit }, value) {
            console.log('action: ', value)
            commit('CHANGE_QUESTION_NUMBER', value)
        }
    },
    getters: {
        getQuestionNumber (state) {
            return state.questionNumber
        },

        getAsks (state) {
            return state.asks
        },

        getFetchUrl (state) {
            return state.fetchUrl
        }
    },
})