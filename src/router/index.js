import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/AuthPage.vue"),
  },
  {
    path: "/userPage",
    name: "userPage",
    component: () => import("../views/UserPage.vue"),
  },
  {
    path: "/cataloguePage",
    name: "cataloguePage",
    component: () => import("../views/CataloguePage.vue"),
  },
  {
    path: "/cartPage",
    name: "cartPage",
    component: () => import("../views/CartPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
