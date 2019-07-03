import axios from 'axios'
import Vue from 'vue'

axios.interceptors.response.use(function (response) {
  return response
},function (error) {
  Vue.toasted.clear()
  Vue.toasted.error(error.response.data)

  return Promise.reject(error)
});

export default {
  fetchProfile() {
      return axios.get(process.env.VUE_APP_API_URL_BASE + 'users/1/profile')
  },
  fetchworks() {
      return axios.get(process.env.VUE_APP_API_URL_BASE + 'users/1/works')
  },
  fetchSkills() {
      return axios.get(process.env.VUE_APP_API_URL_BASE + 'users/1/skills')
  },
  submitInquiry() {
    return axios.post(process.env.VUE_APP_API_URL_BASE + 'users/1/contact', {
      name: 'テスター',
      mail_address: '',
      content: 'あおおおおおおおおおおおおおおお' 
    })
  }
}
