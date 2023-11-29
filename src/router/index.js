import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/components/Login/views/LoginView";

const routes = [
    {
        path: "/",
        name: "content",

        component: HomeView,
        meta: {
            auth: true,
        },
    },
    {
        path: "/login",
        name: "LoginView",
        component: LoginView
    },

    {path: "/:pathMatch(.*)*", component: LoginView},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const isLogin = sessionStorage.getItem('isLogin')
    if (!to.meta.auth){
        next();
    }
    if (isLogin === "true") {
        next();
    } else if (isLogin === "false") {
        next("/login");
    }
})

export default router;
