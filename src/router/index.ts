import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticlesViewVue from "@/views/ArticlesView.vue";
import AuthViewVue from "@/views/AuthView.vue";
import RecoverPasswordVue from "@/views/RecoverPassword.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlesViewVue,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthViewVue,
  },
  {
    path: "/recover-password",
    name: "recover-password",
    component: RecoverPasswordVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
