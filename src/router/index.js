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
            default: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
        },
    },
    {
        path:'/Register',
        name: 'Register',
        components: {
            default: () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue'),
        },
    },
    {
        path:'/mentions-legales',
        name: 'MentionsLegales',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/views/Legal/MentionsLegales.vue'),
        },
    },
    {
        path:'/confidentialite',
        name: 'Confidentialite',
        components: {
            default: () => import(/* webpackChunkName: "Confidentialite" */ '@/views/Legal/Confidentialite.vue'),
        },
    },
    {
        path:'/cgu',
        name: 'CGU',
        components: {
            default: () => import(/* webpackChunkName: "Cookies" */ '@/views/Legal/CGU.vue'),
        },
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        components: {
            default: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue'),
        },
        meta: {
            requiresAuth: true,
        },
    },
    {
        path:'/onboarding',
        name: 'Onboarding',
        components: {
            default: () => import(/* webpackChunkName: "Onboarding" */ '@/views/Onboarding.vue'),
        },
    },
    {
        path:'/coming-soon',
        name: 'CommingSoon',
        components: {
            default: () => import(/* webpackChunkName: "CommingSoon" */ '@/views/ComingSoon.vue'),
        },
    },
    {
        path:'/inscription-ok',
        name: 'InscriptionOk',
        components: {
            default: () => import(/* webpackChunkName: "CommingSoon" */ '@/views/Inscription-ok.vue'),
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
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;
    if(requiresAuth && !isAuthenticated) {
        next("/login");
    } else {
        next();
    }
});

export default router