import api from "../api";
import { SET_PROFILE, SET_WORKS, SET_SKILLS } from "../api/types";

export default {
  async setProfile({ commit }) {
    const res = await api.fetchProfile();
    commit(SET_PROFILE, res.data.profile);
  },
  async setWorks({ commit }) {
    const res = await api.fetchworks();
    commit(SET_WORKS, res.data.works);
  },
  async setSkills({ commit }) {
    const res = await api.fetchSkills();
    commit(SET_SKILLS, res.data.skills);
  }
};
