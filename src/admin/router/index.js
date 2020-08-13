import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
   {
      path: "/",
      component: () => import("./components/ManagerApps.vue")
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