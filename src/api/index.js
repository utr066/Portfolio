import axios from 'axios'
import Vue from 'vue'

axios.interceptors.response.use(function (response) {
  return response
},function (error) {
  Vue.toasted.clear()
  Vue.toasted.error(error.message)
  return Promise.reject(error)
});

export default {
  fetchProfile() {
      return axios.get('http://localhost:9800/users/1/profile')
  },
  fetchworks() {
      return axios.get('http://localhost:9800/users/1/works')
  },
  fetchSkills() {
      return axios.get('http://localhost:9800/users/1/skills')
  }
}
