const state = {
  users: [
    {
      user_name: 'aa',
      user_password: 'aa',
      user_id: '13990139535099013',
      logged_in: false
    }
  ],
  current_id: 'blaa'
}

const mutations = {
  ADD_USER (state, payload) {
    state.users.push(payload)
  },
  SET_CURRENTID (state, payload) {
    state.current_id = payload.current_id
  }
}

export default {
  state,
  mutations
}
