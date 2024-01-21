import { defineStore } from "pinia";

export const useStore = defineStore("counter", {
  state: () => {
    return {
      auth: false,
      token: null,
      user: null,
      user_id: null,
    };
  },
  getters: {
    getAuth: (state) => {
      return state.auth;
    },
    getToken: (state) => {
      return state.token;
    },
    getUser: (state) => {
      return state.user;
    },
    getUserId: (state) => {
      return state.user_id;
    },
  },
  actions: {
    login() {
      this.auth = true;
    },
    logout() {
      this.auth = false;
    },
  },
});
