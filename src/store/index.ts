import { createStore } from 'vuex'

type State = {
  count: number
}

export default createStore({
  state(): State {
    return {
      count: 666
    }
  },

  getters: {
    double(state: State) {
      return state.count * 2
    }
  },

  mutations: {
    add(state: State) {
      state.count++
    }
  },

  actions: {},
  modules: {}
})
