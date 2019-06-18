import api from '../api'

export default {
  setProfile({commit}) {
    api.fetchProfile().then(response => {
      commit('setProfile', response.data.profile)
    })
  },
  setWorks({ commit }) {
    api.fetchworks().then(response => {
      commit('setWorks', response.data.works)
    })
  },
  setSkills({ commit }) {
    api.fetchSkills().then(response => {
        commit('setSkills', response.data.skills)
    })
  }
}