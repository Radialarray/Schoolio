const state = {
  users: [
    {
      user_name: '',
      user_password: '',
      user_key: ''
    }
  ]
}

const mutations = {
  ADD_USER (state, payload) {
    state.users.push(payload)
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    // commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
