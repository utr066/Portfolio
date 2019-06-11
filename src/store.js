import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    introduction: "",
    works: [],
    skills: []
  },
  mutations: {
    setIntroduction(state, introduction) {
      state.introduction = introduction
    },
    setWorks(state, works) {
      state.works = works
    },
    setSkills(state, skills) {
      state.skills = skills
    }
  },
  actions: {
    setIntroduction({commit}) {
      //Todo: 例外処理入れよう
      axios
      .get('http://localhost:9800/users/1/profile')
      .then(response => {
        commit('setIntroduction', response.data.profile.introduction)
      }) 
    },
    setWorks({ commit }) {
      //Todo: 例外処理入れよう
      axios
      .get('http://localhost:9800/users/1/works')
      .then(response => {
        commit('setWorks', response.data.works)
      })
    },
    setSkills({ commit }) {
      //Todo: 例外処理入れよう
      axios
      .get('http://localhost:9800/users/1/skills')
      .then(response => {
          commit('setSkills', response.data.skills)
      })
    }
  }
})
