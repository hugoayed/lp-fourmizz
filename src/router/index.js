import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        },
    },
    {
        path:'/login',
        name: 'Login',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/views/Login.vue'),
        },
    },
    {
        path:'/sign-up',
        name: 'SignUp',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/views/SignUp.vue'),
        },
    },
    {
        path:'/mentions-legales',
        name: 'MentionsLegales',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/views/MentionsLegales.vue'),
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: function (to) {
        if (to.hash) {
          return {
            selector: to.hash
          }
        }
    },
})

export default router
