import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
      path: "/",
      component: () => import("@/components/Welcome.vue"),
      meta: {
         showBarBottom: false,
         showBarVip: true
      }
   },
   {
      path: "/lite",
      redirect: "/lite/feature"
   },
   {
      path: "/lite/feature",
      component: () => import("@/components/Feature.vue"),
      meta: {
         showBarBottom: true,
         showBarVip: true
      }
   },
   {
      path: "/lite/game",
      component: () => import("@/components/Game.vue"),
      meta: {
         showBarBottom: true,
         showBarVip: true
      }
   },
   {
      path: "/lite/application",
      component: () => import("@/components/Application.vue"),
      meta: {
         showBarBottom: true,
         showBarVip: true
      }
   },
   {
      path: "/lite/search",
      component: () => import("@/components/Search/index.vue"),
      meta: {
         showBarBottom: true,
         showBarVip: true
      }
   },
   {
      path: "/lite/search/result",
      component: () => import("@/components/Search/Real.vue"),
      meta: {
         showBarBottom: false,
         showBarVip: true
      }
   },
   {
      path: "/lite/app/:id",
      component: () => import("@/components/AppInfo.vue"),
      meta: {
         showBarBottom: false,
         showBarVip: true
      }
   },
   {
      path: "/login",
      component: () => import("@/components/LogIn.vue"),
      meta: {
         showBarBottom: false,
         showBarVip: false
      }
   },
   {
      path: "/registered",
      component: () => import("@/components/Registered.vue"),
      meta: {
         showBarBottom: false,
         showBarVip: false
      }
   }
]


export default new VueRouter({
   mode: "history",
   routes,
   scrollBehavior(to, from, saved) {
      return saved || { x: 0, y: 0 }
   },
   linkActiveClass: "active",
   linkExactActiveClass: "exact-active"
})
