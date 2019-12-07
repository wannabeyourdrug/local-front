import Vue from "vue";
import VueRouter from "vue-router";
import AuthRequired from "./utils/AuthRequired";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "app" */ './views/app'),
    redirect: '/app/main',
    beforeEnter: AuthRequired,
    children: [
      {
        path: 'app/main',
        component: () => import(/* webpackChunkName: "piaf" */ './views/app/main'),
        redirect: '/app/main/start',
        children: [
          { path: 'start', component: () => import(/* webpackChunkName: "piaf" */ './views/app/main/Start') }
        ]
      },
      {
        path: 'app/second-menu',
        component: () => import(/* webpackChunkName: "second-menu" */ './views/app/secondMenu'),
        redirect: '/app/second-menu/second',
        children: [
          { path: 'second', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/secondMenu/Second') }
        ]
      },
      {
        path: 'app/search',
        component: () => import(/* webpackChunkName: "search" */ './views/app/search/Search'),
        // redirect: '/app/search',
      },
      {
        path: 'app/single',
        component: () => import(/* webpackChunkName: "single" */ './views/app/single')
      },
      {
        path: 'app/profile',
        component: () =>
          import(/* webpackChunkName: "pages" */ "./views/app/profile"),
        redirect: "/app/profile/social",
        children: [
          {
            path: "social",
            component: () =>
              import(/* webpackChunkName: "profile" */ "./views/app/profile/Social")
          },
          {
            path: "questionary",
            component: () =>
              import(/* webpackChunkName: "questionary" */ "./views/app/profile/Questionary")
          }
        ]
      },
      {
        path: 'app/applications/chat',
        component: () => import(/* webpackChunkName: "chat" */ './views/app/applications/Chat'),
        redirect: '/app/applications/chat',
      }
    ]
  },
  { path: '/error', component: () => import(/* webpackChunkName: "error" */ './views/Error') },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ './views/user'),
    redirect: '/user/login',
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/user/Login') }
    ]
  },
  { path: '*', component: () => import(/* webpackChunkName: "error" */ './views/Error') }
]

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});

export default router;