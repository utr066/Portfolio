import axios from "axios";
import Vue from "vue";

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    Vue.toasted.clear();
    Vue.toasted.error(error.message).goAway(2000);

    return Promise.reject(error);
  }
);

export default {
  fetchProfile() {
    return axios.get(process.env.VUE_APP_API_URL_BASE + "users/1/profile");
  },
  fetchworks() {
    return axios.get(process.env.VUE_APP_API_URL_BASE + "users/1/works");
  },
  fetchSkills() {
    return axios.get(process.env.VUE_APP_API_URL_BASE + "users/1/skills");
  },
  submitInquiry(data) {
    return axios.post(process.env.VUE_APP_API_URL_BASE + "users/1/contact", {
      name: data.name,
      mail_address: data.mail_address,
      content: data.content
    });
  }
};
