import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";
import axios from "axios";

loadFonts();
const pinia = createPinia();
const app = createApp(App);

const apiBaseURL = "http://localhost:3000";
axios.defaults.baseURL = apiBaseURL;

app.config.globalProperties.$http = axios;

app.provide("$http", axios);
app.use(router).use(vuetify).use(pinia).mount("#app");
