import api from '../api'

export default {
  setIntroduction({commit}) {
    api.fetchProfile().then(response => {
      commit('setIntroduction', response.data.profile.introduction)
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