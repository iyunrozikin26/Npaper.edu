import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import FormResearch from '../components/FormCreate.vue'
import DetailResearch from '../components/DetailResearch.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
        },
        {
            path: "/addResearch",
            name: "addResearch",
            component: FormResearch,
        },
        {
            path: "/detailResearch/:researchId",
            name: "detailResearch",
            component: DetailResearch,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if ((to.name === "login" || to.name === "register") && localStorage.getItem("access_token")) next({ name: "home" });
    else if (to.name === "home" && !localStorage.getItem("access_token")) next({ name: "login" });
    else next();
});

export default router;
