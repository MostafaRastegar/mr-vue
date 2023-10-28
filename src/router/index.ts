import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FullscreenLayout from "@/components/layout/FullScreenLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "about",
    component: () => import("../modules/AboutView.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("../modules/login/Login.view.vue"),
    meta: { layout: FullscreenLayout },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../modules/register/Register.view.vue"),
    meta: { layout: FullscreenLayout },
  },
  {
    path: "/articles",
    name: "dashboard",
    component: () => import("../components/layout/Dashboard/Layout.vue"),
    children: [
      {
        path: "/articles/page/:page",
        name: "list",
        component: () => import("../modules/dashboard/list/List.view.vue"),
      },
      {
        path: "/articles/add",
        name: "addArticle",
        component: () =>
          import("../modules/dashboard/article/Article.view.vue"),
      },
      {
        path: "/articles/edit/:slug",
        name: "article",
        component: () =>
          import("../modules/dashboard/article/Article.view.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

export default router;
