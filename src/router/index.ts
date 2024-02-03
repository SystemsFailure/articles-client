import { useStore } from "@/store/index";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticlesViewVue from "@/views/ArticlesView.vue";
import AuthViewVue from "@/views/AuthView.vue";
import RecoverPasswordVue from "@/views/RecoverPassword.vue";
import MainProfileViewVue from "@/views/MainProfileView.vue";
import ArhivesViewVue from "@/views/ArhivesView.vue";

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
  {
    path: "/main-profile/:account",
    name: "main-profile",
    component: MainProfileViewVue,
  },
  {
    path: "/arhives",
    name: "arhives",
    component: ArhivesViewVue,
  },
];
// list exceptions for meta field of requiredAuth
const exceptions: Array<{ path: string; name: string }> = [
  {
    path: "/auth",
    name: "auth",
  },
  {
    path: "/recover-password",
    name: "recover-password",
  },
  {
    path: "/about",
    name: "about",
  },
];

routes.forEach((route) => {
  // Add new meta field - requiresAuth: false, but to excepting all routes from exceptions
  route.meta = {};
  route.meta = Object.assign(route.meta, { requiresAuth: null });
  if (
    exceptions.some(
      (exception) =>
        exception.path === route.path && exception.name === route.name
    )
  ) {
    route.meta.requiresAuth = false;
  } else {
    route.meta.requiresAuth = route.meta.requiresAuth ?? true;
  }
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, _, next) => {
  const store = useStore();
  if (to.meta.requiresAuth && !store.auth) {
    // Check if user is logged in or not logged
    next("/auth"); // redirect to login page
  } else {
    next(); // Continue navigation
  }
});

export default router;
