import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase';

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
    {
        path: '/dashboard',
        name: 'Dashboard',
        components: {
            default: () => import(/* webpackChunkName: "DashboardView" */ '@/views/DashboardView.vue'),
        },
        meta: {
            authRequired: true,
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
        next();
        } else {
        alert('You must be logged in to see this page');
        next({
            path: '/',
        });
        }
    } else {
        next();
    }
});

export default router
