import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createVuetify, type ThemeDefinition } from "vuetify";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";
import axios from "axios";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#000",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});

loadFonts();
const pinia = createPinia();
const app = createApp(App);

const apiBaseURL = "http://localhost:3000";
axios.defaults.baseURL = apiBaseURL;

app.config.globalProperties.$http = axios;

app.provide("$http", axios);
app.use(pinia);
app.use(router).use(vuetify).mount("#app");
