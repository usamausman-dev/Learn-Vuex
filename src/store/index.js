import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'red'
  },
  getters: {
    squared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    incrementCounter(state, randomNumber) {
      console.log(randomNumber)
      state.counter += randomNumber
    },

    decrementCounter(state, randomNumber) {
      console.log(randomNumber)
      state.counter -= randomNumber
    },

    setColorCode(state, newVal) {
      state.colorCode = newVal
    }

  },

  //actions are used to call the api's and then we commit to mutations, 
  //its a best practice to make couple of method in both mutations and actions block

  actions: {
    incrementCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('incrementCounter', response.data)
      })
    },

    decrementCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decrementCounter', response.data)
      })
    },

    setColorCode({ commit }, newVal) {
      commit("setColorCode", newVal)
    }
  },
  modules: {
  }
})
