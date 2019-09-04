import api from "../api";

export default {
  setProfile({ commit }) {
    const res = api.fetchProfile();
    commit("setProfile", res.data.profile);
  },
  setWorks({ commit }) {
    const res = api.fetchworks();
    commit("setWorks", res.data.works);
  },
  setSkills({ commit }) {
    const res = api.fetchSkills();
    commit("setSkills", res.data.skills);
  }
};
